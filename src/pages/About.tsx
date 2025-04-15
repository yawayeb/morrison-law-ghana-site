
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import { Check } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        subtitle="Meet Your Trusted North Carolina Legal Partner"
        backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="NC Law Firm Attorney"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <SectionTitle 
                title="Our Story" 
                centered={false}
              />
              <p className="text-lg text-gray-600 mb-6">
                With extensive legal experience in North Carolina, our law firm is committed to delivering justice, clarity, and strategic solutions for individuals and businesses across the state.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                A dedicated member of the North Carolina Bar Association, our practice has represented hundreds of clients with integrity and precision. We build our approach on trust, professionalism, and proven results.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At the heart of our work is a simple mission: to protect your rights and empower your future in North Carolina.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://placehold.co/200x100/0A2342/FFFFFF?text=Signature" 
                  alt="Law Firm Signature" 
                  className="h-16 mr-4"
                />
                <div>
                  <h4 className="font-serif font-bold text-xl">North Carolina Law Firm</h4>
                  <p className="text-gray-600">Legal Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Mission & Values" 
            subtitle="The principles that guide our practice"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-law-navy">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide exceptional legal representation that puts our clients' needs first, delivers meaningful results, and upholds the highest standards of legal practice. We are committed to making the law work for you through personalized service, strategic thinking, and unwavering dedication.
              </p>
              <p className="text-gray-600">
                We believe that everyone deserves a trusted legal advisor who will fight for their rights and interests. Our goal is to be that advisor for each of our clients, providing not just legal services, but peace of mind.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-law-navy">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p><span className="font-bold">Integrity</span>: We maintain the highest ethical standards in all our dealings and relationships.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p><span className="font-bold">Excellence</span>: We pursue excellence in our legal work, client service, and professional development.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p><span className="font-bold">Respect</span>: We treat clients, colleagues, and adversaries with courtesy and respect.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p><span className="font-bold">Dedication</span>: We are committed to achieving the best possible outcomes for our clients.</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p><span className="font-bold">Community</span>: We believe in giving back to the community through pro bono work and community involvement.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Education & Credentials" 
            subtitle="Academic excellence and professional qualifications"
          />
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold mb-4 text-law-navy">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-law-gold pl-4">
                  <p className="text-law-gray text-sm">2005 - 2008</p>
                  <h4 className="text-xl font-medium mb-1">University of Ghana Law School</h4>
                  <p className="text-gray-600">Bachelor of Laws (LL.B), First Class Honors</p>
                </div>
                <div className="border-l-4 border-law-gold pl-4">
                  <p className="text-law-gray text-sm">2008 - 2010</p>
                  <h4 className="text-xl font-medium mb-1">Ghana School of Law</h4>
                  <p className="text-gray-600">Professional Law Course, Distinction</p>
                </div>
                <div className="border-l-4 border-law-gold pl-4">
                  <p className="text-law-gray text-sm">2012 - 2013</p>
                  <h4 className="text-xl font-medium mb-1">Harvard Law School</h4>
                  <p className="text-gray-600">Master of Laws (LL.M), Concentration in Corporate Law</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-law-navy">Professional Memberships</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>Ghana Bar Association</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>International Bar Association</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>African Law Society</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>Commonwealth Lawyers Association</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>Ghana Association of Restructuring and Insolvency Advisors</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>Ghana Arbitration Centre</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default About;
