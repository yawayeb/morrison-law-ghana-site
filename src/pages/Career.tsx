import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Career = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume_url: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${Math.random()}.${fileExt}`;

      try {
        const { error: uploadError, data } = await supabase.storage
          .from('resumes')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('resumes')
          .getPublicUrl(filePath);

        setFormData(prev => ({
          ...prev,
          resume_url: publicUrl
        }));
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to upload resume. Please try again.",
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('career_applications')
        .insert([formData]);

      if (error) throw error;

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        resume_url: "",
      });

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
      });
      setIsSubmitting(false);
    }
  };

  const openings = [
    {
      title: "Associate Attorney",
      department: "Litigation",
      type: "Full-Time",
      location: "Accra",
      description: "We're seeking a skilled litigation attorney with 2-5 years of experience to join our growing team. The ideal candidate will have excellent research, writing, and advocacy skills, with experience in civil litigation.",
    },
    {
      title: "Legal Assistant",
      department: "Corporate Law",
      type: "Full-Time",
      location: "Accra",
      description: "Looking for a detail-oriented legal assistant with strong organizational skills to support our corporate law practice. Duties include document preparation, client communication, and administrative support.",
    },
    {
      title: "Law Intern",
      department: "Multiple Departments",
      type: "Part-Time",
      location: "Accra",
      description: "Internship opportunity for law students looking to gain practical experience in various areas of law. Interns will assist attorneys with research, drafting documents, and case preparation.",
    },
  ];

  const benefits = [
    {
      title: "Professional Growth",
      description: "Ongoing training, mentorship programs, and opportunities for advancement.",
      icon: "📈",
    },
    {
      title: "Work-Life Balance",
      description: "Flexible scheduling options and paid time off.",
      icon: "⏱️",
    },
    {
      title: "Competitive Compensation",
      description: "Salary packages that recognize your expertise and contribution.",
      icon: "💰",
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family.",
      icon: "🏥",
    },
    {
      title: "Collaborative Environment",
      description: "Work alongside talented professionals in a supportive setting.",
      icon: "👥",
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art office with the latest legal technology.",
      icon: "🏢",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Career Opportunities" 
        subtitle="Join Our Growing Legal Team"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Work With Us" 
            subtitle="At the Law Office of Reginald Morrison, we are always open to working with smart, passionate individuals who want to make an impact."
          />
          
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Whether you're a recent law graduate or a seasoned legal assistant, we value integrity, professionalism, and commitment to justice. We're looking for team members who share our dedication to client service and legal excellence.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-2xl font-serif font-bold mb-8">Current Openings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openings.map((opening, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{opening.title}</h3>
                      <p className="text-gray-600">{opening.department}</p>
                    </div>
                    <div className="bg-law-gold/10 px-3 py-1 rounded-full text-law-gold text-sm font-medium">
                      {opening.type}
                    </div>
                  </div>
                  <p className="text-gray-500 mb-2"><span className="font-medium">Location:</span> {opening.location}</p>
                  <p className="text-gray-600 mb-4">{opening.description}</p>
                  <Button variant="link" className="text-law-gold hover:text-law-navy p-0 h-auto flex items-center">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-2xl font-serif font-bold mb-8">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle 
            title="Apply Now" 
            subtitle="Interested in joining us? Fill out the form below to apply."
          />

          {submitted ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in joining our team. We've received your application and will review it soon. If your qualifications match our needs, we'll contact you for the next steps.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="bg-law-gold hover:bg-law-navy text-white"
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-gold"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-gold"
                  >
                    <option value="" disabled>
                      Select a position
                    </option>
                    <option value="Associate Attorney">Associate Attorney</option>
                    <option value="Legal Assistant">Legal Assistant</option>
                    <option value="Law Intern">Law Intern</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-gold"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume/CV (PDF) *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-law-gold"
                />
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-law-gold"
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree that my submitted data is being collected and stored for recruitment purposes.
                </label>
              </div>

              <Button
                type="submit"
                className="bg-law-gold hover:bg-law-navy text-white font-medium py-2 px-6 rounded transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Career;
