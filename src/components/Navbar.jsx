import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para mudar estilo do menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rolagem suave até seção
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur text-white shadow-lg" : "bg-black/40 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          🍽️ GourmetOn
        </h1>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6">
          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => handleScroll("about")}
          >
            Sobre
          </li>
          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => handleScroll("features")}
          >
            Funcionalidades
          </li>
          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => handleScroll("testimonials")}
          >
            Depoimentos
          </li>
          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => handleScroll("contact")}
          >
            Contato
          </li>
        </ul>

        {/* Botão mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <ul className="md:hidden flex flex-col bg-black/90 text-center p-4 space-y-4">
          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => handleScroll("about")}
          >
            Sobre
          </li>
          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => handleScroll("features")}
          >
            Funcionalidades
          </li>
          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => handleScroll("testimonials")}
          >
            Depoimentos
          </li>
          <li
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => handleScroll("contact")}
          >
            Contato
          </li>
        </ul>
      )}
    </nav>
  );
}
