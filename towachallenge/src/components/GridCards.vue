<template>
    <div class="container"> <!--Create Grid for responsive use-->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            <!--Loop through item that gets passed to items-->
            <!--Define unique key-->
            <!--Give class to make grid responsive for every device, in case media queries don't work or different size-->
            <div v-for="item in items" :key="item.id" class="col-12 col-md-6 col-lg-4 mx-auto">
                <div @click="RedirectToLink(item.url)"> <!--We want the whole card to be clickable, create method because it is cleaner-->
                    <div class="card bg-dark w-100" title="Click to learn more (Opens new tab to external website)">
                        <img :src="item.image" class="card-img-top" :alt="item.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{ item.text }}</p>
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
    items: { // Define poperty called items that is an array and will have to be passed in
      type: Array,
      required: true
    }
  },
  methods: { // Define method that on click opens up url
    RedirectToLink (url) {
      window.open(url, '_blank', 'noreferrer', 'noopener') // blank so new tab, noreferrer and noopener for security
    }
  }
}
</script>

<style>
.container {
    padding: 10px;
}

.card-img-top {
    padding: 3px;
    border-radius: 5px;;
}

.card {
    padding: 10px;
    margin-top: 12px;
    margin-bottom: 12px;
}

.card-body {
    height: 150px;
}

.card-title, .card-text {
    color:rgb(191, 196, 196);
}
/* We want the hover over the card as clickable to be ovious*/
.card:hover {
    cursor:pointer;
}

</style>
