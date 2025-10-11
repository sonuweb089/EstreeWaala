// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Services from "./Component/Service";
import About from "./Component/About";
import Eco from "./Component/Eco";
import FAQ from "./Component/Faq";
import Test from "./Component/Test";
import Cta from "./Component/Cta1";
import HomeContact from "./Component/Contactform";
import QuickService from "./Component/QuickService";
import Footer from "./Component/footer";

function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section id="home">
        <Hero showForm={showForm} setShowForm={setShowForm} />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About setShowForm={setShowForm} />
      </section>
      <section id="eco">
        <Eco />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="testimonials">
        <Test />
      </section>
      <section id="cta">
        <Cta />
      </section>
      <section id="contact">
        <HomeContact />
      </section>

      <Footer />
    </>
  );
}

import Contact from "./Component/Contact/contactmap";
import Contactme from "./Component/Contact/myContact";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={
            <>
              {" "}
              <Contact /> <HomeContact /> <Footer />{" "}
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}
