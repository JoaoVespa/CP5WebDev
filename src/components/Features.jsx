export default function Features({ comidas }) {
  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Funcionalidades</h2>
      <ul className="flex flex-wrap justify-center gap-6">
        <li className="bg-white shadow p-6 rounded-lg w-72">🔎 Busca por pratos</li>
        <li className="bg-white shadow p-6 rounded-lg w-72">🥗 Filtros personalizados</li>
        <li className="bg-white shadow p-6 rounded-lg w-72">💳 Pagamento fácil</li>
      </ul>

      <h3 className="text-2xl font-semibold text-center mt-10 mb-4">
        Exemplo de pratos do app 🍲
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {comidas.length > 0 ? (
          comidas.map((item) => (
            <div
              key={item.idMeal}
              className="bg-white p-4 rounded-lg shadow w-64 text-center"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="rounded-lg mb-3"
              />
              <h4 className="font-bold">{item.strMeal}</h4>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Carregando pratos...</p>
        )}
      </div>
    </section>
  );
}
