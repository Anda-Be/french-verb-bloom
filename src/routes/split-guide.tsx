import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/split-guide")({
  head: () => ({
    meta: [
      { title: "Split this project into two — Guide" },
      {
        name: "description",
        content:
          "Step-by-step guide for using History and Remix in Lovable to split one project into two without overwriting versions.",
      },
      { property: "og:title", content: "Split this project into two — Guide" },
      {
        property: "og:description",
        content:
          "Use History + Remix to recover an earlier app and rename the current one without losing work.",
      },
    ],
  }),
  component: SplitGuidePage,
});

type Step = {
  title: string;
  body: React.ReactNode;
  tip?: string;
};

const STEPS: Step[] = [
  {
    title: "Rename the current project first",
    body: (
      <>
        Top-left of the editor, click the project name (currently{" "}
        <em>French Tense Tutor</em>) → <strong>Rename project</strong> → type{" "}
        <code>English in Real Life</code>. This only changes the display name —
        no code, no URL, no history is touched.
      </>
    ),
    tip: "Doing this first removes the confusion of seeing the old French name while you work in the English app.",
  },
  {
    title: "Open History",
    body: (
      <>
        Click the clock icon in the top bar, or use Plus (+) →{" "}
        <strong>History</strong>. On mobile: Preview mode → clock icon
        bottom-left, or “…” → History.
      </>
    ),
  },
  {
    title: "Find the last French Tenses version",
    body: (
      <>
        Scroll down through the versions (newest at top). Click versions to
        preview them and locate the last one where the app was still about
        French verb tenses — the version <em>just before</em> the switch to
        English in Real Life.
      </>
    ),
    tip: "You are only previewing here. Nothing is overwritten until you click Restore.",
  },
  {
    title: "Restore that version (temporarily)",
    body: (
      <>
        On the French Tenses version click <strong>Restore</strong>. The current
        project rolls back to French Tenses. All later versions (English in
        Real Life) stay safely listed in History — they are <em>not</em>{" "}
        deleted.
      </>
    ),
  },
  {
    title: "Remix this project → creates the standalone “French Tenses”",
    body: (
      <>
        Click the project name top-left → <strong>Settings</strong> → section{" "}
        <strong>Project</strong> → <strong>General</strong> →{" "}
        <strong>Remix this project</strong>. A new, independent project is
        created from the current (French Tenses) state. Rename it{" "}
        <code>French Tenses</code> in its own top-left menu.
      </>
    ),
    tip: "The remix is a separate project with its own URL and its own history. Editing it never affects this one.",
  },
  {
    title: "Come back here and restore the English version",
    body: (
      <>
        Switch back to the original project (this one). Open History again, find
        the most recent <em>English in Real Life</em> entry, click{" "}
        <strong>Restore</strong>. The current project becomes the English app
        again.
      </>
    ),
    tip: "If you skip this step the original project will stay on the French Tenses version.",
  },
  {
    title: "Publish each project with its own URL",
    body: (
      <>
        In each project, open <strong>Publish</strong> (globe icon top-right /
        “…” → Publish on mobile), edit the Lovable slug, and click Update.
        Suggested: <code>english-in-real-life</code> here, and{" "}
        <code>french-tenses</code> (or similar) in the remixed project.
      </>
    ),
  },
];

const STORAGE_KEY = "split-guide:done";

function SplitGuidePage() {
  const [done, setDone] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done]);

  const completed = Object.values(done).filter(Boolean).length;
  const pct = Math.round((completed / STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Workspace guide
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight">
            Split this project into two, safely
          </h1>
          <p className="mt-4 text-muted-foreground">
            Use this checklist when you want to recover an earlier version of an
            app (here: <em>French Tenses</em>) as a separate project, while
            keeping the current app (<em>English in Real Life</em>) intact. Tick
            steps as you go — progress is saved in this browser.
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {completed} / {STEPS.length} steps done
              </span>
              <span>{pct}%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </header>

        <ol className="space-y-4">
          {STEPS.map((s, i) => {
            const isDone = !!done[i];
            return (
              <li
                key={i}
                className={`rounded-2xl border bg-card p-5 transition-colors ${
                  isDone ? "border-primary/40 bg-primary/5" : "border-border"
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setDone((d) => ({ ...d, [i]: !d[i] }))
                    }
                    aria-pressed={isDone}
                    aria-label={
                      isDone ? `Mark step ${i + 1} undone` : `Mark step ${i + 1} done`
                    }
                    className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-semibold transition-colors ${
                      isDone
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-primary/60"
                    }`}
                  >
                    {isDone ? "✓" : i + 1}
                  </button>
                  <div className="min-w-0 flex-1">
                    <h2
                      className={`font-serif text-lg font-semibold ${
                        isDone ? "text-muted-foreground line-through" : ""
                      }`}
                    >
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                      {s.body}
                    </p>
                    {s.tip ? (
                      <p className="mt-3 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2 text-xs text-muted-foreground">
                        💡 {s.tip}
                      </p>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <section className="mt-12 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-serif text-xl font-semibold">
            Rules to avoid overwriting
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground/90">
            <li>
              • <strong>Restore</strong> rolls the project to a past state, but{" "}
              <em>every version stays in History</em> and can be restored again.
              You cannot lose a version by clicking Restore.
            </li>
            <li>
              • <strong>Remix</strong> creates a brand new project. It never
              modifies the project you remix from.
            </li>
            <li>
              • Renaming a project only changes its display name. The URL slug
              changes only when you edit it in the <strong>Publish</strong>{" "}
              dialog and click Update.
            </li>
            <li>
              • If something looks wrong, do not delete anything — open History
              and Restore the version you want.
            </li>
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => setDone({})}
            className="rounded-md border border-border px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/60"
          >
            Reset checklist
          </button>
          <a
            href="https://docs.lovable.dev/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/60"
          >
            Open Lovable docs ↗
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
