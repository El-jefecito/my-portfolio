import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { FormControl, Form, FormField, FormItem, FormMessage } from "./ui/form";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { SectionHeader } from "./SectionHeader";
import { fadeUp } from "@/lib/animations";
import emailjs from "@emailjs/browser";

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const result = await emailjs.send(
        "service_8vojj7m", // EmailJS service ID
        "template_6ixh92u", // EmailJS template ID
        {
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        "1Nw3ZGfBulwgNO0K4" // EmailJS public key
      );

      console.log("Message sent", result.text);
      form.reset(); // clears the form
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Email error:", error);
      alert("Failed to send message.");
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

          <Button type="submit" size="lg">
            Send Message
          </Button>
        </form>
      </Form>
    </motion.section>
  );
};
