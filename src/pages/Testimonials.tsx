
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mr. White handled my case with utmost professionalism and genuine concern. I felt heard, respected, and protected every step of the way. Truly the best legal experience I've had.",
      author: "Anita A.",
      location: "WI, Kilbourn",
      rating: 5,
    },
    {
      quote: "Christian is brilliant. He broke down complex legal issues in a way I could understand and got us the result we hoped for. I confidently recommend him to anyone in need of legal help.",
      author: "Kevin M.",
      location: "MI, Detroit",
      rating: 5,
    },
    {
      quote: "The team at White's Law helped me navigate a difficult property dispute with remarkable skill. Their knowledge of property laws proved invaluable.",
      author: "Samuel O.",
      location: "NY, Manhattan",
      rating: 5,
    },
    {
      quote: "I was facing serious charges and felt lost until I found Mr. White. His defense strategy was impeccable, and his confidence gave me hope during a very dark time.",
      author: "Janet D.",
      location: "CA, Los Angeles",
      rating: 5,
    },
    {
      quote: "After struggling with another law firm for months, switching to White's Law was like night and day. They resolved my business contract issue within weeks.",
      author: "Michael T.",
      location: "IL, Chicago",
      rating: 5,
    },
    {
      quote: "As a first-time business owner, the legal aspects of corporate law were overwhelming. Christian's team made the process smooth and stress-free.",
      author: "Grace P.",
      location: "MI, Ann Arbor",
      rating: 5,
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Client Testimonials" 
        subtitle="What Our Clients Are Saying"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Client Success Stories" 
            subtitle="Hear from the people we've helped through difficult legal challenges"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <section className="py-16 bg-law-navy text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Reputation</h2>
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-10 h-10 text-law-gold fill-law-gold mx-1" />
            ))}
          </div>
          <p className="text-2xl mb-6">Rated 5 Stars Across All Platforms</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-law-gold">100%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-law-gold">500+</div>
              <p className="text-gray-300">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-law-gold">90%</div>
              <p className="text-gray-300">Case Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-law-gold">10+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle 
            title="Our Commitment to You" 
          />
          <div className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-law-gold">
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "Your trust is our most valuable asset. At the Law Office of Reginald Morrison, we're committed to upholding the highest ethical standards and delivering exceptional results for every client we serve."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Reginald Morrison" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-serif font-bold text-xl">Reginald Morrison</h4>
                <p className="text-gray-600">Principal Attorney</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Ready to Discuss Your Case?" 
        description="Join our satisfied clients by scheduling a consultation today."
      />
    </Layout>
  );
};

export default Testimonials;
