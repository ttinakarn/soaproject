<template>
  <div>
    <div>
        <b-card
            img-src="https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/android-512.png"
            img-alt="Image"
            img-top
            tag="article"
            style="width: 198px; font-size: 14px;"
            class="mb-2 text-dark"
          >
          <p><b style="font-size: 20px;" class="block-ellipsis">{{appname}}</b></p>
          <p style="font-size: 16px;">{{appcategory}}</p>
            <b-row>
              <b-col>
                <star-rating
                  :rating="apprating"
                  :read-only="true"
                  star-size=15
                  :show-rating="false"
                ></star-rating>
              </b-col>
              <b-col>
                <b class="text-success" style="font-size: 16px;">{{price}}</b>
              </b-col>
            </b-row>
        </b-card>
    </div>
  </div>
</template>

<style>
.block-ellipsis {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 60px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<script>
export default {
  props: ["appname", "appcategory", "apprating", "price"]
};
</script>