<template>
  <header>
    <img class="logoTop" alt="catnyou logo" src="@/assets/catnyou.png">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/random">Random</router-link>
    </nav>
  </header>
  <main>
        <router-view/>
  </main>
  <footer>
        <div class="container">
          <div class="col"><img class="logoBottom" alt="catnyou logo" src="@/assets/catnyou.png"></div>
          <div class="col">
            <nav>
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link> |
              <router-link to="/random">Random</router-link>
            </nav>
          </div>
          <div class="col">
            <div>4 Privet Drive</div>
            <div>Little Whinging, Surrey</div>
            <div>England</div>
          </div>
        </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

header {
  padding: 10px 30px;
  background-color: rgba(183, 224, 210, 20%)
}
.logoTop {
  height: 100px;
}
.logoBottom {
  height: 70px;
}
</style>
