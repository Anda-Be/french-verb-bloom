import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { display, PRONOUNS, TENSES, type Pronoun, type Tense } from "@/lib/tenses";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

type Search = { tense?: string };

export const Route = createFileRoute("/practice")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    tense: typeof s.tense === "string" ? s.tense : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Pratique — French Tense Conjugation Quiz" },
      {
        name: "description",
        content:
          "Test your French conjugations with interactive practice. Choose any tense and get instant feedback.",
      },
      { property: "og:title", content: "Pratique — French Conjugation Quiz" },
      {
        property: "og:description",
        content: "Interactive French tense conjugation drills with instant feedback.",
      },
    ],
  }),
  component: PracticePage,
});

interface Question {
  tense: Tense;
  verb: Tense["conjugations"][number];
  pronoun: Pronoun;
  answer: string;
}

function normalize(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[’']/g, "'");
}

function answersFor(p: Pronoun, raw: string): string[] {
  if (raw === "—") return [];
  const full = display(p, raw).toLowerCase();
  const alt = `${p} ${raw}`.toLowerCase();
  // accept "(e)" optional gender variants by stripping parens
  const stripParens = (s: string) => s.replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
  return Array.from(new Set([full, alt, stripParens(full), stripParens(alt), raw.toLowerCase()]));
}

function buildQuestion(pool: Tense[]): Question {
  const tense = pool[Math.floor(Math.random() * pool.length)];
  const usable = tense.conjugations
    .flatMap((v) => PRONOUNS.map((p) => ({ v, p })))
    .filter(({ v, p }) => v.forms[p] !== "—");
  const pick = usable[Math.floor(Math.random() * usable.length)];
  return {
    tense,
    verb: pick.v,
    pronoun: pick.p,
    answer: pick.v.forms[pick.p],
  };
}

function PracticePage() {
  const { tense: tenseSlug } = Route.useSearch();
  const navigate = Route.useNavigate();

  const [selected, setSelected] = useState<string>(tenseSlug ?? "all");
  const [question, setQuestion] = useState<Question | null>(null);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState({ right: 0, total: 0 });
  const [best, setBest] = useState(0);

  const pool = useMemo(
    () => (selected === "all" ? TENSES : TENSES.filter((t) => t.slug === selected)),
    [selected],
  );

  useEffect(() => {
    setQuestion(buildQuestion(pool));
    setInput("");
    setStatus("idle");
  }, [pool]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const b = Number(localStorage.getItem("fr-best") ?? 0);
    setBest(b);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (score.right > best) {
      setBest(score.right);
      localStorage.setItem("fr-best", String(score.right));
    }
  }, [score, best]);

  function check() {
    if (!question || status !== "idle") return;
    const accepted = answersFor(question.pronoun, question.answer).map(normalize);
    const ok = accepted.includes(normalize(input));
    setStatus(ok ? "correct" : "wrong");
    setScore((s) => ({ right: s.right + (ok ? 1 : 0), total: s.total + 1 }));
  }

  function next() {
    setQuestion(buildQuestion(pool));
    setInput("");
    setStatus("idle");
  }

  const accuracy = score.total ? Math.round((score.right / score.total) * 100) : 0;
  const expected = question ? display(question.pronoun, question.answer) : "";

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-2 text-xs uppercase tracking-[0.25em] text-primary">
          Mode pratique
        </div>
        <h1 className="font-serif text-5xl text-foreground">Conjuguez !</h1>
        <p className="mt-2 text-muted-foreground">
          Tapez la forme correcte avec le pronom. Ex : <em>je suis</em>, <em>nous avons parlé</em>.
        </p>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <label className="text-sm text-muted-foreground">Temps :</label>
          <select
            value={selected}
            onChange={(e) => {
              const v = e.target.value;
              setSelected(v);
              navigate({ search: v === "all" ? {} : { tense: v }, replace: true });
              setScore({ right: 0, total: 0 });
            }}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm font-medium focus:border-primary focus:outline-none"
          >
            <option value="all">Tous les temps</option>
            {TENSES.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name} ({t.mood})
              </option>
            ))}
          </select>
          <div className="ml-auto flex items-center gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Score</span>{" "}
              <span className="font-serif text-lg text-primary">
                {score.right}/{score.total}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Précision</span>{" "}
              <span className="font-serif text-lg text-foreground">{accuracy}%</span>
            </div>
            <div>
              <span className="text-muted-foreground">Record</span>{" "}
              <span className="font-serif text-lg text-or">{best}</span>
            </div>
          </div>
        </div>

        {/* Question card */}
        {question && (
          <div
            className={`mt-8 rounded-2xl border bg-card p-8 shadow-sm transition-colors ${
              status === "correct"
                ? "border-success"
                : status === "wrong"
                  ? "border-destructive"
                  : "border-border"
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>{question.tense.mood} · {question.tense.name}</span>
              <Link
                to="/tense/$slug"
                params={{ slug: question.tense.slug }}
                className="text-primary hover:underline"
              >
                Voir la leçon ↗
              </Link>
            </div>

            <div className="mt-6 text-center">
              <div className="font-serif text-sm uppercase tracking-widest text-muted-foreground">
                Conjuguez
              </div>
              <div className="mt-2 font-serif text-5xl text-primary">
                {question.verb.infinitive}
              </div>
              <div className="mt-1 text-sm italic text-muted-foreground">
                {question.verb.english}
              </div>
              <div className="mt-6 font-serif text-3xl text-foreground">
                <span className="text-muted-foreground">{question.pronoun}</span>{" "}
                <span className="text-foreground/30">_____</span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (status === "idle") check();
                else next();
              }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={status !== "idle"}
                placeholder={`${question.pronoun} …`}
                className="w-full max-w-md rounded-lg border-2 border-border bg-background px-4 py-3 text-center font-serif text-2xl focus:border-primary focus:outline-none disabled:opacity-70"
              />

              {status === "correct" && (
                <div className="text-center text-success">
                  <div className="font-serif text-xl">✓ Excellent !</div>
                  <div className="text-sm text-muted-foreground">
                    Réponse : <span className="text-foreground">{expected}</span>
                  </div>
                </div>
              )}
              {status === "wrong" && (
                <div className="text-center text-destructive">
                  <div className="font-serif text-xl">✗ Presque !</div>
                  <div className="text-sm text-muted-foreground">
                    Bonne réponse :{" "}
                    <span className="font-serif text-lg text-foreground">{expected}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                {status === "idle" ? (
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow hover:shadow-md disabled:opacity-50"
                  >
                    Vérifier
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow hover:shadow-md"
                  >
                    Question suivante →
                  </button>
                )}
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary"
                >
                  Passer
                </button>
              </div>
            </form>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Astuce : on accepte les réponses avec ou sans le pronom. Pour les verbes pronominaux
          conjugués avec être, le « (e) » de genre est optionnel.
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}
