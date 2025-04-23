import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card flex flex-col h-full">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full aspect-[4/3] object-cover"
        />
        {post.category && (
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
              {post.category}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>

        <h3 className="text-lg font-bold mb-2">
          <Link
            href={`/blogPost/${post.id}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
