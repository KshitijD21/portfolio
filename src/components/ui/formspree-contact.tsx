"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Check, Send, X } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormspreeContactFormProps {
  formspreeId: string;
  className?: string;
}

export function FormspreeContactForm({
  formspreeId,
  className = "",
}: FormspreeContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus("idle");
  };

  return (
    <section id="contact-form" className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full flex flex-col items-center"
        >
          <div className="inline-block px-8 py-2 bg-primary/10 text-center text-[#FF6B6B] text-lg font-bold rounded-full mb-8">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 max-w-4xl">
            Let&apos;s Build Something Cool
          </h2>
          <p className="text-lg text-black leading-relaxed max-w-2xl">
            <span className="font-semibold">
              Drop me a message, and let&apos;s see where this goes.
            </span>{" "}
            Worst case, you&apos;ll just brighten my day 😊
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="shadow-xl border-0 bg-white backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div className="space-y-3">
                  <Label
                    htmlFor="name"
                    className="text-base font-semibold text-gray-900"
                  >
                    Your good name?
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="h-14 text-base border-2 border-gray-200 focus:border-[#FF6B6B] transition-colors rounded-xl"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-base font-semibold text-gray-900"
                  >
                    Where do I reply back?
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="h-14 text-base border-2 border-gray-200 focus:border-[#FF6B6B] transition-colors rounded-xl"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="text-base font-semibold text-gray-900"
                  >
                    Type it out…
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your thoughts, ideas, or just say hello..."
                    rows={6}
                    className="resize-none text-base border-2 border-gray-200 focus:border-[#FF6B6B] transition-colors rounded-xl"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#8D7662] to-[#FF6B6B] hover:from-[#7A6854] hover:to-[#FF5A5A] text-white px-8 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group border-0 min-w-[200px]"
                    onClick={resetStatus}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="mr-3">Say Hi</span>
                        <span className="text-xl">👋</span>
                        <Send className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Status Messages */}
              {submitStatus !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  {submitStatus === "success" && (
                    <div className="flex items-center justify-center p-6 bg-green-50 border-2 border-green-200 rounded-xl">
                      <Check className="h-6 w-6 text-green-600 mr-3" />
                      <span className="text-green-800 font-semibold text-base">
                        Thanks! I&apos;ll get back to you soon 🚀
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center justify-center p-6 bg-red-50 border-2 border-red-200 rounded-xl">
                      <X className="h-6 w-6 text-red-600 mr-3" />
                      <span className="text-red-800 font-semibold text-base">
                        Oops, something went wrong. Try again?
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Export a pre-configured version for easy use
export function ContactFormSection() {
  // Using your actual Formspree form ID
  return <FormspreeContactForm formspreeId="xeolyqqy" />;
}
