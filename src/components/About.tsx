import { skills } from "../data/skills";

function About() {

  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            About Me
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600">
            I am a passionate developer interested in building responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* About Description */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Who I Am
            </h3>

            <p className="leading-7 text-gray-600">
              I completed my B.Tech in Electrical and Electronics Engineering
              and developed a strong interest in software development. I have
              worked with technologies such as React, JavaScript, TypeScript,
              Node.js, and databases.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              I enjoy learning new technologies and creating applications that
              provide a simple and good user experience.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
