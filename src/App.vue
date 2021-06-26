<template>
  <v-app>
    <v-app-bar v-if="isLogged" color="primary" dark app>
      <v-toolbar-title class="pr-12">
        <router-link to="/" custom v-slot="{ navigate }">
          <span @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer">Spotify Vue</span>
        </router-link>
      </v-toolbar-title>
      <v-form :class="{'xs12': $vuetify.breakpoint.smAndDown}" class="pl-12" @submit="doSearch">
        <v-text-field
                flat
                solo-inverted
                hide-details single-line
                append-icon="mdi-magnify"
                placeholder="Search for an artist..."
                v-model="searchQuery"
        ></v-text-field>
      </v-form>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted () {
      if (!this.isLogged){
          this.$router.push({name: 'Login', params: { }})
      }
  },
  data: () => ({
      searchQuery: '',
      isOpen: false
  }),
  methods: {
      doSearch (event) {
          event.preventDefault();
          this.isOpen = false;
          if (this.searchQuery.length > 0) {
              this.$router.push({path: '/Search', query: { q: this.searchQuery }})
          }
      },
  },
  computed: {
      isLogged () {
          return this.$store.getters.getIsLogged
      }
  }
};
</script>
