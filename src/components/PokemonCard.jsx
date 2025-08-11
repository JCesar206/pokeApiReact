function PokemonCard({ data, onFav }) {
    if (data.error) return <p className="text-red-500">❌ {data.message}</p>;

    return(
        <div className="bg-white shadow-lg rounded-lg p-4 m-4">
            <h2 className="text-2xl font-bold mb-2 capitalize">{data.name}</h2>
            <img src={data.sprites.front_default} alt={data.name}
            className="mx-auto mb-2"
            />
            <p>🆔 ID: {data.id}</p>
            <p>📏 Altura: {data.height / 10} m</p>
            <p>⚖️ Peso: {data.weight / 10} kg</p>
            <p>🎮 Tipo: {data.types.map(t => t.type.name).join(', ')}</p>
            <button className="mt-3 bg-green-500 text-white px-4 py-1 rounded"
            onClick={onFav}
            >
                Agregar a Favoritos ⭐
            </button>
        </div>
    );
}

export default PokemonCard;