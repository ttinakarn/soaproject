<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="success">
      <div class="container">
        <router-link to="/">
          <img alt="Vue logo" src="./assets/googlePlayLogo.png" style="height: 30px;">
        </router-link>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Category" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>
            <router-link to="/topcharts" class="text-white">Top Charts</router-link>
          </b-nav-item>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <br>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
