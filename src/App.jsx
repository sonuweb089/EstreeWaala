import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/footer";
import Hero from "./Component/Hero";
import Services from "./Component/Service";
import About from "./Component/About";
import Eco from "./Component/Eco";
import FAQ from "./Component/Faq";
import CTA from "./Component/Cta";
import QuickService from "./Component/QuickService";
import { Routes, Route } from "react-router-dom";
import About2 from "./Component/About2service";
import Test from "./Component/Test";

import Contact from "./Component/Contact/contactmap";
import Contactform from "./Component/Contact/form";
import Contactme from "./Component/Contact/myContact";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Navbar showForm={showForm} setShowForm={setShowForm} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero setShowForm={setShowForm} />
              <Services />
              <About setShowForm={setShowForm} />
              <About2 setShowForm={setShowForm} /> <Eco />
              <CTA />
              <Test />
              <FAQ />
              <QuickService setShowForm={setShowForm} />
            </>
          }
        />
        <Route
          path="/ourservice"
          element={
            <>
              <About2 setShowForm={setShowForm} /> <Eco />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <About setShowForm={setShowForm} />
            </>
          }
        />
        <Route
          path="/ecofriendly"
          element={
            <>
              <Eco />
            </>
          }
        />
        <Route
          path="/cta"
          element={
            <>
              <CTA />
            </>
          }
        />

        <Route path="/testimonial" element={<Test />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/contact"
          element={
            <>
              <Contact />

              <Contactform />
              <Contactme />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
