<template>
  <v-main>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-btn color="primary" large class="ma-2 white--text" @click="login">
            Login with spotify
            <v-icon large class="fab fa-spotify ml-2"></v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>
<script>

  export default {
      data: () => ({
          AT: ''
      }),
      mounted () {
          this.AT = this.$route.query.access_token;
          if(this.AT) {
              this.$store.dispatch('setAccessToken', this.AT);
              this.$store.dispatch('setIsLogged', true);
              this.$router.push({name: 'Search', params: { }})
          }else {
              this.$store.dispatch('setIsLogged', false);
          }
      },
      computed: {

      },
      methods: {
        login () {
            let params= '?client_id=b9d04c284f1b46b3ad4ddb15f0fe3766' +
                '&response_type=code' +
                '&redirect_uri=http://localhost:3000/callback/' +
                '&scope=user-read-email' +
                '&show_dialog=true';

            window.open('https://accounts.spotify.com/authorize' + params , '_self');
        },
      }
  }
</script>
