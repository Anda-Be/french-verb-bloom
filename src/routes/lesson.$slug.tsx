import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LESSONS_BY_SLUG, type Exercise, type MatchPair } from "@/lib/lessons";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/lesson/$slug")({
  head: ({ params }) => {
    const l = LESSONS_BY_SLUG[params.slug];
    const title = l ? `${l.title} — English in Real Life` : "Lesson — English in Real Life";
    const desc = l?.summary ?? "A real-life English lesson.";
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
                name: `${l.title} — ${l.tagline}`,
                description: l.summary,
                inLanguage: "en",
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
        <h1 className="font-serif text-4xl">Lesson not found</h1>
        <p className="mt-3 text-muted-foreground">This situation doesn't exist (yet).</p>
        <Link to="/" className="mt-6 inline-block text-primary underline">
          ← Back to all lessons
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
          ← All lessons
        </Link>

        <header className="mt-4">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <img
              src={lesson.image}
              alt={`Illustration: ${lesson.title}`}
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
          <p className="mt-1 text-muted-foreground">{lesson.tagline}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-primary">{lesson.cefr}</p>
          <p className="mt-4 text-lg text-muted-foreground">{lesson.summary}</p>
        </header>

        {/* Dialog */}
        <Section number="1" title="Real-life dialogue" subtitle="Read it out loud.">
          <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
            {lesson.dialog.map((line, i) => (
              <div key={i}>
                <div className="text-[11px] uppercase tracking-widest text-primary">
                  {line.speaker}
                </div>
                <div className="mt-1 font-serif text-xl text-foreground whitespace-pre-line">
                  {line.en}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Explanations */}
        <Section number="2" title="Explanations" subtitle="What's actually going on.">
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
        <Section number="3" title="C1 vocabulary" subtitle="Idioms, phrasal verbs, collocations · meanings in Romanian.">
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
        <Section number="4" title="Exercises" subtitle="Fill in, choose, transform.">
          <div className="space-y-4">
            {lesson.exercises.map((ex, i) => (
              <ExerciseCard key={i} index={i + 1} ex={ex} />
            ))}
          </div>
        </Section>

        {/* Free response */}
        <Section number="5" title="Free response" subtitle="Now you produce the language.">
          <FreeResponse prompt={lesson.freePrompt.prompt} hint={lesson.freePrompt.hint} />
        </Section>

        {/* Mini-game */}
        <Section number="6" title="Mini-game: Match" subtitle="Match each English expression with its Romanian meaning.">
          <MatchGame pairs={lesson.match} />
        </Section>

        <div className="mt-16 flex justify-between text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            ← Back to lessons
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
          Exercise {index} · Fill in
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
            placeholder="Your answer…"
            aria-label={`Your answer to exercise ${index}: ${ex.prompt}`}
            className="flex-1 min-w-[160px] rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button
            onClick={() => setStatus(ex.answers.includes(normalize(value)) ? "ok" : "no")}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Check
          </button>
        </div>
        {status === "ok" && (
          <p className="mt-2 text-sm text-success">✓ Correct!</p>
        )}
        {status === "no" && (
          <p className="mt-2 text-sm text-destructive">
            ✗ Try again. (Accepted answers: {ex.answers.join(", ")})
          </p>
        )}
      </div>
    );
  }

  if (ex.kind === "transform") {
    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
          Exercise {index} · Transform
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
            placeholder="Your rewrite in English…"
            aria-label={`Your English rewrite for exercise ${index}`}
            className="flex-1 min-w-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button
            onClick={() => setStatus(ex.answers.includes(normalize(value)) ? "ok" : "no")}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Check
          </button>
        </div>
        {status === "ok" && <p className="mt-2 text-sm text-success">✓ Excellent!</p>}
        {status === "no" && (
          <p className="mt-2 text-sm text-destructive">
            ✗ Try again. Accepted examples:
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
        Exercise {index} · Choose
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
      <p className="mt-1 text-xs text-muted-foreground italic">Tip: {hint}</p>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setSent(false);
        }}
        rows={4}
        placeholder="Write your answer here in English…"
        aria-label={`Free response in English: ${prompt}`}
        className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{words} words</span>
        <button
          onClick={() => setSent(true)}
          disabled={words < 3}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-40"
        >
          Save
        </button>
      </div>
      {sent && (
        <p className="mt-2 text-sm text-success">
          ✓ Nicely done. Producing your own language is the best practice — now read it out loud.
        </p>
      )}
    </div>
  );
}

