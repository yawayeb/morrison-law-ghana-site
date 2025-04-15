import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { PhoneCall, Shield, Users, Briefcase, Home, FileText } from "lucide-react";

const Index = () => {
  // Practice areas data
  const practiceAreas = [
    {
      title: "Criminal Defense",
      description: "Protecting your rights with a powerful defense strategy.",
      icon: <Shield className="w-10 h-10" />,
    },
    {
      title: "Family Law",
      description: "Supporting you through sensitive issues like divorce, custody, and adoption.",
      icon: <Users className="w-10 h-10" />,
    },
    {
      title: "Corporate & Business Law",
      description: "Helping businesses stay compliant, protected, and ready to grow.",
      icon: <Briefcase className="w-10 h-10" />,
    },
    {
      title: "Real Estate & Property Law",
      description: "Ensuring your land, home, and investments are legally secured.",
      icon: <Home className="w-10 h-10" />,
    },
    {
      title: "Contract & Civil Litigation",
      description: "Providing strong representation in court and during negotiations.",
      icon: <FileText className="w-10 h-10" />,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Mr. Morrison handled my case with utmost professionalism and genuine concern. I felt heard, respected, and protected every step of the way. Truly the best legal experience I've had.",
      author: "Anita A.",
      location: "Accra",
      rating: 5,
    },
    {
      quote: "Reginald is brilliant. He broke down complex legal issues in a way I could understand and got us the result we hoped for. I confidently recommend him to anyone in need of legal help.",
      author: "Kwame M.",
      location: "Tema",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-law-navy text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
            alt="Law Office"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              North Carolina Legal Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              A highly respected North Carolina attorney known for sharp legal insight, client-first approach, and consistent record of results across the state.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-law-gold hover:bg-white hover:text-law-navy text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-law-navy font-medium py-3 px-6 rounded-md transition-colors"
              >
                <Link to="/practice-areas">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-law-gold shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="North Carolina Attorney"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Dedicated Legal Excellence in North Carolina
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              With a 5-star reputation for excellence, our law firm provides dedicated legal services across North Carolina. Whether you're facing a legal challenge or seeking expert guidance, you're in the right place.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-law-gold">10+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-law-gold">500+</div>
                <p className="text-gray-600">Cases Won</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-law-gold">5★</div>
                <p className="text-gray-600">Client Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-law-gold">24/7</div>
                <p className="text-gray-600">Client Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Practice Areas"
            subtitle="Expert Legal Services Tailored to You"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard
                key={index}
                title={area.title}
                description={area.description}
                icon={area.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Client Testimonials"
            subtitle="What Our Clients Are Saying"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Us"
            subtitle="Committed to Excellence in Legal Service"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center rounded-md shadow-md border-t-4 border-law-gold">
              <div className="w-16 h-16 mx-auto bg-law-gold/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-law-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Expert Knowledge</h3>
              <p className="text-gray-600">
                With specialized knowledge and years of experience, we provide strategic legal guidance tailored to your needs.
              </p>
            </div>
            <div className="bg-white p-8 text-center rounded-md shadow-md border-t-4 border-law-gold">
              <div className="w-16 h-16 mx-auto bg-law-gold/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-law-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Client-Focused</h3>
              <p className="text-gray-600">
                We listen carefully to understand your concerns and develop solutions that address your specific situation.
              </p>
            </div>
            <div className="bg-white p-8 text-center rounded-md shadow-md border-t-4 border-law-gold">
              <div className="w-16 h-16 mx-auto bg-law-gold/10 rounded-full flex items-center justify-center mb-6">
                <PhoneCall className="w-8 h-8 text-law-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Always Available</h3>
              <p className="text-gray-600">
                Legal issues don't wait for convenient hours. We provide responsive communication when you need us most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </Layout>
  );
};

export default Index;
