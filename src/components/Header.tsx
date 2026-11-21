import { Link } from "react-router";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          My Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/#home" className="text-gray-600 hover:text-black">
            Home
          </Link>

          <Link to="/#about" className="text-gray-600 hover:text-black">
            About
          </Link>

          <Link to="/#projects" className="text-gray-600 hover:text-black">
            Projects
          </Link>

          <Link to="/products" className="text-gray-600 hover:text-black">
            Products
          </Link>

          <Link to="/#contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              to="/#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Home
            </Link>

            <Link
              to="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              About
            </Link>

            <Link
              to="/#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Projects
            </Link>

            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Products
            </Link>

            <Link
              to="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
