import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");
  const themeLabel = isDark ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln";

  // Vor dem Mount kennen wir das aufgelöste Theme noch nicht -> Platzhalter, um Icon-Flackern zu vermeiden.
  const themeIcon = !mounted ? (
    <span className="block w-4 h-4" />
  ) : isDark ? (
    <Sun size={16} />
  ) : (
    <Moon size={16} />
  );

  return (
    <header className="w-full fixed top-0 z-40 backdrop-blur bg-background/60 border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link
            to="/"
            className="font-mono text-sm font-semibold text-dar-neutral-800 hover:text-dar-accent transition-colors dark:text-white"
          >
            bakkali.io
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-sm text-dar-neutral-800 dark:text-white hover:underline">
              Home
            </Link>
            <Link to="/legal" className="text-sm text-dar-neutral-800 dark:text-white hover:underline">
              Legal
            </Link>
            <button
              type="button"
              aria-label={themeLabel}
              aria-pressed={isDark}
              className="p-2 rounded hover:bg-muted text-dar-neutral-800 dark:text-white"
              onClick={toggleTheme}
            >
              {themeIcon}
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label={themeLabel}
              aria-pressed={isDark}
              className="mr-2 p-2 rounded hover:bg-muted text-dar-neutral-800 dark:text-white"
              onClick={toggleTheme}
            >
              {themeIcon}
            </button>

            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded hover:bg-muted text-dar-neutral-800 dark:text-white"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-2 flex flex-col gap-2">
            <Link to="/" className="text-sm px-2 py-1 rounded hover:bg-muted text-dar-neutral-800 dark:text-white" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/legal" className="text-sm px-2 py-1 rounded hover:bg-muted text-dar-neutral-800 dark:text-white" onClick={() => setOpen(false)}>
              Legal
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
