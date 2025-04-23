import Link from "next/link";

const AuthorBadge = ({ author, withBio = false }) => {
  return (
    <div className="flex items-start gap-3">
      <Link href={`/author/${author.username}`}>
        <img 
          src={author.avatar} 
          alt={author.name} 
          className="w-10 h-10 rounded-full object-cover"
        />
      </Link>
      
      <div>
        <Link 
          href={`/author/${author.username}`}
          className="font-medium hover:text-primary transition-colors"
        >
          {author.name}
        </Link>
        
        {withBio && (
          <p className="text-sm text-muted-foreground mt-1">{author.bio}</p>
        )}
      </div>
    </div>
  );
};

export default AuthorBadge;
