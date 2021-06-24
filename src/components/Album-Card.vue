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

    <v-img height="175"
           :src="imgUrl"
    ></v-img>

    <v-card-title class="pb-0">{{title}}</v-card-title>

    <v-card-text>
      <div class=" text-subtitle-1 grey--text">
        {{followers}}
      </div>
    </v-card-text>

    <v-card-text>
      <div class=" text-subtitle-1 grey--text">
        {{date}}
      </div>
      <div class=" text-subtitle-1 grey--text">
        {{tracks}} Tracks
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="secondary" text>
        Preview on Spotify
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ['title', 'followers', 'date', 'tracks', 'imgUrl'],
 data() {
   return {

   }
 }
}
</script>
