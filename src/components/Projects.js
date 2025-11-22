import ProjectCard from './ProjectCard';

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-violet-600 tracking-wide">
  My Projects
</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio showcasing my skills and projects."
          link="https://github.com/KAVIRAJ0712/Portfolio-website"
          image="/images/Screenshot1.png"
        />
        <ProjectCard
          title="Weather-app"
          description="Get real-time weather updates right from your website"
          link="https://github.com/KAVIRAJ0712/Weather-app"
          image="/images/Screenshot3.png"
        />
        <ProjectCard
          title="Grocery Store"
          description="Fresh finds and friendly faces,
Your neighborhood grocery place! "
          link="https://github.com/KAVIRAJ0712/pantry-to-pixel-market"
          image="/images/Screenshot2.png"
        />
      </div>
    </div>
  </section>
);

export default Projects;
