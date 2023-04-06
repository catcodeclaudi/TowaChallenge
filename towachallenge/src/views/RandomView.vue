<template>
    <div class="random">
      <h2>Random Pokemon Generator</h2>
      <p>Hit the reload button to generate random Pokemon.</p>
      <!--Call fetchpokemon when clicked so that more random pokemon will be displayed-->
      <button class="rounded-pill border border-dark m-3" title="Reload Pokemon" @click="fetchPokemon">Click to see more &#10227;</button>
      <GridCards :pokemon="pokemon" /> <!--Insert GridCards component with its items to display pokemon-->
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue'
import GridCards from '@/components/GridCards.vue'
// Define reactive variable to store Pokemon so re-render of component is triggered
const pokemon = ref([])
// Async so while we wait other lines can load
const fetchPokemon = async () => {
  try {
    // Create Random Number to insert in URL & exclude newest generation bc we don't have good pictures (1000 Pokemon)
    const randomNumber = Math.floor(Math.random() * 1118)
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
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
      const url = `https://www.pokemon.com/us/pokedex/${name}`
      return {
        id,
        name,
        image,
        height,
        weight,
        url
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
  }
  </style>
