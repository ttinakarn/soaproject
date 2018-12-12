<template>
  <div class="home">
    <div class="container">
      <title></title>
      <card 
        title="Test" 
        link="/category"
        appname="Facebook"
        appcategory="Social media"
        apprating="4.00"
        price="FREE"
        :showButton="false"></card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "../components/Cards.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Card
  }
};
</script>
