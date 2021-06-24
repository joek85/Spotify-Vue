<template>
  <v-card class="mx-auto my-4"
          max-width="250">

    <template slot="progress">
      <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
      ></v-progress-linear>
    </template>
    <router-link :to="{name: 'Albums', params: {id: id} }">
      <v-img height="175"
             :src="imgUrl"
      ></v-img>
    </router-link>


    <v-card-title class="pb-0">{{title}}</v-card-title>

    <v-card-text>
      <div class=" text-subtitle-1 grey--text">
        {{followers}} Followers
      </div>
    </v-card-text>

    <v-card-text>
      <v-rating
              :value="rating"
              color="secondary"
              dense
              half-increments
              readonly
              size="18"
      ></v-rating>
    </v-card-text>

  </v-card>
</template>

<script>
  export default {
      props: ['title', 'followers', 'rating', 'imgUrl', 'id'],
   data() {
       return {

       }
   }
  }
</script>
