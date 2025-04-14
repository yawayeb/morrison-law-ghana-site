
import { Link } from "react-router-dom";
import { CalendarIcon, Clock } from "lucide-react";

type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime?: string;
  slug: string;
};

const BlogCard = ({
  title,
  excerpt,
  image,
  date,
  readTime = "5 min read",
  slug,
}: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <div className="flex items-center mr-4">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-law-gold transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-law-gold hover:text-law-navy font-medium inline-flex items-center"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
