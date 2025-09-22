export default function Testimonials() {
  return (
    <section className="p-10 text-center bg-yellow-100">
      <h2 className="text-3xl font-bold mb-6">O que nossos clientes dizem</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <blockquote className="bg-white shadow p-6 rounded-lg w-80">
          “Entrega super rápida, comida deliciosa! – Maria S.”
        </blockquote>
        <blockquote className="bg-white shadow p-6 rounded-lg w-80">
          “Variedade incrível de restaurantes. – João P.”
        </blockquote>
      </div>
    </section>
  );
}
