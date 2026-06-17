import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Show the in-app "Guide" link only in the Lovable editor / preview sandbox,
 * never on the published site. Published hostnames are e.g.
 *   english-in-real-life.lovable.app  (or a custom domain)
 * Editor/preview hostnames are e.g.
 *   *.lovableproject.com
 *   id-preview--*.lovable.app
 *   project--*-dev.lovable.app
 *   localhost
 */
function useIsEditorPreview() {
  const [isPreview, setIsPreview] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = window.location.hostname;
    const preview =
      h === "localhost" ||
      h.endsWith(".lovableproject.com") ||
      h.startsWith("id-preview--") ||
      h.endsWith("-dev.lovable.app");
    setIsPreview(preview);
  }, []);
  return isPreview;
}


export function SiteHeader() {
  const showGuide = useIsEditorPreview();

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground font-serif text-xl shadow-sm">
            E
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl font-semibold text-foreground">
              English in Real Life
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              The English you actually use
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
            Lessons
          </Link>
          <Link
            to="/review"
            className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            activeProps={{ className: "rounded-md px-3 py-2 text-foreground bg-secondary font-medium" }}
          >
            Review
          </Link>
          {showGuide ? (
            <Link
              to="/split-guide"
              className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              activeProps={{ className: "rounded-md px-3 py-2 text-foreground bg-secondary font-medium" }}
            >
              Guide
            </Link>
          ) : null}

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
        <p className="font-serif italic">“You learn a language by using it, not by memorising it.”</p>
        <p>© {new Date().getFullYear()} English in Real Life</p>
      </div>
    </footer>
  );
}
