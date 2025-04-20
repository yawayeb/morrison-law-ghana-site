import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-law-navy font-serif font-bold text-2xl">
            <span className="text-law-gold">W.</span>White
          </h1>
          <span className="hidden md:inline-block text-xs uppercase tracking-wider border-l border-law-gray pl-2 text-law-gray">
            Seasoned Finance Attorney
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-law-navy hover:text-law-gold transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-law-navy hover:text-law-gold transition-colors font-medium">
            About
          </Link>
          <Link to="/practice-areas" className="text-law-navy hover:text-law-gold transition-colors font-medium">
            Practice Areas
          </Link>
          <Link to="/testimonials" className="text-law-navy hover:text-law-gold transition-colors font-medium">
            Testimonials
          </Link>
          <Link to="/career" className="text-law-navy hover:text-law-gold transition-colors font-medium">
            Career
          </Link>
          <Link to="/blog" className="text-law-navy hover:text-law-gold transition-colors font-medium">
            Blog
          </Link>
          <Link to="/contact" className="text-law-navy hover:text-law-gold transition-colors font-medium">
            Contact
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" variant="outline" className="rounded-full border-law-gold text-law-gold hover:bg-law-gold hover:text-white">
            <Phone className="w-4 h-4 mr-2" />
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-law-navy" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2 shadow-lg">
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              to="/" 
              className="text-law-navy hover:text-law-gold transition-colors px-2 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-law-navy hover:text-law-gold transition-colors px-2 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/practice-areas" 
              className="text-law-navy hover:text-law-gold transition-colors px-2 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link 
              to="/testimonials" 
              className="text-law-navy hover:text-law-gold transition-colors px-2 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/career" 
              className="text-law-navy hover:text-law-gold transition-colors px-2 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Career
            </Link>
            <Link 
              to="/blog" 
              className="text-law-navy hover:text-law-gold transition-colors px-2 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-law-navy hover:text-law-gold transition-colors px-2 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              size="sm" 
              className="mt-2 bg-law-gold text-white hover:bg-law-navy w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
