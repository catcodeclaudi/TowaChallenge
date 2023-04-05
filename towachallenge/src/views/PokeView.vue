<template>
  <div class="home">
    <h2>Welcome!</h2>
    <p>On this website you can explore different Pokemon.</p>
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
    const randomNumber = Math.floor(Math.random() * 1000)
    // Fetch Data from API and extract JSON data from response, load only 20
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomNumber}&limit=20`)
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
/*style disclaimer so it's not too big but still readable*/
.disclaimer {
  color: rgb(94, 94, 94);
  font-style: italic;
  font-size: 12px;
  padding: 20px;
}

button {
  background-color: white;
}
</style>
