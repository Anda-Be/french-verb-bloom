import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="tricolore-bar h-[3px] w-full" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-xl shadow-sm">
            É
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl font-semibold text-foreground">
              Conjugaison
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Apprendre les temps
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            activeProps={{ className: "rounded-md px-3 py-2 text-foreground bg-secondary font-medium" }}
          >
            Les Temps
          </Link>
          <Link
            to="/practice"
            className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            activeProps={{ className: "rounded-md px-3 py-2 text-foreground bg-secondary font-medium" }}
          >
            Pratique
          </Link>
          <Link
            to="/about"
            className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            activeProps={{ className: "rounded-md px-3 py-2 text-foreground bg-secondary font-medium" }}
          >
            À propos
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p className="font-serif italic">« Apprendre, c'est se souvenir de ce qu'on aime. »</p>
        <p>© {new Date().getFullYear()} Conjugaison · Built with ❤︎ for French learners</p>
      </div>
    </footer>
  );
}
