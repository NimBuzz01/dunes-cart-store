import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import ModalPreview from "@/providers/modalPreview";
import ToastProvider from "@/providers/toastProvider";
import NavBar from "@/components/navbar/NavBar";
import GoUpButton from "@/components/GoUpButton";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Dunes Cart - Homepage",
  description: "Dunes Cart - Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth scrollbar-thin scrollbar-track-cmsecondary scrollbar-thumb-cmprimary"
    >
      <body className={archivo.className}>
        <ModalPreview />
        <ToastProvider />
        <GoUpButton />
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
