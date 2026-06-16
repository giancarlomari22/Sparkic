import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactInfo } from "@/components/contact-info";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Spark Adriatic",
  description: "Get in touch with the Spark Adriatic team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have a project in mind? We'd love to hear from you."
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