function buildHint(translation: string): string {
  // Reveal first letter of each meaningful word, mask the rest.
  return translation
    .split(/(\s+)/)
    .map((chunk) => {
      if (/^\s+$/.test(chunk)) return chunk;
      // keep short connectors visible
      if (chunk.length <= 2) return chunk;
      const first = chunk[0];
      const rest = chunk.slice(1).replace(/[A-Za-zĂÂÎȘȚăâîșț]/g, "·");
      return first + rest;
    })
    .join("");
}

const MAX_WRONG = 3;

function MatchGame({ pairs }: { pairs: MatchPair[] }) {
  const left = pairs.map((p, i) => ({ id: i, text: p.en }));
  const right = useMemo(() => {
    const arr = pairs.map((p, i) => ({ id: i, text: p.ro }));
    // simple seeded shuffle
    return [...arr].sort((a, b) => (a.text.length % 3) - (b.text.length % 3)).reverse();
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [wrongRightId, setWrongRightId] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<Record<number, number>>({});
  const [hintsFor, setHintsFor] = useState<Set<number>>(new Set());
  const [hintsUsedCount, setHintsUsedCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [lastReveal, setLastReveal] = useState<number | null>(null);

  const allDone = matched.size === pairs.length;
  const wrongAttempts = Object.values(attempts).reduce((a, b) => a + b, 0);
  const perfect = allDone && wrongAttempts === 0 && hintsUsedCount === 0 && revealed.size === 0;

  function reset() {
    setSelectedLeft(null);
    setMatched(new Set());
    setRevealed(new Set());
    setWrongRightId(null);
    setAttempts({});
    setHintsFor(new Set());
    setHintsUsedCount(0);
    setTotalAttempts(0);
    setLastReveal(null);
  }

  function pickLeft(id: number) {
    if (matched.has(id)) return;
    setSelectedLeft(id);
    setWrongRightId(null);
    setLastReveal(null);
  }

  function revealAnswer(pairId: number) {
    setMatched((m) => {
      const next = new Set(m);
      next.add(pairId);
      return next;
    });
    setRevealed((r) => {
      const next = new Set(r);
      next.add(pairId);
      return next;
    });
    setSelectedLeft(null);
    setWrongRightId(null);
    setLastReveal(pairId);
  }

  function pickRight(id: number) {
    if (selectedLeft === null || matched.has(id)) return;
    setTotalAttempts((n) => n + 1);
    if (selectedLeft === id) {
      const next = new Set(matched);
      next.add(id);
      setMatched(next);
      setSelectedLeft(null);
      setWrongRightId(null);
      setLastReveal(null);
    } else {
      const currentLeft = selectedLeft;
      setWrongRightId(id);
      const nextCount = (attempts[currentLeft] ?? 0) + 1;
      setAttempts((a) => ({ ...a, [currentLeft]: nextCount }));

      if (nextCount >= MAX_WRONG) {
        // Out of attempts — reveal the full correct answer for this pair.
        setTimeout(() => revealAnswer(currentLeft), 500);
      } else if (nextCount >= 2 && !hintsFor.has(currentLeft)) {
        // Auto-reveal masked hint after 2 wrong attempts.
        setHintsFor((h) => new Set(h).add(currentLeft));
        setHintsUsedCount((n) => n + 1);
      }
      setTimeout(() => setWrongRightId((cur) => (cur === id ? null : cur)), 600);
    }
  }

  function revealHint() {
    if (selectedLeft === null || hintsFor.has(selectedLeft)) return;
    setHintsFor((h) => new Set(h).add(selectedLeft));
    setHintsUsedCount((n) => n + 1);
  }

  const selectedHint =
    selectedLeft !== null && hintsFor.has(selectedLeft)
      ? buildHint(pairs[selectedLeft].ro)
      : null;

  const attemptsLeft =
    selectedLeft !== null ? MAX_WRONG - (attempts[selectedLeft] ?? 0) : 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          Click an English expression, then its Romanian meaning. You have {MAX_WRONG} tries per pair.
        </p>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-muted-foreground">
            {matched.size}/{pairs.length} · {wrongAttempts} miss{wrongAttempts === 1 ? "" : "es"}
            {hintsUsedCount > 0 && ` · ${hintsUsedCount} hint${hintsUsedCount === 1 ? "" : "s"}`}
            {revealed.size > 0 && ` · ${revealed.size} revealed`}
          </span>
          <button
            onClick={revealHint}
            disabled={selectedLeft === null || (selectedLeft !== null && hintsFor.has(selectedLeft))}
            className="rounded-md border border-border px-2 py-1 text-primary hover:border-primary/60 disabled:cursor-not-allowed disabled:opacity-40"
          >
            💡 Hint
          </button>
          <button onClick={reset} className="text-primary hover:underline">
            Reset
          </button>
        </div>
      </div>

      {selectedLeft !== null && !matched.has(selectedLeft) && (
        <div className="mt-3 rounded-md border border-dashed border-border bg-background/60 px-3 py-2 text-xs text-muted-foreground">
          Selected: <span className="font-serif text-foreground">{pairs[selectedLeft].en}</span>
          {selectedHint && (
            <span className="ml-2">
              · hint: <span className="font-mono text-primary">{selectedHint}</span>
            </span>
          )}
          {(attempts[selectedLeft] ?? 0) > 0 && (
            <span className="ml-2 text-destructive">
              · {attempts[selectedLeft]}/{MAX_WRONG} wrong
              {attemptsLeft > 0 && ` · ${attemptsLeft} tr${attemptsLeft === 1 ? "y" : "ies"} left`}
            </span>
          )}
        </div>
      )}

      {lastReveal !== null && (
        <div className="mt-3 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs">
          <span className="font-semibold text-amber-700 dark:text-amber-400">Answer revealed:</span>{" "}
          <span className="font-serif text-foreground">{pairs[lastReveal].en}</span>
          {" = "}
          <span className="font-serif text-foreground">{pairs[lastReveal].ro}</span>
        </div>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          {left.map((item) => {
            const done = matched.has(item.id);
            const wasRevealed = revealed.has(item.id);
            const sel = selectedLeft === item.id;
            const wrongs = attempts[item.id] ?? 0;
            return (
              <button
                key={item.id}
                disabled={done}
                onClick={() => pickLeft(item.id)}
                className={[
                  "w-full rounded-md border px-3 py-2 text-left text-sm transition-all flex items-center justify-between gap-2",
                  wasRevealed
                    ? "border-amber-500/50 bg-amber-500/10 text-muted-foreground line-through"
                    : done
                    ? "border-success bg-success/10 text-muted-foreground line-through"
                    : sel
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-background hover:border-primary/60",
                ].join(" ")}
              >
                <span>{item.text}</span>
                <span className="flex shrink-0 items-center gap-1">
                  {!done && wrongs > 0 && (
                    <span className="rounded-full bg-destructive/10 px-1.5 text-[10px] text-destructive">
                      ×{wrongs}
                    </span>
                  )}
                  {!done && hintsFor.has(item.id) && (
                    <span className="text-[10px]" aria-label="hint used">
                      💡
                    </span>
                  )}
                  {wasRevealed && (
                    <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                      revealed
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {right.map((item) => {
            const done = matched.has(item.id);
            const wasRevealed = revealed.has(item.id);
            const isWrong = wrongRightId === item.id;
            return (
              <button
                key={item.id}
                disabled={done}
                onClick={() => pickRight(item.id)}
                className={[
                  "w-full rounded-md border px-3 py-2 text-left text-sm transition-all",
                  wasRevealed
                    ? "border-amber-500/50 bg-amber-500/10 text-muted-foreground line-through"
                    : done
                    ? "border-success bg-success/10 text-muted-foreground line-through"
                    : isWrong
                    ? "border-destructive bg-destructive/10 text-foreground animate-pulse"
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
        <div className="mt-4 rounded-xl border border-success/40 bg-success/5 p-4 text-center">
          <p className="font-serif text-lg text-success">
            {perfect
              ? "🏆 Flawless run — you matched them all on the first try."
              : revealed.size > 0
              ? "🎉 Round complete — review the revealed pairs above."
              : "🎉 All matched!"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {totalAttempts} total attempt{totalAttempts === 1 ? "" : "s"} · {wrongAttempts} miss
            {wrongAttempts === 1 ? "" : "es"} · {hintsUsedCount} hint{hintsUsedCount === 1 ? "" : "s"} ·{" "}
            {revealed.size} revealed
          </p>
          <button
            onClick={reset}
            className="mt-3 rounded-md border border-border px-3 py-1.5 text-xs text-primary hover:border-primary/60"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

