
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="We're Ready to Hear from You"
        backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle 
                title="Get In Touch" 
                centered={false}
                subtitle="Do you have a legal question or need immediate assistance? Reach out to us today — we're here to help."
              />
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-law-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Office Address</h3>
                    <p className="text-gray-600">3193 Gastonia Highway, Lincolnton, NC 28092</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-law-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Phone Number</h3>
                    <p className="text-gray-600">+1 404 786 6557</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-law-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Email Address</h3>
                    <p className="text-gray-600">contact@northcarolinalaw.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-law-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+1 404 786 6557</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-law-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-law-navy p-8 rounded-lg text-white">
                <h3 className="text-xl font-medium mb-4">Emergency Legal Support</h3>
                <p className="mb-4">
                  For urgent legal matters outside business hours, please call our emergency line:
                </p>
                <div className="text-2xl font-bold text-law-gold">+1 404 786 6557</div>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                title="Send Us a Message" 
                centered={false}
                subtitle="Fill out the form below to request a consultation. We usually respond within 24 hours."
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Location" 
            subtitle="Conveniently located in Lincolnton, North Carolina"
          />
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.770533824075!2d-81.48335582410728!3d35.47600627261676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854e0984b14a24d%3A0xc788a3089a16c861!2s3193%20Gastonia%20Hwy%2C%20Lincolnton%2C%20NC%2028092!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Law Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
