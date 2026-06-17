import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSONS } from "@/lib/lessons";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "English in Real Life — Învață engleza din situații reale" },
      {
        name: "description",
        content:
          "Învață engleza așa cum o folosești cu adevărat: la restaurant, la aeroport, la interviu, cu prietenii sau online. Dialoguri, exerciții și mini-jocuri.",
      },
      { property: "og:title", content: "English in Real Life" },
      {
        property: "og:description",
        content:
          "Engleza pe care chiar o folosești — situații reale, nu liste abstracte.",
      },
    ],
  }),
  component: Home,
});

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
                Engleza în viața reală
              </p>
              <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-7xl">
                Vorbește engleza
                <span className="block italic text-primary">așa cum se vorbește cu adevărat.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Fiecare lecție = o situație reală. Comanzi la restaurant, treci de check-in,
                răspunzi la interviu, vorbești cu prieteni sau scrii un email. Fără
                liste abstracte.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#lectii"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  Începe să înveți →
                </a>
              </div>
            </div>

            {/* Mini dialog card */}
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
                <span>Dialog · La restaurant</span>
                <span className="text-primary">🍝</span>
              </div>
              <div className="mt-4 space-y-3 font-serif text-base">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Waiter</div>
                  <div className="text-foreground">Are you ready to order?</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">You</div>
                  <div className="text-foreground italic">I'll have the pasta, please.</div>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 rounded-full bg-or px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow">
                Lecția 01
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {[
            { n: LESSONS.length, l: "Situații reale" },
            { n: "RO", l: "Explicații în română" },
            { n: "5+", l: "Tipuri de exerciții" },
            { n: "🎮", l: "Mini-joc în fiecare lecție" },
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

      {/* Lessons */}
      <section id="lectii" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="font-serif text-4xl text-foreground">Situațiile</h2>
          <p className="mt-2 text-muted-foreground">
            Alege o situație. Citește dialogul, înțelege regulile, exersează, joacă-te.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LESSONS.map((l) => (
            <Link
              key={l.slug}
              to="/lesson/$slug"
              params={{ slug: l.slug }}
              className="group relative rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-3xl">{l.emoji}</div>
                  <div className="mt-3 font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                    {l.title}
                  </div>
                  <div className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                    {l.titleRo}
                  </div>
                </div>
                <span className="rounded-full border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {l.level}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{l.summary}</p>
              <div className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Începe lecția →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
