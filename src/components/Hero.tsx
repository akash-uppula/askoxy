function Hero() {
  return (
    <section id="home" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        {/* Hero Content */}
        <div className="text-center md:w-1/2 md:text-left">
          <p className="mb-3 text-lg text-gray-600">Hi, I'm</p>

          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Akash Uppula
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-gray-700">
            Frontend Developer
          </h2>

          <p className="mb-8 max-w-lg text-gray-600">
            I build responsive and user-friendly web applications using React
            and modern web technologies.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white transition hover:bg-gray-800"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2">
          <img
            src="/images/profile.jpg"
            alt="Akash Uppula"
            className="mx-auto h-64 w-64 rounded-full object-cover shadow-lg md:h-80 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
