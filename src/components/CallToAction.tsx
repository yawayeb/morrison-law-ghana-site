
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type CallToActionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
};

const CallToAction = ({
  title = "Seeking Legal Advice?",
  description = "Get in touch with us today for expert legal guidance.",
  buttonText = "Book a Consultation",
  buttonLink = "/contact",
  backgroundImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
}: CallToActionProps) => {
  return (
    <div
      className="relative py-16 px-4 overflow-hidden bg-law-navy"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-law-navy/80"></div>
      <div className="relative container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          {description}
        </p>
        <Button
          asChild
          className="bg-law-gold hover:bg-white hover:text-law-navy text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
