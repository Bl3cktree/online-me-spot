import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const themeHook = useTheme();
  const theme = themeHook?.theme ?? "system";
  const setTheme = themeHook?.setTheme ?? (() => {});

  return (
    <header className="w-full fixed top-0 z-40 backdrop-blur bg-background/60 border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-lg font-semibold text-dar-neutral-800 dark:text-dar-neutral-100">
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-sm text-dar-neutral-800 dark:text-white hover:underline">
              Home
            </Link>
            <Link to="/legal" className="text-sm text-dar-neutral-800 dark:text-white hover:underline">
              Legal
            </Link>
            <button
              aria-label="Toggle dark mode"
              className="p-2 rounded hover:bg-muted text-dar-neutral-800 dark:text-white"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle dark mode"
              className="mr-2 p-2 rounded hover:bg-muted text-dar-neutral-800 dark:text-white"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              aria-label="Open menu"
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
