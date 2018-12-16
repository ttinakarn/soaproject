<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="success">
      <div class="container">
        <router-link to="/">
          <img alt="Vue logo" src="./assets/googlePlayLogo.png" style="height: 30px;">
        </router-link>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Category" right>
            <div id="Box" :items="category" v-for="(item) in category" v-bind:key="item">
              <b-dropdown-item>
                <router-link :to="{ name: 'category', params: {catName: item.category} }">
                  {{item.category}}
                </router-link>
              </b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
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

<script>
export default {
  data() {
    var instance = this;
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://springbootsoa.herokuapp.com/api/Category",
      false
    );
    xhr.setRequestHeader(
      "Authorization",
      "Basic " + btoa("myuser" + ":" + "password")
    );
    xhr.send();
    if (xhr.readyState === 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      var category = result;
    }
    return {
      category
    };
  }
}
</script>

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
