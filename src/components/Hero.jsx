export default function Hero() {
  return (
    <section
      className="relative bg-yellow-500 text-white h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay para escurecer a imagem e dar contraste */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo da Hero */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold drop-shadow-lg">🍽️ GourmetOn</h1>
        <p className="mt-4 text-xl drop-shadow-md">
          Seu app de delivery rápido e saboroso!
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-yellow-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
        >
          Baixar App
        </a>
      </div>
    </section>
  );
}
