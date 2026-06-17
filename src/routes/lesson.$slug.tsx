import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LESSONS_BY_SLUG, type Exercise, type MatchPair } from "@/lib/lessons";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/lesson/$slug")({
  head: ({ params }) => {
    const l = LESSONS_BY_SLUG[params.slug];
    const title = l ? `${l.title} — English in Real Life` : "Lecție — English in Real Life";
    const desc = l?.summary ?? "O lecție de engleză din viața reală.";
    const url = `https://french-verb-bloom.lovable.app/lesson/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: l
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LearningResource",
                name: `${l.title} — ${l.titleRo}`,
                description: l.summary,
                inLanguage: ["ro", "en"],
                educationalLevel: l.level,
                learningResourceType: "Lesson",
                teaches: l.cefr,
                url,
              }),
            },
          ]
        : undefined,
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl">Lecție inexistentă</h1>
        <p className="mt-3 text-muted-foreground">Această situație nu există (încă).</p>
        <Link to="/" className="mt-6 inline-block text-primary underline">
          ← Înapoi la toate lecțiile
        </Link>
      </div>
    </div>
  ),
  component: LessonPage,
});

function LessonPage() {
  const { slug } = Route.useParams();
  const lesson = LESSONS_BY_SLUG[slug];
  if (!lesson) {
    throw notFound();
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
          ← Toate lecțiile
        </Link>

        <header className="mt-4">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <img
              src={lesson.image}
              alt={`Ilustrație: ${lesson.titleRo}`}
              width={1024}
              height={1024}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-4xl">{lesson.emoji}</span>
            <span className="rounded-full border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
              {lesson.level}
            </span>
          </div>
          <h1 className="mt-3 font-serif text-5xl text-foreground">{lesson.title}</h1>
          <p className="mt-1 text-muted-foreground">{lesson.titleRo}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-primary">{lesson.cefr}</p>
          <p className="mt-4 text-lg text-muted-foreground">{lesson.summary}</p>
        </header>

        {/* Dialog */}
        <Section number="1" title="Dialog realist" subtitle="Citește cu voce tare.">
          <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
            {lesson.dialog.map((line, i) => (
              <div key={i}>
                <div className="text-[11px] uppercase tracking-widest text-primary">
                  {line.speaker}
                </div>
                <div className="mt-1 font-serif text-xl text-foreground whitespace-pre-line">
                  {line.en}
                </div>
                <div className="mt-1 text-sm text-muted-foreground whitespace-pre-line">
                  {line.ro}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Explanations */}
        <Section number="2" title="Explicații" subtitle="În română, fără jargon.">
          <div className="space-y-3">
            {lesson.explanations.map((e, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="font-serif text-lg text-primary">{e.title}</div>
                <p className="mt-1 text-sm text-foreground/90">{e.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Vocabulary */}
        <Section number="3" title="Vocabular C1" subtitle="Idiomuri, phrasal verbs, colocații.">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <ul className="divide-y divide-border">
              {lesson.vocabulary.map((v, i) => (
                <li key={i} className="grid gap-1 p-4 sm:grid-cols-[1fr_2fr] sm:gap-4">
                  <div>
                    <div className="font-serif text-lg text-foreground">{v.term}</div>
                    <span className="mt-1 inline-block rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {v.type}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/90">{v.meaning}</p>
                    <p className="mt-1 text-sm italic text-muted-foreground">“{v.example}”</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Exercises */}
        <Section number="4" title="Exerciții" subtitle="Completează, alege, transformă.">
          <div className="space-y-4">
            {lesson.exercises.map((ex, i) => (
              <ExerciseCard key={i} index={i + 1} ex={ex} />
            ))}
          </div>
        </Section>

        {/* Free response */}
        <Section number="5" title="Răspuns liber" subtitle="Produci tu limbaj.">
          <FreeResponse prompt={lesson.freePrompt.prompt} hint={lesson.freePrompt.hint} />
        </Section>

        {/* Mini-game */}
        <Section number="6" title="Mini-joc: Match" subtitle="Asociază engleza cu româna.">
          <MatchGame pairs={lesson.match} />
        </Section>

        <div className="mt-16 flex justify-between text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            ← Înapoi la lecții
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

function Section({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-serif text-3xl text-primary">{number}</span>
        <div>
          <h2 className="font-serif text-2xl text-foreground">{title}</h2>
          {subtitle && (
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/[.,!?;:'"]/g, "").replace(/\s+/g, " ");
}

function ExerciseCard({ ex, index }: { ex: Exercise; index: number }) {
  const [value, setValue] = useState("");
  const [picked, setPicked] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "ok" | "no">("idle");

  if (ex.kind === "fill") {
    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
          Exercițiu {index} · Completează
        </div>
        <p className="mt-2 font-serif text-lg text-foreground">{ex.prompt}</p>
        {ex.hint && <p className="mt-1 text-xs text-muted-foreground italic">{ex.hint}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setStatus("idle");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setStatus(ex.answers.includes(normalize(value)) ? "ok" : "no");
              }
            }}
            placeholder="Răspuns…"
            aria-label={`Răspunsul tău la exercițiul ${index}: ${ex.prompt}`}
            className="flex-1 min-w-[160px] rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button
            onClick={() => setStatus(ex.answers.includes(normalize(value)) ? "ok" : "no")}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Verifică
          </button>
        </div>
        {status === "ok" && (
          <p className="mt-2 text-sm text-success">✓ Corect!</p>
        )}
        {status === "no" && (
          <p className="mt-2 text-sm text-destructive">
            ✗ Mai încearcă. (Variante acceptate: {ex.answers.join(", ")})
          </p>
        )}
      </div>
    );
  }

  if (ex.kind === "transform") {
    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
          Exercițiu {index} · Transformă
        </div>
        <p className="mt-2 font-serif text-lg text-foreground">{ex.prompt}</p>
        <p className="mt-2 rounded-md border border-border bg-background px-3 py-2 font-serif italic text-foreground">
          “{ex.sentence}”
        </p>
        {ex.hint && <p className="mt-1 text-xs text-muted-foreground italic">{ex.hint}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setStatus("idle");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setStatus(ex.answers.includes(normalize(value)) ? "ok" : "no");
              }
            }}
            placeholder="Rescrierea ta în engleză…"
            aria-label={`Rescrierea ta în engleză la exercițiul ${index}`}
            className="flex-1 min-w-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button
            onClick={() => setStatus(ex.answers.includes(normalize(value)) ? "ok" : "no")}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Verifică
          </button>
        </div>
        {status === "ok" && <p className="mt-2 text-sm text-success">✓ Excelent!</p>}
        {status === "no" && (
          <p className="mt-2 text-sm text-destructive">
            ✗ Mai încearcă. Exemple acceptate:
            <span className="mt-1 block italic text-muted-foreground">{ex.answers.join(" · ")}</span>
          </p>
        )}
      </div>
    );
  }

  // choice
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
        Exercițiu {index} · Alege
      </div>
      <p className="mt-2 font-serif text-lg text-foreground">{ex.prompt}</p>
      <div className="mt-3 grid gap-2">
        {ex.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === ex.correct;
          const showState = picked !== null;
          return (
            <button
              key={i}
              onClick={() => setPicked(i)}
              className={[
                "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                showState && isCorrect
                  ? "border-success bg-success/10 text-foreground"
                  : showState && isPicked && !isCorrect
                  ? "border-destructive bg-destructive/10 text-foreground"
                  : "border-border bg-background hover:border-primary/60",
              ].join(" ")}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && ex.explain && (
        <p className="mt-2 text-xs text-muted-foreground italic">{ex.explain}</p>
      )}
    </div>
  );
}

function FreeResponse({ prompt, hint }: { prompt: string; hint: string }) {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="font-serif text-lg text-foreground">{prompt}</p>
      <p className="mt-1 text-xs text-muted-foreground italic">Sfat: {hint}</p>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setSent(false);
        }}
        rows={4}
        placeholder="Scrie aici în engleză…"
        aria-label={`Răspuns liber în engleză: ${prompt}`}
        className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{words} cuvinte</span>
        <button
          onClick={() => setSent(true)}
          disabled={words < 3}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-40"
        >
          Salvează
        </button>
      </div>
      {sent && (
        <p className="mt-2 text-sm text-success">
          ✓ Bravo! Producția proprie e cel mai bun antrenament. Recitește-l cu voce tare.
        </p>
      )}
    </div>
  );
}

type MatchState = "idle" | "wrong";

function MatchGame({ pairs }: { pairs: MatchPair[] }) {
  const left = pairs.map((p, i) => ({ id: i, text: p.en }));
  const right = useMemo(() => {
    const arr = pairs.map((p, i) => ({ id: i, text: p.ro }));
    // simple seeded shuffle
    return [...arr].sort((a, b) => (a.text.length % 3) - (b.text.length % 3)).reverse();
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [shake, setShake] = useState<MatchState>("idle");

  const allDone = matched.size === pairs.length;

  function pickLeft(id: number) {
    if (matched.has(id)) return;
    setSelectedLeft(id);
    setShake("idle");
  }
  function pickRight(id: number) {
    if (selectedLeft === null || matched.has(id)) return;
    if (selectedLeft === id) {
      const next = new Set(matched);
      next.add(id);
      setMatched(next);
      setSelectedLeft(null);
    } else {
      setShake("wrong");
      setTimeout(() => setShake("idle"), 400);
      setSelectedLeft(null);
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Click pe o expresie în engleză, apoi pe traducerea ei.
        </p>
        <button
          onClick={() => {
            setMatched(new Set());
            setSelectedLeft(null);
          }}
          className="text-xs text-primary hover:underline"
        >
          Resetează
        </button>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          {left.map((item) => {
            const done = matched.has(item.id);
            const sel = selectedLeft === item.id;
            return (
              <button
                key={item.id}
                disabled={done}
                onClick={() => pickLeft(item.id)}
                className={[
                  "w-full rounded-md border px-3 py-2 text-left text-sm transition-all",
                  done
                    ? "border-success bg-success/10 text-muted-foreground line-through"
                    : sel
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-background hover:border-primary/60",
                ].join(" ")}
              >
                {item.text}
              </button>
            );
          })}
        </div>
        <div className={["space-y-2", shake === "wrong" ? "animate-pulse" : ""].join(" ")}>
          {right.map((item) => {
            const done = matched.has(item.id);
            return (
              <button
                key={item.id}
                disabled={done}
                onClick={() => pickRight(item.id)}
                className={[
                  "w-full rounded-md border px-3 py-2 text-left text-sm transition-all",
                  done
                    ? "border-success bg-success/10 text-muted-foreground line-through"
                    : "border-border bg-background hover:border-primary/60",
                ].join(" ")}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
      {allDone && (
        <p className="mt-4 text-center font-serif text-lg text-success">
          🎉 Perfect! Le-ai prins pe toate.
        </p>
      )}
    </div>
  );
}
