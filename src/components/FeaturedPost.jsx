import Link from "next/link";

const FeaturedPost = ({ post }) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center blog-card p-0">
      <div className="h-full">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-muted-foreground mb-6">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">
                {post.date} · {post.readTime} min read
              </div>
            </div>
          </div>
          
          <Link 
            href={`/blog/${post.id}`}
            className="text-primary font-medium hover:underline"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
