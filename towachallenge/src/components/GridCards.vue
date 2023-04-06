<template>
    <div class="container"> <!--Create Grid for responsive use-->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            <!--Loop through item that gets passed to items-->
            <!--Define unique key-->
            <!--Give class to make grid responsive for every device, in case media queries don't work or different size-->
            <div v-for="poke in pokemon" :key="poke.id" :pokemon="poke" class="col-12 col-md-6 col-lg-4 mx-auto">
                <div @click="RedirectToLink(poke.url)"> <!--We want the whole card to be clickable, create method because it is cleaner-->
                    <div class="card-with-radius bg-dark w-100" title="Click to learn more (Opens new tab to external website)">
                        <img :src="poke.image" class="card-image" :alt="poke.name">
                        <div class="card-body">
                            <h5 class="card-title">{{ poke.name }}</h5>
                            <p class="card-text">
                                ID: {{ poke.id }}<br>
                                Height: {{ poke.height }} ft<br>
                                Weight: {{ poke.weight }} lbs<br>
                                Type: {{ poke.type }}<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    pokemon: { // Define poperty called items that is an array and will have to be passed in
      type: Array,
      required: true
    }
  },
  methods: { // Define method that on click opens up url
    RedirectToLink (url) {
      window.open(url, '_blank', 'noreferrer noopener') // blank so new tab, noreferrer and noopener for security
    }
  }
}
</script>

<style>
.container {
    padding: 10px;
}

/* Applied special class here so that I can change the border radius*/
.card-with-radius {
    padding: 10px;
    margin-top: 12px;
    margin-bottom: 12px;
    border-radius: 30px;
}

.card-image {
    border-radius: 30px;
    width: 60%;
    height: auto;
    padding: 10px;
}

.card-body {
    height: 150px;
    margin: 5px;
}

.card-title, .card-text {
    color:rgb(204, 209, 209);
}
/* We want the hover over the card as clickable to be ovious*/
.card-with-radius:hover {
    cursor:pointer;
}

</style>
