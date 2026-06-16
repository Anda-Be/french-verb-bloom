import { createFileRoute, Link } from "@tanstack/react-router";
import { MOODS, TENSES } from "@/lib/tenses";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conjugaison — Learn All French Tenses" },
      {
        name: "description",
        content:
          "Master every French tense: présent, passé composé, imparfait, subjonctif and more. Lessons, conjugation tables, and interactive practice.",
      },
      { property: "og:title", content: "Conjugaison — Learn All French Tenses" },
      {
        property: "og:description",
        content:
          "Lessons and interactive practice for all French tenses across every mood.",
      },
    ],
  }),
  component: Home,
});

function DifficultyDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i <= level ? "bg-primary" : "bg-border"}`}
        />
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="paper-texture absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-20">
          <div className="grid items-end gap-10 md:grid-cols-[1.6fr_1fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-primary">
                Édition complète · Grammaire française
              </p>
              <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-7xl">
                Tous les temps
                <span className="block italic text-primary">de la langue française.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Lessons, conjugation tables, and instant-feedback practice for every tense —
                from the everyday <em>présent</em> to the literary <em>passé simple</em>.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  Commencer la pratique →
                </Link>
                <a
                  href="#tenses"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Explorer les temps
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
                <span>Conjugaison · Présent</span>
                <span className="text-primary">être</span>
              </div>
              <table className="mt-4 w-full font-serif text-lg">
                <tbody>
                  {[
                    ["je", "suis"],
                    ["tu", "es"],
                    ["il / elle", "est"],
                    ["nous", "sommes"],
                    ["vous", "êtes"],
                    ["ils / elles", "sont"],
                  ].map(([p, f]) => (
                    <tr key={p} className="border-b border-border/50 last:border-0">
                      <td className="py-1.5 text-muted-foreground">{p}</td>
                      <td className="py-1.5 text-right text-foreground">{f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="absolute -right-3 -top-3 rounded-full bg-or px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow">
                Leçon 01
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {[
            { n: TENSES.length, l: "Temps couverts" },
            { n: 4, l: "Modes" },
            { n: "60+", l: "Conjugaisons" },
            { n: "∞", l: "Questions de pratique" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-serif text-4xl text-primary">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tenses */}
      <section id="tenses" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl text-foreground">Les Temps</h2>
            <p className="mt-2 text-muted-foreground">
              Organisés par mode. Click any tense to read the lesson and full conjugations.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {MOODS.map((mood) => {
            const tenses = TENSES.filter((t) => t.mood === mood);
            return (
              <div key={mood}>
                <div className="mb-5 flex items-baseline gap-4">
                  <h3 className="font-serif text-2xl text-primary">{mood}</h3>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {tenses.length} temps
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tenses.map((t) => (
                    <Link
                      key={t.slug}
                      to="/tense/$slug"
                      params={{ slug: t.slug }}
                      className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                            {t.name}
                          </div>
                          <div className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                            {t.english}
                          </div>
                        </div>
                        <DifficultyDots level={t.difficulty} />
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                        {t.summary}
                      </p>
                      <div className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Lire la leçon →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
