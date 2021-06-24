<template>
    <v-row justify="space-between" class="pa-3">
      <v-col class="pa-1" cols="12" md="3" sm="4" v-for="item in getAlbums"
             :key="item.id">
        <album-card :title="item.name"
                    :followers="item.artists[0].name"
                    :date="item.release_date"
                    :tracks="item.total_tracks"
                    :imgUrl="item.images.length ? item.images[0].url : imgUrl"
        ></album-card>
      </v-col>
    </v-row>
</template>
<script>
  import AlbumCard from '../components/Album-Card.vue'
  export default {
      components: {
          AlbumCard
      },
      data () {
          return {
              title: 'Spotify',
              followers: 1000,
              rating: 3,
              date: '2021-06-23',
              tracks: 30,
              imgUrl: 'https://picsum.photos/200/300'
          }
      },
      mounted () {
          this.fetchAlbums(this.$route.params.id);
      },
      methods: {
          fetchAlbums (id) {
              this.$store.dispatch('FetchAlbums', id)
          }
      },
      computed: {
          getAlbums () {
              return this.$store.getters.getAlbums
          }
      }
  }
</script>
