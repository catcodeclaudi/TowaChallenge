// I would love to use this in Pokeview and RandomView to get rid of repetition
export const fetchPokemon = async () => {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=916'
    const res = await fetch(url)
    const apidata = await res.json()
    const pokemonPromises = apidata.results.map(async (result) => {
      const response = await fetch(result.url)
      const pokemonData = await response.json()
      const { id, height, weight } = pokemonData
      const type = pokemonData.types[0].type.name.toUpperCase()
      const name = pokemonData.name.toUpperCase()
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      const url = `https://www.pokemon.com/us/pokedex/${name}`
      return {
        id,
        name,
        image,
        height,
        weight,
        url,
        type
      }
    })
    const pokemonList = await Promise.all(pokemonPromises)
    return pokemonList
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch Pokemon data')
  }
}
