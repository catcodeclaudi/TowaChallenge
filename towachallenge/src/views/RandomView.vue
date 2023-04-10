<template>
  <div class="random m-2">
    <h2>Random Pokémon Fact Generator</h2>
    <p>If you click the card a new tab will be opened, leading you to the official Pokédex entry!</p>
    <button class="randomize rounded-pill border border-dark m-3" @click="fetchPokemon"> Surprise me! </button>
    <GridCards :pokemon="pokemon" />
    <p class="errorMessage" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GridCards from '@/components/GridCards.vue'

const pokemon = ref([])
const errorMessage = ref('')// Define errorMessage as reactive so that when it changes -> re-render & display

const fetchPokemon = async () => {
  try {
    const randomNumber = Math.floor(Math.random() * 916)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=1`)
    const apidata = await res.json()
    // Array of promises is dynamically created (map, async/await) so we can check with Promise.all later if resolved
    const pokemonPromises = apidata.results.map(async (result) => {
      const response = await fetch(result.url)
      const pokemonData = await response.json()
      const id = pokemonData.id
      const name = pokemonData.name.toUpperCase()
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      const url = `https://www.pokemon.com/us/pokedex/${name}`
      const description = await fetchPokemonDescription(pokemonData.species.url)
      return {
        id,
        name,
        image,
        url,
        description
      }
    })
    // See if all Promises have resolved and if so save in pokemon.value if not error
    const pokemonList = await Promise.all(pokemonPromises)
    pokemon.value = pokemonList
  } catch (error) {
    console.log(error)
    errorMessage.value = 'Loading Pokémon failed, please retry or contact me so I can fix it'
  }
}
// Get Pokemon Description/Fact from earlier fetched URL and find english description
const fetchPokemonDescription = async (speciesUrl) => {
  try {
    const speciesResponse = await fetch(speciesUrl)
    const speciesData = await speciesResponse.json()
    const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text
    return description
  } catch (error) {
    console.log(error)
  }
}

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
