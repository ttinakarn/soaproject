<template>
  <div class="about container">
    <template>
      <b-jumbotron style="width: 900px; margin: auto;">
        <b-row>
          <b-col md="4">
            <img src="../assets/appLogo.png" style="width: 200px; margin: 10px;">
            <p><b>{{category}}</b><br>{{genre}}</p>
          </b-col>
          <b-col><h2>{{name}}</h2>
            <b-card>
              <b-row>
                <b-col style="text-align: left;">
                  <p><b>Version</b> {{current}}</p>
                  <p><b>Last updated</b> {{lastUpdate}}</p>
                  <p><b>Download size</b> {{size}}</p>
                  <p><b>Android version</b> {{android}}</p>
                </b-col>
                <b-col>
                  <b-col style="text-align: right;">
                    <star-rating
                    :rating="rating"
                    :read-only="true"
                    :increment=0.01
                    star-size=25
                    :show-rating="true"
                    rtl="true"
                  ></star-rating>
                    <p><b>Downloaded {{installs}}</b></p>
                    <p>Rated for {{rated}}</p>
                    <p>
                      <b class="text-success">{{price}}</b>
                    </p>
                    <b-button href="#" variant="success">Install</b-button>
                  </b-col>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr class="my-4">
        <b-row>
          <b-col>
            <img src="../assets/app-preview-1.gif" style="width: 180px">
          </b-col>
          <b-col>
            <img src="../assets/app-preview-2.jpg" style="width: 180px">
          </b-col>
          <b-col>
            <img src="../assets/app-preview-3.jpg" style="width: 180px">
          </b-col>
          <b-col>
            <img src="../assets/app-preview-4.jpg" style="width: 180px">
          </b-col>
        </b-row>
        <hr class="my-4">
        <h4 style="text-align: left;">Reviews</h4>
        <div id="Box" :items="reviews" v-for="(review) in reviews" v-bind:key="review" v-if="review.translated_Review !== 'nan'">
          <b-card :bg-variant="review.sentiment" text-variant="white" style="text-align: left; margin: 5px;">{{review.translated_Review}}</b-card>
        </div>
      </b-jumbotron>
    </template>
  </div>
</template>

<script>
export default {
    name: 'about',
    props: ['name', 'category', 'genre', 'rated', 'rating', 'size', 'installs', 'price', 'lastUpdate', 'current', 'android'],
    data() {
      var instance = this;
      var xhr = new XMLHttpRequest();
      var title = this.name.replace(/ /g, "%20");
      console.log(title);            
      xhr.open(
        "GET",
        "https://springbootsoa.herokuapp.com/api/app/".concat(title),
        false
      );
      xhr.setRequestHeader(
        "Authorization",
        "Basic " + btoa("myuser" + ":" + "password")
      );
      xhr.send();
      if (xhr.readyState === 4 && xhr.status == 200) {
        var result = JSON.parse(xhr.responseText);
        var reviews = result;
        for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].sentiment === 'Positive') {
          reviews[i].sentiment = "success";
        }
        else if (reviews[i].sentiment === 'Neutral'){
          reviews[i].sentiment = "secondary";
        }
        else if (reviews[i].sentiment === 'Negative'){
          reviews[i].sentiment = "danger";
        }
      }
      }
      return {
          reviews
      }
    }
}
</script>