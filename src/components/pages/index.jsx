import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import FeaturedPost from "../FeaturedPost";
import BlogCard from "../BlogCard";
import ThemeToggle from "../ThemeToggle";

// Sample data for blog posts
const samplePosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Figma Components",
    excerpt:
      "Learn how to create, organize and use components in Figma to build scalable design systems for your projects.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "Apr 15, 2023",
    readTime: 7,
    category: "Design Systems",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "UI/UX Designer & Figma Expert",
    },
  },
  {
    id: 2,
    title: "Mastering Auto Layout in Figma",
    excerpt:
      "Explore the power of Auto Layout in Figma and how it can transform your design workflow for responsive interfaces.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 28, 2023",
    readTime: 5,
    category: "Tutorials",
    author: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Product Designer & Educator",
    },
  },
  {
    id: 3,
    title: "Creating Interactive Prototypes in Figma",
    excerpt:
      "Step-by-step guide to building engaging and interactive prototypes that will impress your clients and team.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 12, 2023",
    readTime: 8,
    category: "Prototyping",
    author: {
      name: "Alex Turner",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      bio: "UX Designer & Figma Advocate",
    },
  },
  {
    id: 4,
    title: "Figma for Design Teams: Collaboration Best Practices",
    excerpt:
      "Learn how to effectively collaborate with your design team in Figma with these proven workflows and strategies.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "Feb 25, 2023",
    readTime: 6,
    category: "Collaboration",
    author: {
      name: "Emily Wong",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Design Team Lead",
    },
  },
  {
    id: 5,
    title: "From Sketch to Figma: Migrating Your Design Workflow",
    excerpt:
      "A comprehensive guide to transitioning your design process from Sketch to Figma with minimal disruption.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "Feb 10, 2023",
    readTime: 9,
    category: "Workflow",
    author: {
      name: "David Garcia",
      avatar: "https://randomuser.me/api/portraits/men/40.jpg",
      bio: "Digital Product Designer",
    },
  },
  {
    id: 6,
    title: "10 Essential Figma Plugins for Productivity",
    excerpt:
      "Discover the must-have plugins that will supercharge your design workflow and save you hours of work in Figma.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "Jan 28, 2023",
    readTime: 5,
    category: "Plugins",
    author: {
      name: "Rebecca Kim",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      bio: "UI Designer & Plugin Developer",
    },
  },
  {
    id: 7,
    title: "Designing Accessible UIs with Figma",
    excerpt:
      "Learn how to create inclusive and accessible user interfaces using Figma's powerful features.",
    image:
      "https://images.unsplash.com/photo-1597008641621-dedc39bc0b95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "Jan 15, 2023",
    readTime: 7,
    category: "Accessibility",
    author: {
      name: "Thomas Wright",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "Accessibility Specialist",
    },
  },
];

const categories = [
  "All",
  "Design Systems",
  "Tutorials",
  "Prototyping",
  "Collaboration",
  "Workflow",
  "Plugins",
  "Accessibility",
];

const Index = () => {
  const { isDarkMode, toggleTheme } = ThemeToggle();
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(samplePosts);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(samplePosts);
    } else {
      setFilteredPosts(
        samplePosts.filter((post) => post.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const featuredPost = samplePosts[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="flex-grow">
        {/* Hero/Featured section */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                The Figma Design Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Articles, tutorials, and resources for mastering your Figma
                design workflow
              </p>
            </div>

            <FeaturedPost post={featuredPost} />
          </div>
        </section>

        {/* Categories filter */}
        <section className="border-y py-4 mb-12 bg-muted/30">
          <div className="container-custom">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-background hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog posts grid */}
        <section className="pb-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No articles found for this category. Check back soon!
                </p>
              </div>
            )}

            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <button className="btn btn-secondary">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-card">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay updated with our newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the latest Figma tips, tutorials, and resources delivered
                straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md border bg-background w-full sm:w-64 md:w-80"
                />
                <button className="btn btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
