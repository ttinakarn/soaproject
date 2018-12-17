<template>
  <div class="container">
    <b-input-group>
      <b-form-input></b-form-input>
      <b-input-group-append>
        <b-btn variant="success">Search</b-btn>
        <br>
      </b-input-group-append>
    </b-input-group><br>
    <b-card-group deck>
          <div id="Box" :items="apps" v-for="(item) in apps" v-bind:key="item">
            <router-link
              :to="{ name: 'about', params: { 
              name: item.app, 
              category: item.category, 
              genre: item.genres, 
              rated: item.content,
              rating: Number(item.rating),
              size: item.size,
              installs: item.installs,
              price: item.price,
              lastUpdate: item.lastUpdate,
              current: item.current,
              android: item.android} }"
            >
              <card
                :appname="item.app"
                :appcategory="item.category"
                :apprating="item.rating"
                :price="item.price"
              ></card>
            </router-link>
          </div>
        </b-card-group>
  </div>
</template>

<script>
import Card from "../components/Cards.vue";

export default {
  components: {
    Card
  },
  data() {
    var xhrSearch = new XMLHttpRequest();
    xhrSearch.open("GET", "https://springbootsoa.herokuapp.com/api/All", false);
    xhrSearch.setRequestHeader(
      "Authorization",
      "Basic " + btoa("myuser" + ":" + "password")
    );
    xhrSearch.send();
    
    if (xhrSearch.readyState === 4 && xhrSearch.status == 200) {
      var apps = JSON.parse(xhrSearch.responseText);
    }
    for (var i = 0; i < apps.length; i++) {
        if (apps[i].price == 0) {
          apps[i].price = "Free";
        } else {
          apps[i].price = "$" + apps[i].price;
        }
      }
    return {
      apps
    };
  },
  computed: {
    filterdApp: function() {
      return this.app.filter();
    }
  }
};
</script>
