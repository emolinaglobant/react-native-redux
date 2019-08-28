const API = 'https://pokeapi.co/api/v2/';
const POKEMON_LIST = 'pokemon'

export default async function getPokemonList() {
  try {
    const query = await fetch(`${API}${POKEMON_LIST}`);
    const data = await query.json();
    return data
  } catch (error) {
    console.log(error)
  }
} 