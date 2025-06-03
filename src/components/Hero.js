const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
  >
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-800 animate-gradient bg-[length:400%_400%] z-0"></div>

    {/* Glowing Blob Overlay */}
    <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-2xl opacity-25 animate-blob animation-delay-4000"></div>

    <div className="relative z-10 text-center px-4 animate-fadeIn space-y-6 perspective-3d transform-style-3d">
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 text-transparent bg-clip-text drop-shadow-3xl transform hover:rotateX-3 hover:rotateY-3 transition duration-700">
        Hi, I'm <span className="text-white">Kaviraj P</span>
      </h1>
      <p className="text-2xl md:text-3xl text-gray-200 font-light drop-shadow-md transform hover:-translate-z-10 transition duration-500">
        A Passionate Full Stack Developer
      </p>
      <a
        href="#projects"
        className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-xl transform hover:rotate-2 hover:scale-110 hover:translate-z-10 transition duration-500"
      >
        View My Work
      </a>
    </div>
  </section>
);

export default Hero;
