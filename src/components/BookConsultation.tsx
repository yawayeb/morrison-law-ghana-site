
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const BookConsultation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('consultation_bookings')
        .insert([formData]);

      if (error) throw error;

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      toast({
        title: "Consultation Request Sent!",
        description: "We'll contact you shortly to confirm your consultation.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simple function to navigate to the contact page
  const navigateToContact = () => {
    navigate("/contact");
  };

  // Return a button instead of the form
  return (
    <Button
      className="bg-law-gold hover:bg-law-navy text-white w-full md:w-auto py-3 px-6"
      onClick={navigateToContact}
    >
      Book Consultation
    </Button>
  );
};

export default BookConsultation;
