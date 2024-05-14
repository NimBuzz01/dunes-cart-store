"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import MainButton from "../MainButton";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(12),
  message: z.string().min(10).max(500),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await sendEmail(values);
    if (response.status === 200) {
      toast.success("Message sent successfully");
    } else {
      toast.error("Message failed to send");
    }
  }

  return (
    <div className="md::px-10 px-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold sm:text-base">
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold sm:text-base">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold sm:text-base">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input placeholder="+94771231234 or 0771231234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold sm:text-base">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message..."
                    {...field}
                    rows={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <MainButton type="submit" text="Send Message" />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
