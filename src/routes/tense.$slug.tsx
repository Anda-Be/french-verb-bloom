import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { display, getTense, PRONOUNS, TENSES, type Tense } from "@/lib/tenses";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/tense/$slug")({
  head: ({ params }) => {
    const t = getTense(params.slug);
    const title = t ? `${t.name} — French ${t.english}` : "Tense";
    const desc = t?.summary ?? "French tense lesson and conjugations.";
    return {
      meta: [
        { title: `${title} · Conjugaison` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }): Tense => {
    const tense = getTense(params.slug);
    if (!tense) throw notFound();
    return tense;
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-5xl text-foreground">Temps introuvable</h1>
        <p className="mt-3 text-muted-foreground">Ce temps n'existe pas dans notre catalogue.</p>
        <Link to="/" className="mt-6 inline-block text-primary underline">
          ← Retour aux temps
        </Link>
      </div>
    </div>
  ),
  component: TensePage,
});

function TensePage() {
  const tense = Route.useLoaderData();
  const idx = TENSES.findIndex((t) => t.slug === tense.slug);
  const prev = TENSES[idx - 1];
  const next = TENSES[idx + 1];

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 py-12">
        <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
          ← Tous les temps
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <div className="text-xs uppercase tracking-[0.25em] text-primary">{tense.mood}</div>
          <h1 className="mt-3 font-serif text-6xl text-foreground leading-none">{tense.name}</h1>
          <p className="mt-3 font-serif text-xl italic text-muted-foreground">{tense.english}</p>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">{tense.summary}</p>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-2xl text-primary">Formation</h2>
            <p className="mt-3 text-foreground/85 leading-relaxed">{tense.formation}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-serif text-2xl text-primary">Quand l'utiliser</h2>
            <ul className="mt-3 space-y-2 text-foreground/85">
              {tense.usage.map((u, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1 w-3 flex-none bg-or" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-3xl text-foreground">Exemples</h2>
          <div className="mt-4 space-y-3">
            {tense.examples.map((ex, i) => (
              <blockquote
                key={i}
                className="rounded-xl border-l-4 border-primary bg-secondary/40 p-5"
              >
                <p className="font-serif text-xl text-foreground">« {ex.fr} »</p>
                <p className="mt-1 text-sm text-muted-foreground">{ex.en}</p>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-3xl text-foreground">Conjugaisons</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Verbes types et auxiliaires essentiels.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {tense.conjugations.map((c) => (
              <div
                key={c.infinitive}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                  <div>
                    <div className="font-serif text-2xl text-foreground">{c.infinitive}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {c.english}
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-primary">
                    {tense.name}
                  </div>
                </div>
                <table className="mt-3 w-full font-serif">
                  <tbody>
                    {PRONOUNS.map((p) => (
                      <tr key={p} className="border-b border-border/40 last:border-0">
                        <td className="py-1.5 pr-3 text-sm text-muted-foreground w-[42%]">
                          {p}
                        </td>
                        <td className="py-1.5 text-right text-foreground">
                          {c.forms[p] === "—" ? (
                            <span className="text-muted-foreground/50">—</span>
                          ) : (
                            <span>
                              <span className="text-muted-foreground/70 text-sm">
                                {display(p, c.forms[p]).split(" ")[0]}{" "}
                              </span>
                              <span className="text-primary">
                                {display(p, c.forms[p]).split(" ").slice(1).join(" ") ||
                                  display(p, c.forms[p])}
                              </span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        <nav className="mt-14 flex items-center justify-between border-t border-border pt-6 text-sm">
          {prev ? (
            <Link
              to="/tense/$slug"
              params={{ slug: prev.slug }}
              className="group flex flex-col text-muted-foreground hover:text-primary"
            >
              <span className="text-xs uppercase tracking-widest">← Précédent</span>
              <span className="font-serif text-lg text-foreground group-hover:text-primary">
                {prev.name}
              </span>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to="/tense/$slug"
              params={{ slug: next.slug }}
              className="group flex flex-col items-end text-muted-foreground hover:text-primary"
            >
              <span className="text-xs uppercase tracking-widest">Suivant →</span>
              <span className="font-serif text-lg text-foreground group-hover:text-primary">
                {next.name}
              </span>
            </Link>
          ) : <span />}
        </nav>

        <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h3 className="font-serif text-3xl">Prêt à pratiquer ?</h3>
          <p className="mt-2 opacity-90">Testez vos conjugaisons en mode quiz interactif.</p>
          <Link
            to="/practice"
            search={{ tense: tense.slug }}
            className="mt-5 inline-block rounded-full bg-background px-6 py-2.5 text-sm font-medium text-primary shadow hover:bg-secondary transition-colors"
          >
            Pratiquer {tense.name} →
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
