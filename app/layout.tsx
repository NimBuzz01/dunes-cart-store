import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ModalPreview from "@/providers/modalPreview";
import ToastProvider from "@/providers/toastProvider";
import NavBar from "@/components/navbar/NavBar";

const poppins = Poppins({
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
    <html lang="en">
      <body className={poppins.className}>
        <main className="container min-h-screen">
          <ModalPreview />
          <ToastProvider />
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
