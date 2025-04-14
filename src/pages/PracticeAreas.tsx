
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import { Shield, Users, Briefcase, Home, FileText, Check } from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      id: "criminal-defense",
      title: "Criminal Defense",
      icon: <Shield className="w-16 h-16 text-law-gold" />,
      description: "Protecting your rights with a powerful defense strategy.",
      details: "Our criminal defense practice provides representation for individuals facing charges ranging from minor offenses to serious felonies. We work diligently to protect your rights, investigate your case thoroughly, and build the strongest possible defense. Our attorneys have extensive experience in handling complex criminal matters and will guide you through each step of the legal process.",
      services: [
        "DUI/DWI Defense",
        "Drug Offenses",
        "White Collar Crimes",
        "Assault & Battery",
        "Theft & Property Crimes",
        "Domestic Violence",
      ],
    },
    {
      id: "family-law",
      title: "Family Law",
      icon: <Users className="w-16 h-16 text-law-gold" />,
      description: "Supporting you through sensitive issues like divorce, custody, and adoption.",
      details: "Family legal matters can be emotionally challenging. Our compassionate family law attorneys provide the guidance and representation you need during difficult times. We help clients navigate complex family situations with sensitivity and skill, always focusing on achieving the best possible outcome for you and your loved ones.",
      services: [
        "Divorce & Separation",
        "Child Custody & Support",
        "Adoption",
        "Property Division",
        "Prenuptial Agreements",
        "Domestic Violence Protection",
      ],
    },
    {
      id: "corporate-business",
      title: "Corporate & Business Law",
      icon: <Briefcase className="w-16 h-16 text-law-gold" />,
      description: "Helping businesses stay compliant, protected, and ready to grow.",
      details: "Our corporate law practice serves businesses of all sizes, from startups to established corporations. We provide comprehensive legal services to help you establish, operate, and grow your business. Our attorneys understand the commercial landscape in Ghana and internationally, and can help you navigate complex regulatory requirements while protecting your business interests.",
      services: [
        "Business Formation & Incorporation",
        "Contract Drafting & Review",
        "Corporate Governance",
        "Mergers & Acquisitions",
        "Regulatory Compliance",
        "Intellectual Property Protection",
      ],
    },
    {
      id: "real-estate",
      title: "Real Estate & Property Law",
      icon: <Home className="w-16 h-16 text-law-gold" />,
      description: "Ensuring your land, home, and investments are legally secured.",
      details: "Our real estate practice offers comprehensive legal services for property matters in Ghana. Whether you are buying, selling, leasing, or developing property, our attorneys can help safeguard your interests and ensure all transactions are legally sound. We have deep knowledge of Ghana's land tenure system and can help navigate its complexities.",
      services: [
        "Property Acquisition & Sales",
        "Land Title Registration",
        "Leasing Agreements",
        "Construction Contracts",
        "Property Dispute Resolution",
        "Real Estate Development",
      ],
    },
    {
      id: "civil-litigation",
      title: "Contract & Civil Litigation",
      icon: <FileText className="w-16 h-16 text-law-gold" />,
      description: "Providing strong representation in court and during negotiations.",
      details: "When disputes arise, our litigation team offers vigorous advocacy to protect your interests. We represent clients in a wide range of civil matters, from contract disputes to complex commercial litigation. Our attorneys are skilled negotiators and experienced trial lawyers who will pursue the most favorable resolution, whether through settlement or in court.",
      services: [
        "Contract Disputes",
        "Commercial Litigation",
        "Debt Recovery",
        "Insurance Claims",
        "Employment Disputes",
        "Mediation & Arbitration",
      ],
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Practice Areas" 
        subtitle="Expert Legal Services Tailored to You"
        backgroundImage="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Legal Services" 
            subtitle="Comprehensive legal support across a wide range of practice areas"
          />

          <div className="space-y-24">
            {practiceAreas.map((area, index) => (
              <div key={area.id} id={area.id} className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:col-span-1 flex justify-center">
                  <div className="bg-law-navy/5 w-48 h-48 rounded-full flex items-center justify-center">
                    {area.icon}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-serif font-bold mb-4 text-law-navy">{area.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{area.description}</p>
                  <p className="text-gray-600 mb-8">{area.details}</p>
                  
                  <h4 className="text-xl font-medium mb-4">Our Services Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {area.services.map((service, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="text-law-gold mr-2 mt-1 flex-shrink-0" />
                        <p>{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionTitle 
            title="Our Approach" 
            subtitle="How we work with our clients"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto bg-law-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-law-gold">01</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We'll discuss your situation, assess your legal needs, and outline potential approaches.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-law-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-law-gold">02</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Strategy Development</h3>
              <p className="text-gray-600">We'll create a tailored legal strategy designed to achieve the best possible outcome for you.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-law-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-law-gold">03</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Resolution</h3>
              <p className="text-gray-600">We'll implement our strategy with skill and determination, keeping you informed every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction 
        title="Need Legal Assistance?" 
        description="Contact us today to schedule a consultation with one of our experienced attorneys."
      />
    </Layout>
  );
};

export default PracticeAreas;
