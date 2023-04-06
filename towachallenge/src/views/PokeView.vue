<template>
  <div class="home">
    <h2>Welcome!</h2>
    <p>On this website you can explore different Pokémon.</p>
    <!-- Add search input field bind value of searchPoke to it-->
    <input v-model="searchPoke" type="text" class="form-control mb-2" placeholder="Search...">
    <!-- Call fetchPokemon when clicked so that more random pokemon will be displayed -->
    <GridCards :pokemon="filteredPokemon" /> <!-- Display filtered pokemon -->
    <p v-if="errorMessage">{{ errorMessage }}</p> <!-- Error message in case we have error -->
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import GridCards from '@/components/GridCards.vue'

// Define reactive variables to store Pokemon and SearchPoke
// If any of them change, GridCards component is re-rendered
const pokemon = ref([])
const searchPoke = ref('')
// Define errorMessage as reactive so that when it changes -> re-render
const errorMessage = ref('')

// Async function so while we wait other lines can load
// Pass in query which will be updated when searchPoke changes (see watch)
const fetchPokemon = async (query = '') => {
  try {
    let url = 'https://pokeapi.co/api/v2/pokemon'
    let limit = 1118 // Fetch all Pokemon data from API
    // If user searches, we want the url to match the query
    // We set limit to null so that all Pokemon with characters will show
    if (query !== '') {
      url += `/${query}`
      limit = null
    }
    // Wait until fetch data, once fetched json data to readable data
    const res = await fetch(`${url}?offset=&limit=${limit}`)
    const apidata = await res.json()
    // Work with promises so we can see if we resolved all (successful)
    const pokemonPromises = apidata.results.map(async (result) => {
      const response = await fetch(result.url)
      const pokemonData = await response.json()
      const { id, height, weight } = pokemonData
      const name = pokemonData.name.toUpperCase() // Want name to be all Uppercase
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
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
    // If promises resolve (successful) we save it in pokemon.value, otherwise send error
    const pokemonList = await Promise.all(pokemonPromises)
    pokemon.value = pokemonList
  } catch (error) { // If error occurs log to console and update errorMessage so user is informed
    console.log(error)
    errorMessage.value = 'Loading Pokémon failed, please contact me so I can fix it'
  }
}

// Computed property to filter pokemon based on search query
// Computed so that if searchPoke changes (user input) it gets triggered and filters data
const filteredPokemon = computed(() => {
  const searchValue = searchPoke.value.toLowerCase() // Make search case insensitive
  return pokemon.value.filter(poke => // Filter the data we have by the string we are given
    poke.name.toLowerCase().includes(searchValue) || String(poke.id) === searchValue
  )
})

// Watch for changes to searchPoke and call fetchPokemon if length >= 3
// So we only start once 3 characters have been typed in
watch(searchPoke, (newValue) => {
  if (newValue.length >= 3) { // why doesn't this work
    fetchPokemon(newValue)
  }
})

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
