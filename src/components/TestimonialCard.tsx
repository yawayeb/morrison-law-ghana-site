
import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  location: string;
  rating: number;
  image?: string;
};

const TestimonialCard = ({
  quote,
  author,
  location,
  rating = 5,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col relative">
      <div className="absolute top-6 right-8 flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-law-gold fill-law-gold" : "text-gray-300"}`}
          />
        ))}
      </div>
      
      <div className="flex items-center mb-6 mt-8">
        <div className="h-16 w-16 relative rounded-full overflow-hidden mr-4 border-2 border-law-gold">
          <img
            src={image || `https://ui-avatars.com/api/?name=${author}&background=0A2342&color=fff`}
            alt={author}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="text-xl font-medium">{author}</h4>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
      
      <blockquote className="italic text-gray-700 mb-4">
        "{quote}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
