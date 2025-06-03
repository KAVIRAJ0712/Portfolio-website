const ProjectCard = ({ title, description, link, image }) => (
  <div className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        View Project
      </a>
    </div>
  </div>
);

export default ProjectCard;
