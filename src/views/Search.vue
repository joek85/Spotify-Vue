<template>
    <v-row  class="pa-3">
      <v-col class="pa-1" cols="12" md="3" sm="4" v-for="item in getSearchResults"
             :key="item.id">
        <search-card :title="item.name"
                     :followers="item.followers.total"
                     :rating="getPopularity(item.popularity)"
                     :imgUrl="item.images.length ? item.images[0].url : imgUrl"
                     :id="item.id"
        ></search-card>
      </v-col>
    </v-row>
</template>
<script>
  import SearchCard from '../components/Search-Card.vue'
  export default {
      components: {
          SearchCard
      },
      mounted () {
          this.sQuery = this.$route.query.q;
          window.document.title = this.sQuery;
          this.doSearch(this.sQuery)
      },
      data () {
          return {
              title: 'Spotify',
              followers: 1000,
              rating: 3,
              imgUrl: 'https://picsum.photos/200/300',
              loading: false,
              sQuery: ''
          }
      },
      watch: {
          '$route.query.q': function (searchquery) {
              if (this.sQuery !== searchquery){
                  this.loading = true;
                  this.sQuery = searchquery;
                  console.log(searchquery)
                  window.document.title = this.sQuery;
                  this.doSearch(this.sQuery)
              }
          }
      },
      methods: {
          doSearch (q) {
              this.$store.dispatch('Search', q)
          },
          getPopularity (p) {
              return p / 100 * 5
          }
      },
      computed: {
          getSearchResults () {
              return this.$store.getters.getSearchResults
          },
      }
  }
</script>
