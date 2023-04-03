<template>
    <div class="container"> <!--Create Grid for responsive use-->
        <div class="row">
            <!--Loop through item that gets passed to items-->
            <!--Define unique key-->
            <!--Give class to make grid responsive for every device, in case media queries don't work or different size-->
            <div v-for="item in items" :key="item.id" class="col-12 col-md-6 col-lg-4">
                <a :href="item.url"> <!--We want the whole card to be clickable-->
                    <div class="card">
                        <img :src="item.image" class="card-img-top" :alt="item.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{ item.text }}</p>
                        </div>
                    </div>
                </a>
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
    }
}
</script>

<style>
/*On mobile we only want 1 column*/
.card {
    width: 100%;
}
/*On tablet we want 2 columns*/
@media (min-width: 768px) {
    .card {
        width: 50%;
    }
}
/*On Desktop we want 3 columns*/
@media (min-width: 992px) {
    .card {
        width: 33.33%
    }
}
</style>