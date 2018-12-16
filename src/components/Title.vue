<template>
  <div>
    <b-row>
      <b-col style="text-align: left;">
        <h3>{{ title }}</h3>
      </b-col>
      <b-col style="text-align: right;">
        <b-button  v-if="showButton">
            See More
          <router-link :to="link" class="text-white"></router-link>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "link",
    "showButton"
  ]
};
</script>
