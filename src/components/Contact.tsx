import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { FormControl, Form, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { SectionHeader } from "./SectionHeader";
import { fadeUp } from "@/lib/animations";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onBlur",
  });

  // Initialize EmailJS on mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== "your_public_key") {
      emailjs.init(publicKey);
    }
  }, []);

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      // Check if credentials are set
      if (
        !serviceId ||
        !templateId ||
        serviceId === "your_service_id" ||
        templateId === "your_template_id"
      ) {
        console.error("EmailJS credentials not configured");
        toast.error(
          "Email configuration error. Please contact the site owner.",
        );
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(serviceId, templateId, {
        name: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        message: values.message,
      });

      form.reset();
      toast.success("Message sent successfully! I'll get back to you soon. 🎉");
    } catch (error) {
      console.error("Email error:", error);
      if (error instanceof Error) {
        console.error("Error details:", error.message);
      }
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className="mt-10 scroll-mt-10"
      id="contact"
    >
      <SectionHeader
        subtitle="Contact"
        title={`Let's make something awesome together!`}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mx-auto space-y-4 mt-10"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="border-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            rules={{ required: "Company name is required" }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Company name"
                    {...field}
                    className="border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                    className="border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+14242773"
                    {...field}
                    className="border-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="Write your message..."
                    className="h-36 border-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || !form.formState.isValid}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </motion.section>
  );
};
