import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          My Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-gray-600 hover:text-black">
            Home
          </a>

          <a href="#about" className="text-gray-600 hover:text-black">
            About
          </a>

          <a href="#projects" className="text-gray-600 hover:text-black">
            Projects
          </a>

          <a href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </a>
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
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
