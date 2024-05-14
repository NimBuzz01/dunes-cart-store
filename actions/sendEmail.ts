"use server";
import ContactFormEmail from "@/components/email/ContactFormEmail";
import { ContactEmailTypes } from "@/lib/types";
import React from "react";
import { Resend } from "resend";

const resend = new Resend("re_LH4r7QDs_5B21AMGB8NqtSQ5mb1FEekqJ");

export const sendEmail = async (values: ContactEmailTypes) => {
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mniamatmarjan@gmail.com",
      subject: "Message from Website | Dunes Cart",
      reply_to: values.email,
      react: React.createElement(ContactFormEmail, values),
    });
  } catch (error: unknown) {
    return {
      error: data?.error || error,
    };
  }
  return {
    status: 200,
  };
};
