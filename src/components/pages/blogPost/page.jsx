import { useRouter } from 'next/router';
import Link from "next/link";
import { ArrowLeft, MessageSquare, Heart, Bookmark, Share } from "lucide-react";
import Header from "../../Header";
import Footer from "../../Footer";
import AuthorBadge from "../../AuthorBadge";
import ThemeToggle from "../../ThemeToggle";
import BlogCard from "../../BlogCard";

// Sample blog post data
const blogPostData = {
  id: 1,
  title: "The Ultimate Guide to Figma Components",
  excerpt:
    "Learn how to create, organize and use components in Figma to build scalable design systems for your projects.",
  content: `
    <p>Figma components are reusable elements that help maintain consistency across designs and speed up your workflow. In this guide, we'll explore how to create, organize, and utilize components effectively in your Figma projects.</p>
    
    <h2>What are Figma Components?</h2>
    
    <p>Components in Figma are elements that can be reused across your designs. When you update a main component, all instances of that component update automatically, ensuring consistency throughout your project.</p>
    
    <p>Creating a component is simple: select an element or group, right-click, and choose "Create Component" (or press ⌘/Ctrl + Alt + K). Once created, the original element becomes the main component, which you can then reuse by creating instances.</p>
    
    <h2>Building a Component Library</h2>
    
    <p>A well-organized component library is essential for efficient design work. Start by categorizing components into logical groups:</p>
    
    <ul>
      <li>Basic UI elements (buttons, inputs, etc.)</li>
      <li>Navigation components</li>
      <li>Content blocks</li>
      <li>Page templates</li>
    </ul>
    
    <p>Use Figma's naming conventions and organization features to keep your component library structured and easy to navigate.</p>
    
    <h2>Component Properties and Variants</h2>
    
    <p>Component properties allow you to control specific aspects of a component instance. Variants let you create related components (like button styles or states) and group them together for easier management.</p>
    
    <p>To create variants, select multiple components and click "Combine as variants" in the properties panel. This creates a component set that you can easily switch between.</p>
    
    <h2>Nested Components</h2>
    
    <p>For complex UI elements, nested components provide a powerful way to build modular designs. By using components within components, you can create sophisticated UI elements while maintaining flexibility and consistency.</p>
    
    <h2>Best Practices for Component Management</h2>
    
    <ul>
      <li>Name components clearly and consistently</li>
      <li>Use description fields to document component usage</li>
      <li>Keep component structures clean and logical</li>
      <li>Regularly audit and update your component library</li>
      <li>Consider creating a dedicated file for your design system</li>
    </ul>
    
    <h2>Conclusion</h2>
    
    <p>Mastering Figma components will significantly improve your design workflow and help maintain consistency across projects. Start small, build incrementally, and regularly refine your component system as you learn what works best for your team and projects.</p>
  `,
  image:
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  date: "Apr 15, 2023",
  readTime: 7,
  category: "Design Systems",
  author: {
    name: "Sarah Johnson",
    username: "sarahjohnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "UI/UX Designer & Figma Expert with 8+ years of experience creating digital products.",
  },
};

// Sample related posts
const relatedPosts = [
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
    },
  },
];

const BlogPost = () => {
  const { isDarkMode, toggleTheme } = ThemeToggle();
  const router = useRouter();
  const { id } = router.query; 
  const post = blogPostData; // In a real app, you would fetch the post based on the ID

  // For demo purposes, we're always showing the same post

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="flex-grow">
        {/* Article header */}
        <div className="bg-card py-12">
          <div className="container-custom">
            <Link
              href="/blogPost"
              className="inline-flex items-center text-primary mb-6 hover:underline"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to all articles
            </Link>

            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 md:items-center mb-8">
              <AuthorBadge author={post.author} withBio={true} />

              <div className="text-sm text-muted-foreground">
                <div>{post.date}</div>
                <div>{post.readTime} min read</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="container-custom max-w-4xl py-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Article content */}
        <article className="container-custom max-w-3xl py-8">
          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article actions */}
          <div className="flex items-center justify-between border-t border-b py-4 my-8">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                <Heart size={20} />
                <span>124</span>
              </button>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                <MessageSquare size={20} />
                <span>23</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground">
                <Bookmark size={20} />
              </button>
              <button className="text-muted-foreground hover:text-foreground">
                <Share size={20} />
              </button>
            </div>
          </div>

          {/* Author section */}
          <div className="bg-card p-6 rounded-lg mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-bold">{post.author.name}</h3>
                <p className="text-muted-foreground">{post.author.bio}</p>
                <Link
                  href={`/author/${post.author.username}`}
                  className="text-primary hover:underline mt-2 inline-block"
                >
                  View all articles
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="bg-muted/30 py-16">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16">
          <div className="container-custom max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Enjoy this article?
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for weekly design tips, tutorials, and
              insights.
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
