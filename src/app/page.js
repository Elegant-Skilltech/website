"use client";
import * as React from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import AboutUs from "@/components/AboutUs";
import Aim from "@/components/Aim";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <Navbar />
      <Main />
      <AboutUs />
      <Aim />
      <Features />
      <Courses />
      <Footer />
    </div>
  );
}
