<template>
  <div class="home">
    <div class="container">
      <Title title="Top Free Rating" :showButton="false"></Title>
      <b-card-group deck>
        <div
          id="Box"
          :items="category"
          v-for="(item,index) in category"
          v-if="index<5"
          v-bind:key="item"
        >
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
      </b-card-group><br>
      <Title title="Top Paid Rating" :showButton="true" link="/type"></Title>
      <b-card-group deck>
        <div
          id="Box"
          :items="paid"
          v-for="(item,index) in paid"
          v-if="index<5"
          v-bind:key="item"
        >
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "../components/Cards.vue";
import Title from "../components/Title.vue";
import axios from "axios";

var sortJsonArray = require("sort-json-array");

export default {
  name: "home",
  components: {
    HelloWorld,
    Card,
    Title
  },
  data() {
    var instance = this;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://springbootsoa.herokuapp.com/api/Free", false);
    xhr.setRequestHeader(
      "Authorization",
      "Basic " + btoa("myuser" + ":" + "password")
    );
    xhr.send();
    var xhrPaid = new XMLHttpRequest();
    xhrPaid.open("GET", "https://springbootsoa.herokuapp.com/api/Paid", false);
    xhrPaid.setRequestHeader(
      "Authorization",
      "Basic " + btoa("myuser" + ":" + "password")
    );
    xhrPaid.send();
    if (xhr.readyState === 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      var category = result;
      var paid = JSON.parse(xhrPaid.responseText);
      console.log(JSON.parse(xhrPaid.responseText));
      for (var i = 0; i < category.length; i++) {
        category = sortJsonArray(category, "rating", "des");
        if (category[i].price == 0) {
          category[i].price = "Free";
        } else {
          category[i].price = "$" + category[i].price;
        }
      }
      for (var i = 0; i < paid.length; i++) {
        paid = sortJsonArray(paid, "rating", "des");
        if (paid[i].price != 0) {
          paid[i].price = "$" + paid[i].price;
        }
      }
    }
    return {
      category,
      paid
    };
  }
};
</script>