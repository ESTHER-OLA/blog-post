import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Header = ({ isDarkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="py-4 border-b sticky top-0 bg-background z-10">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              THE BLOG
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blogPost"
              className="font-medium hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Button
              onClick={() => {
                localStorage.removeItem("isAuthenticated");
                router.push("/login");
              }}
              className="btn btn-secondary"
            >
              Logout
            </Button>

            {/* <Link href="/login" className="btn btn-secondary">
              Log in
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Sign up
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blogPost"
                className="font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="p-2 rounded-full hover:bg-muted"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/login"
                className="btn btn-secondary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="btn btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
