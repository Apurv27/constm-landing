import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <Problems />
        <Features />
        <DashboardPreview />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
