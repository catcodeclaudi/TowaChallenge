<template>
  <div class="home">
    <GridCards :items="catbreeds" />
  </div>
</template>

<script>
import GridCards from '../components/GridCards.vue'

export default {
  components: {
    GridCards
  },
  data () {
    return {
      catbreeds: [
        {
          id: 1,
          title: 'Ragdoll',
          text: 'The most popular breed of all',
          image: 'https://www.catbreedslist.com/uploads/cat-pictures/ragdoll-2.jpg',
          url: 'https://www.catbreedslist.com/all-cat-breeds/ragdoll.html'
        },
        {
          id: 1,
          title: 'Ragdoll',
          text: 'The most popular breed of all',
          image: 'https://www.catbreedslist.com/uploads/cat-pictures/ragdoll-2.jpg',
          url: 'https://www.catbreedslist.com/all-cat-breeds/ragdoll.html'
        },
        {
          id: 1,
          title: 'Ragdoll',
          text: 'The most popular breed of all',
          image: 'https://www.catbreedslist.com/uploads/cat-pictures/ragdoll-2.jpg',
          url: 'https://www.catbreedslist.com/all-cat-breeds/ragdoll.html'
        }
      ]
    }
  }
}
</script>
