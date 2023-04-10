<template>
  <header> <!--Header with Logo and Navbar-->
    <img class="logoTop" alt="logo" src="@/assets/logo.png">
    <NavRouter /> <!--Navigation Bar Component-->
  </header>
  <main> <!--Insert .vue for whichever router is selected-->
        <router-view/>
  </main>
  <footer> <!--Footer Component with Logo, Navbar and Address-->
        <FooterComp />
  </footer>
</template>

<script>
import NavRouter from '@/components/NavRouter.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  components: {
    NavRouter, // Import NavRouter.vue Component so no repetition
    FooterComp
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  padding: 10px;
  background: rgba(67, 109, 103, 0.4);
}

main {
  flex: 1;
  background-color: rgba(67, 109, 103, 0.4);
  padding: 5px;
}

.logoTop, .logoBottom {
  height: 70px;
}

nav {
  padding: 20px;
}

nav a, a:link {
  font-weight: bold;
  color: #1f3f40;
}

nav a.router-link-exact-active {
  color: #0e9088;
}
</style>
