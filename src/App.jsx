import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API pública gratuita (TheMealDB - não precisa chave)
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );
        if (!response.ok) {
          throw new Error("Erro na API: " + response.status);
        }
        const data = await response.json();
        setComidas(data.meals || []);
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Menu fixo no topo */}
      <Navbar />

      {/* Seções com IDs para scroll suave */}
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features comidas={comidas} />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
