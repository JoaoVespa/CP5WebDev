export default function ContactForm() {
  return (
    <section id="contact" className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Entre em contato</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
