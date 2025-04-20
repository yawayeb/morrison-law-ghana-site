import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-law-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <h2 className="text-white font-serif font-bold text-2xl">
                <span className="text-law-light-gold">CW</span> Law Firm
              </h2>
            </Link>
            <p className="text-gray-300 text-sm">
              Providing expert finance legal services with integrity and dedication. We're committed to serving our clients with the highest standards of legal excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-law-light-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-law-light-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-law-light-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://wa.me/1234567890" className="text-white hover:text-law-light-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M9 15h6"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-law-light-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-law-light-gold transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-law-light-gold transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> About
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-gray-300 hover:text-law-light-gold transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-law-light-gold transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Testimonials
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-law-light-gold transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Career
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-law-light-gold transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-law-light-gold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="text-law-light-gold flex-shrink-0 mt-1" />
                <p className="text-gray-300">22391 McPhall Rd, Armada, MI 48005</p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-law-light-gold flex-shrink-0" />
                <p className="text-gray-300">+1 (908) 429-9968</p>
              </div>
              <div className="flex gap-3">
                <Mail className="text-law-light-gold flex-shrink-0" />
                <p className="text-gray-300">Christiananthony.w@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} White's Law. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
