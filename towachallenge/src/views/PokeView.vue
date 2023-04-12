<template>
  <div class="home">
    <h2>Welcome!</h2>
    <!--We can only display 916 Pokémon if we want the nice artwork, working on it-->
    <p class="welcomeText m-2">Here you can search for your favorite (or least favorite) Pokémon!<br>
      If you click the card a new tab will be opened, leading you to the official Pokédex entry. There you can find more relevant data, so
      <a target="_blank" class="link-dark" title="The best theme song EVER" href="https://www.youtube.com/watch?v=rg6CiPI6h2g&ab_channel=kerwinpogi092">
      YOU can become the very best.*</a>
    </p>
    <p class="warning m-0">*if you follow this link to the best theme song ever, be warned of the volume</p>
    <!-- Add search input field bind value of searchPoke to it-->
    <input v-model="searchPoke" type="text" class="search text-center rounded-pill border border-dark m-3" placeholder="Search Pokémon...">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mx-auto">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Sort by <span :sortOption="sortOption">{{ sortOption }}</span>
          </button>
          <ul class="text-center dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
            <li class="dropdown-item" href="#" @click="sortAscendingID">ID &#8593;(default)</li>
            <li class="dropdown-item" href="#" @click="sortDescendingID">ID &#8595;</li>
            <li class="dropdown-item" href="#" @click="sortAscendingName">Name A-Z</li>
            <li class="dropdown-item" href="#" @click="sortDescendingName">Name Z-A</li>
          </ul>
        </div>
      </div>
    </div>
    <GridCards :pokemon="filteredPokemon" /> <!-- Display filtered pokemon -->
    <p class="errorMessage" v-if="errorMessage">{{ errorMessage }}</p> <!-- Error message in case we have error -->
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import GridCards from '@/components/GridCards.vue'

// Define reactive variables to re-render and display any changes
const pokemon = ref([])
const searchPoke = ref('')
const errorMessage = ref('')

// Async function so while we wait other lines can load & pass in query which will be updated when searchPoke changes
const fetchPokemon = async () => {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const limit = 916 // Fetch Pokemon data from API & limit to 916 bc that's how far the image source lines up with ID's
    const res = await fetch(`${url}?offset=&limit=${limit}`)
    const apidata = await res.json()
    // Use map to create array of promises, work with Promise.all
    const pokemonPromises = apidata.results.map(async (result) => {
      const response = await fetch(result.url)
      const pokemonData = await response.json()
      const id = pokemonData.id
      const weight = Math.round(((pokemonData.weight * 0.1) + Number.EPSILON) * 100) / 100 // Convert Hectogram to Kilogram
      const height = Math.round(((pokemonData.height * 0.1) + Number.EPSILON) * 100) / 100 // Convert Decimeters to Meters
      const type = pokemonData.types[0].type.name.charAt(0).toUpperCase() + pokemonData.types[0].type.name.slice(1)
      const name = pokemonData.name.toUpperCase() // Want name to be all Uppercase
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
    // If promises resolve (successful) we save it in pokemon.value, otherwise send error
    const pokemonList = await Promise.all(pokemonPromises)
    pokemon.value = pokemonList
  } catch (error) {
    console.log(error)
    errorMessage.value = 'Loading Pokémon failed, please retry or contact me so I can fix it'
  }
}

// Computed so that if searchPoke changes (user input) it gets triggered and filters data
const filteredPokemon = computed(() => {
  const searchValue = searchPoke.value.toLowerCase() // Make search case insensitive
  if (searchValue.length < 3) {
    return pokemon.value // We only start searching after 3 characters have been typed, otherwise we return all Pokemon
  }
  return pokemon.value.filter(poke => // Filter the data we have by the string we are given
    poke.name.toLowerCase().includes(searchValue)
  )
})
// Once component is mounted we call function
onMounted(() => {
  fetchPokemon()
})

// Define ways to sort displayed Pokemon
const sortOption = ref('ID \u2191')

const sortAscendingID = () => {
  sortOption.value = 'ID \u2191'
  pokemon.value.sort((a, b) => a.id - b.id)
}
const sortDescendingID = () => {
  sortOption.value = 'ID \u2193'
  pokemon.value.sort((a, b) => b.id - a.id)
}
// Use localeCompare to compare strings and sort by the comparison
const sortAscendingName = () => {
  sortOption.value = 'Name A-Z'
  pokemon.value.sort((a, b) => a.name.localeCompare(b.name))
}

const sortDescendingName = () => {
  sortOption.value = 'Name Z-A'
  pokemon.value.sort((a, b) => b.name.localeCompare(a.name))
}

</script>

<style>
.dropdown-menu {
  z-index: 999;
}

button {
  background-color: white;
}
.search {
  padding: 2px;
  width: 80%;
  max-width: 250px;
}

.warning {
  font-size: 13px;
  text-align: center;
}

.dropdown-menu {
  width: 180px;
}
</style>
