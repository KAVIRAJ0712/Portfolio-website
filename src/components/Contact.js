const Contact = () => (
  <section
    id="contact"
    className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-blue-50 to-white"
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 mb-14 drop-shadow-lg">
        Get in Touch
      </h2>

      <div className="bg-white bg-opacity-90 shadow-xl rounded-3xl p-10 sm:p-12 md:p-16 max-w-3xl mx-auto animate-fade-in-up">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-300 bg-white bg-opacity-80 backdrop-blur"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-300 bg-white bg-opacity-80 backdrop-blur"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-300 resize-none bg-white bg-opacity-80 backdrop-blur"
          ></textarea>

          <button
            onClick={() => alert("Message sent!")}
            type="button"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white text-lg font-semibold py-4 rounded-xl shadow-lg transform transition-transform hover:scale-105"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
