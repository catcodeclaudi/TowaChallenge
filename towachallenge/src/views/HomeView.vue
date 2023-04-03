<template>
  <div class="home">
    <GridCards :items="catbreeds" /> <!--Insert GridCards component with its items-->
    <div class="disclaimer">
      Disclaimer: I was doing some research on breeding as I was working on this Project.
      I have come to find that breeding poses great risk to the health of cats. I am absolutely against that,
       but I will use cat breeds as dummy data here.
    </div>
  </div>
</template>

<script>
import GridCards from '../components/GridCards.vue'

export default {
  components: {
    GridCards
  },
  data () { // Fill in dummy data manually
    return {
      catbreeds: [
        {
          id: 1,
          title: 'Ragdoll',
          text: 'Apparently the most popular breed of all, very cute',
          image: 'https://www.catbreedslist.com/uploads/cat-pictures/ragdoll-2.jpg',
          url: 'https://www.catbreedslist.com/all-cat-breeds/ragdoll.html'
        },
        {
          id: 2,
          title: 'Maine Coon',
          text: 'May look very grumpy, but is deemed loveable',
          image: 'https://www.catbreedslist.com/uploads/cat-pictures/maine-coon-2.jpg',
          url: 'https://www.catbreedslist.com/all-cat-breeds/maine-coon.html'
        },
        {
          id: 3,
          title: 'British Shorthair',
          text: 'Look at this beauty',
          image: 'https://www.catbreedslist.com/uploads/cat-pictures/british-shorthair-2.jpg',
          url: 'https://www.catbreedslist.com/all-cat-breeds/british-shorthair.html'
        },
        {
          id: 4,
          title: 'American Shorthair',
          text: 'Indeed also very cute',
          image: 'https://www.catbreedslist.com/uploads/cat-pictures/american-shorthair-2.jpg',
          url: 'https://www.catbreedslist.com/all-cat-breeds/american-shorthair.html'
        },
        {
          id: 5,
          title: 'Sphynx',
          text: 'They look like they are looking for a servant',
          image: 'https://www.catbreedslist.com/uploads/cat-pictures/sphynx-2.jpg',
          url: 'https://www.catbreedslist.com/all-cat-breeds/sphynx.html'
        }
      ]
    }
  }
}
</script>

<style>
/*style disclaimer so it's not too big but still readable*/
.disclaimer {
  color: rgb(94, 94, 94);
  font-style: italic;
  font-size: 12px;
  padding: 20px;
}
</style>
