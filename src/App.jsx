import { useState, useRef } from 'react';
import PokemonCard from './components/PokemonCard';
import FavoriteList from './components/FavoriteList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showJson, setShowJson] = useState(false);

  const inputRef = useRef();

  const dowloadJSON = (data, filename = 'pokemon.json') => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  };

  const fetchPokemon = async () => {
    const name = inputRef.current.value.trim().toLowerCase();
    if (!name) return;

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!res.ok) throw new Error('No encontrado');
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
      setPokemon({ error: true, message: err.message });
    }
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const addToFavorites = () => {
    if (!pokemon || pokemon.error) return;
    if (!favorites.some(fav => fav.id === pokemon.id)) {
      setFavorites([...favorites, pokemon]);
    }
  };

  return (
        <div className='flex flex-col min-h-screen'>
          <main className='flex-1 p-4 max-w-xl mx-auto w-full text-center'>
            <h1 className='text-3xl font-bold mb-4'>Pokédex 🧢</h1>
            <div className='flex gap-2 justify-center mb-4'>
              <input
              type='text'
              placeholder='Nombre o número'
              ref={inputRef}
              className='border px-4 py-2 rounded'
              onKeyDown={(e) => {
                if (e.key === 'Enter') fetchPokemon();
              }}
              />
              <button
              className='bg-blue-500 text-white px-4 py-2 rounded'
              onClick={fetchPokemon}
              >
                Buscar
              </button>
            </div>

            {pokemon && (
              <PokemonCard data={pokemon} onFav={addToFavorites} />
            )}

            {pokemon && !pokemon.error && (
              <>
                <button className='bg-gray-700 text-white px-4 py-1 rounded mb-2'
                onClick={() => setShowJson(!showJson)}
                >
                  {showJson ? 'Ocultar JSON 🫣' : 'Ver JSON 🧬'}
                </button>
                <button className='bg-green-600 text-white px-4 py-1 rounded mb-4 ml-2'
                onClick={() => dowloadJSON(pokemon, `${pokemon.name}.json`)}
                >
                  Descargar JSON ⬇️
                </button>

                {showJson && (
                  <pre className='bg-black text-green-400 text-left overflow-x-auto p-2 rounded max-h-64'>
                    {JSON.stringify(pokemon, null, 2)}
                  </pre>
                )}
              </>
            )}
            <FavoriteList list={favorites} />
          </main>

        <Footer />
        </div>
  );
}

export default App;
