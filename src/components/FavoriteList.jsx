function FavoriteList({ list }) {
    if (list.length === 0) return null;

    return(
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Favoritos ⭐</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {list.map(p => (
                    <div key={p.id} className="bg-yellow-100 p-2 rounded w-28 text-sm">
                        <img src={p.sprites.front_default} alt={p.name} className="w-full" />
                        <p className="capitalize">{p.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoriteList;