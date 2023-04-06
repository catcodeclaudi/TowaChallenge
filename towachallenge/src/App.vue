<template>
  <header> <!--Header with Logo and Navbar-->
    <img class="logoTop" alt="catnyou logo" src="@/assets/logo.png">
    <NavRouter /> <!--Navigation Bar Component-->
  </header>
  <main> <!--Insert .vue for whichever router is selected-->
        <router-view/>
  </main>
  <footer> <!--Footer with Logo, Navbar and Address-->
        <div class="container"> <!--Responsive Bootstrap container-->
          <div class="col">
            <img class="logoBottom" alt="catnyou logo" src="@/assets/logo.png">
          </div>
          <div class="col">
            <NavRouter /> <!--Navigation Bar Component-->
          </div>
          <div class="col">
            <address>Pallet House<br> <!--address for easier SEO-->
            Pallet Town<br>
            Kanto</address>
            <div>Contact us via <a href=mailto:catnyou@gmail.com>E-Mail</a>
             or <a href=tel:+999999999> Phone</a></div>
             <div>theverybest@gmail.com | +999 999 999</div>
          </div>
        </div>
  </footer>
</template>

<script>
import NavRouter from '@/components/NavRouter.vue'

export default {
  components: {
    NavRouter // Import NavRouter.vue Component so no repetition
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
  padding: 10px;
  background: rgba(67, 109, 103, 0.4);
}

main {
  background-color: rgba(67, 109, 103, 0.4);
  padding: 5px;
}

footer {
  font-size: 13px;
  padding: 10px;
  background: rgba(67, 109, 103, 0.4);
}

.logoTop, .logoBottom {
  height: 70px;
}

nav {
  padding: 20px;
}
/* I want the footer to be tighter*/
footer nav {
  padding: 10px;
}

nav a, a:link {
  font-weight: bold;
  color: #1f3f40;
}

nav a.router-link-exact-active {
  color: #0e9088;
}
</style>
