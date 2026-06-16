import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Conjugaison" },
      {
        name: "description",
        content:
          "About Conjugaison: a focused, free resource for mastering all French verb tenses.",
      },
      { property: "og:title", content: "À propos — Conjugaison" },
      {
        property: "og:description",
        content: "About this free French tense learning app.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">À propos</div>
        <h1 className="mt-3 font-serif text-5xl text-foreground">Pourquoi cette appli ?</h1>
        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            French verb conjugation is the doorway to fluency — and the place most learners
            stall. <em>Conjugaison</em> brings every tense into one calm, focused place:
            the rule, the usage, real examples, and the full conjugation tables you need.
          </p>
          <p>
            We cover all four moods —{" "}
            <span className="text-primary font-medium">Indicatif</span>,{" "}
            <span className="text-primary font-medium">Conditionnel</span>,{" "}
            <span className="text-primary font-medium">Subjonctif</span>, and{" "}
            <span className="text-primary font-medium">Impératif</span> — across every commonly
            used tense, from <em>présent</em> to <em>plus-que-parfait</em> and beyond.
          </p>
          <p>
            Pair the lessons with the practice mode: it picks random verbs, pronouns, and
            tenses, gives instant feedback, and tracks your streak.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-full border border-border px-5 py-2 text-sm text-foreground hover:bg-secondary"
          >
            Parcourir les temps
          </Link>
          <Link
            to="/practice"
            className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:shadow-md"
          >
            Commencer la pratique
          </Link>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
