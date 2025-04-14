
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type PracticeAreaCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
};

const PracticeAreaCard = ({
  title,
  description,
  icon,
  link = "/practice-areas",
}: PracticeAreaCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 border-t-4 border-law-gold hover:shadow-lg transition-shadow group">
      <div className="mb-4 text-law-navy">{icon}</div>
      <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-law-gold hover:text-law-navy font-medium transition-colors"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default PracticeAreaCard;
