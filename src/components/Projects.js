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
          link="https://example.com/ecommerce"
          image="/images/Screenshot1.png"
        />
        <ProjectCard
          title="CLI-Weather-App"
          description="Get real-time weather updates right from your terminal!"
          link="https://github.com/KAVIRAJ0712/CLI-Weather-App"
          image="/images/Screenshort.png"
        />
        <ProjectCard
          title="E-Commerce Platform"
          description="A fully functional e-commerce website built with React and Node.js."
          link="https://example.com/portfolio"
          image="https://colorlib.com/wp/wp-content/uploads/sites/2/coloshop-free-bootstrap-ecommerce-website-template.jpg"
        />
      </div>
    </div>
  </section>
);

export default Projects;
