<template>
    <div class="random">
      <h2>Random Pokemon Generator</h2>
      <p>If you click the card you will be redirected to the official Pokédex Page of the Pokémon!</p>
      <!--Call fetchpokemon when clicked so that more random pokemon will be displayed-->
      <button class="randomize rounded-pill border border-dark m-3" title="Reload Pokemon" @click="fetchPokemon"> Surprise me! </button>
      <GridCards :pokemon="pokemon" /> <!--Insert GridCards component with its items to display pokemon-->
    </div>
  </template>

<script setup> // I WANT TO MAKE A COMPONENT OUT OF THIS BECAUSE OF REPETITION
import { ref, onMounted } from 'vue'
import GridCards from '@/components/GridCards.vue'
// Define reactive variable to store Pokemon so re-render of component is triggered
const pokemon = ref([])
// Async so while we wait other lines can load
const fetchPokemon = async () => {
  try {
    // Create Random Number to insert in URL & exclude newest generation bc we don't have good pictures (1000 Pokemon)
    const randomNumber = Math.floor(Math.random() * 916)
    // Fetch Data from API and extract JSON data from response, load only 20
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=10`)
    const apidata = await res.json()
    // Use Promise to await response of fetching data
    // Save fetched data if successful in variable
    const pokemonPromises = apidata.results.map(async (result) => {
      const response = await fetch(result.url)
      const pokemonData = await response.json()
      const { id, height, weight } = pokemonData
      const name = pokemonData.name.toUpperCase()
      const type = pokemonData.types[0].type.name.toUpperCase()
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
    // If successful we save it in pokemon.value, otherwise send error
    const pokemonList = await Promise.all(pokemonPromises)
    pokemon.value = pokemonList
  } catch (error) {
    console.log(error)
  }
}
// Once component is mounted we call function
onMounted(() => {
  fetchPokemon()
})
</script>

  <style>
  button {
    background-color: white;
    width: 180px;
    padding: 2px;
  }
  </style>
