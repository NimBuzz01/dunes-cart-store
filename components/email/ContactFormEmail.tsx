import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { ContactEmailTypes } from "@/lib/types";

export default function ContactFormEmail(values: ContactEmailTypes) {
  return (
    <Html>
      <Head />
      <Preview>New message from your Website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{values.message}</Text>
              <Hr />
              <Text>Name: {values.name}</Text>
              <Text>Email: {values.email}</Text>
              <Text>Phone Number: {values.phone}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
