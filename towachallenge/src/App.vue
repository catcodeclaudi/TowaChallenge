<template>
  <header>
    <img class="logoTop" alt="catnyou logo" src="@/assets/catnyou.png">
    <NavRouter />
  </header>
  <main>
        <router-view/>
  </main>
  <footer>
        <div class="container">
          <div class="col">
            <img class="logoBottom" alt="catnyou logo" src="@/assets/catnyou.png">
          </div>
          <div class="col">
            <NavRouter />
          </div>
          <div class="col">
            <address>4 Privet Drive<br>
            Little Whinging, Surrey<br>
            England</address>
            <div>Contact us via <a href=mailto:catnyou@gmail.com>E-Mail</a>
             or <a href=tel:+999999999> Phone</a></div>
             <div>catnyou@gmail.com | +999 999 999</div>
          </div>
        </div>
  </footer>
</template>

<script>
import NavRouter from '@/components/NavRouter.vue'

export default {
  components: {
    NavRouter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  padding: 10px 30px;
  background-color: rgba(183, 224, 210, 20%)
}

footer {
  font-size: 13px;
  padding: 25px;
}

footer .col {
  margin: -15px;
}
.logoTop {
  height: 100px;

}
.logoBottom {
  height: 70px;
}

nav {
  padding: 30px;
}

nav a, a:link {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
