import Header from "../../Header";
import Footer from "../../Footer";
import ThemeToggle from "../../ThemeToggle";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Figma Design System Starter Kit",
    description:
      "A comprehensive starter kit for building design systems in Figma, including components, styles, and documentation templates.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Design System",
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce UI Kit",
    description:
      "A complete UI kit for e-commerce websites and apps with over 200 components and 50 pre-designed screens.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "UI Kit",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App Wireframe Templates",
    description:
      "A collection of wireframe templates for mobile app design, perfect for quickly prototyping your next app idea.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Wireframes",
    link: "#",
  },
  {
    id: 4,
    title: "Dashboard UI Components",
    description:
      "A set of modular components specifically designed for creating analytics dashboards and admin panels.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "UI Components",
    link: "#",
  },
  {
    id: 5,
    title: "Interactive Portfolio Template",
    description:
      "A customizable portfolio template with interactive elements and animations built entirely in Figma.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Template",
    link: "#",
  },
  {
    id: 6,
    title: "Design System Documentation",
    description:
      "A template for creating comprehensive design system documentation with examples and guidelines.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Documentation",
    link: "#",
  },
];

const Projects = () => {
  const { isDarkMode, toggleTheme } = ThemeToggle();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-card">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Figma Projects & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of Figma templates, UI kits, and design
              resources to speed up your workflow.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="blog-card h-full flex flex-col"
                >
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="px-2 py-1 bg-secondary text-sm font-medium rounded">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <a
                        href={project.link}
                        className="btn btn-primary inline-block"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a custom Figma template?
            </h2>
            <p className="text-muted-foreground mb-6">
              We can create custom Figma templates and design resources tailored
              to your specific needs. Get in touch to discuss your project.
            </p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
