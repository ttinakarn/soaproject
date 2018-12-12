<template>
    <div>
        <b-row>
        <b-col style="text-align: left;">
          <h3>{{ title }}</h3>
        </b-col>
        <b-col style="text-align: right;">
          <b-button v-if="showButton"><router-link :to="link" class="text-white">See More</router-link></b-button>
        </b-col>
      </b-row>
      <div>
        <b-card-group deck>
          <b-card
            :title="appname"
            :sub-title="appcategory"
            img-src="https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/android-512.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 220px; padding: 10px;"
            class="mb-2"
          >
            <b-row>
              <b-col>
                <star-rating
                  :rating="apprating"
                  :read-only="true"
                  :increment="0.01"
                  star-size="15"
                  :show-rating="false"
                ></star-rating>
              </b-col>
              <b-col>
                <b class="text-success">{{price}}</b>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
      </div>
    </div>
</template>

<script>
export default {
  props:['title', 'link', 'appname', 'appcategory', 'apprating', 'price', 'showButton']
}
</script>
