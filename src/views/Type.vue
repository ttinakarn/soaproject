<template>
  <div class="home">
    <div class="container">
      <div
        :items="category"
        v-for="(item,index) in category"
        v-if="index<1"
        v-bind:key="item"
      >
        <Title title="Paid apps" :showButton="false"></Title>
        <b-card-group deck>
          <div id="Box" :items="category" v-for="(item) in category" v-bind:key="item">
            <router-link :to="{ name: 'about', params: { 
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
              android: item.android} }">
            <card
              :appname="item.app"
              :appcategory="item.category"
              :apprating="item.rating"
              :price="item.price"
            ></card></router-link>
          </div>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "../components/Cards.vue";
import Title from "../components/Title.vue";
import axios from "axios";

export default {
  name: 'category',
  props: ['catName'],
  components: {
    HelloWorld,
    Card,
    Title
  },
  data() {
    var instance = this;
    var xhr = new XMLHttpRequest();      
    xhr.open(
      "GET",
      "https://springbootsoa.herokuapp.com/api/Paid/",
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
      for (var i = 0; i < category.length; i++) {
        if (category[i].price == 0) {
          category[i].price = "Free";
        }
        else{
          category[i].price = "$" + category[i].price;
        }
      }
    }
    return {
      category
    };
  }
};
</script>