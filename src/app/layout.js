import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elegant Skilltech",
  description:
    "Professional training institution for AI and Data Science, Welding, Oil and Gas, and more.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-content">
          {children}
          <Analytics />
        </div>
        <Footer className="footer" />
      </body>
    </html>
  );
}
