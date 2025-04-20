
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import { Check } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Christian White Anthony" 
        subtitle="Seasoned Finance Attorney Serving Clients with Expertise"
        backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
      />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Christian White Anthony"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <SectionTitle 
                title="Christian White Anthony" 
                centered={false}
              />
              <p className="text-lg text-gray-600 mb-6">
                A distinguished finance attorney with extensive legal expertise in North Carolina, dedicated to delivering strategic solutions and protecting client interests.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Licensed and practicing with a commitment to professional excellence, Christian White Anthony brings comprehensive legal knowledge and a client-first approach to every case.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://placehold.co/200x100/0A2342/FFFFFF?text=CWA" 
                  alt="Christian White Anthony Signature" 
                  className="h-16 mr-4"
                />
                <div>
                  <h4 className="font-serif font-bold text-xl">Christian White Anthony</h4>
                  <p className="text-gray-600">Seasoned Finance Attorney</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Education" 
            subtitle="Academic Excellence and Professional Development"
          />
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="space-y-6">
                <div className="border-l-4 border-law-gold pl-4">
                  <p className="text-law-gray text-sm">2005 – 2008</p>
                  <h4 className="text-xl font-medium mb-1">University of California, Berkeley – School of Law</h4>
                  <p className="text-gray-600">Bachelor of Laws (LL.B) Equivalent – First Class Honors</p>
                </div>
                <div className="border-l-4 border-law-gold pl-4">
                  <p className="text-law-gray text-sm">2008 – 2010</p>
                  <h4 className="text-xl font-medium mb-1">Columbia Law School</h4>
                  <p className="text-gray-600">Juris Doctor (J.D.) – Graduated with Distinction</p>
                </div>
                <div className="border-l-4 border-law-gold pl-4">
                  <p className="text-law-gray text-sm">2012 – 2013</p>
                  <h4 className="text-xl font-medium mb-1">Harvard Law School</h4>
                  <p className="text-gray-600">Master of Laws (LL.M.), Concentration in Corporate Law</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-law-navy">Professional Memberships</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>American Bar Association</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>New York State Bar Association</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>National Bar Association</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>American Bankruptcy Institute</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>Association of Corporate Counsel</p>
                </li>
                <li className="flex items-start">
                  <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                  <p>American Arbitration Association</p>
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
