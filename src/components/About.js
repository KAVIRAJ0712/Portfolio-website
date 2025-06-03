const About = () => (
  <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-12">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://d3mm2s9r15iqcv.cloudfront.net/en/wp-content/uploads/2021/06/soon_this_will_make_sense.webp"
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Bio */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a <span className="font-semibold text-indigo-600">passionate Full stack developer</span> with expertise in <span className="text-purple-600 font-medium">React, Tailwind CSS</span>, and modern JavaScript. I enjoy building clean and creative interfaces that enhance user experience and solve real-world problems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Skills */}
            <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-indigo-400 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Skills</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>React & JavaScript</li>
                <li>Tailwind CSS & UI/UX</li>
                <li>Node.js & APIs</li>
              </ul>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-pink-400 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Role</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Frontend Developer</li>
                <li>Backend Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
