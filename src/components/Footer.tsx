function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {currentYear} Akash Uppula. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/akash-uppula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/akash-uppula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
