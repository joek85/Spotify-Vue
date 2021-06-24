<template>
  <v-main>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-btn color="primary" large class="ma-2 white--text">
            Login with spotify
            <v-icon large class="fab fa-spotify ml-2"></v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>
<script>
//    import userService from '@/services/Users'
  export default {
      data: () => ({
        username: '',
          password: '',
          valid: true,
          usernameRules: [
              v => !!v || 'Username is required'
          ],
          passwordRules: [
              v => !!v || 'Password is required'
          ],
      }),
      mounted () {

      },
      computed: {

      },
      methods: {
          validateform () {
              if (this.$refs.form.validate()){
                  //this.login()
              }
          },
          login () {
//              let self = this;
//              userService.login(this.username, this.password).then(function (res) {
//                  if(res.data.AT) {
//                      self.$store.dispatch('commitAccessToken', res.data.AT);
//                      self.$store.dispatch('commitLoggedIn', true);
//                      self.$store.dispatch('commitUsername', self.username);
//                      self.$router.push({name: 'Home', params: { }});
//                  }else{
//                      self.$store.dispatch('commitLoggedIn', false);
//                      self.$store.dispatch('commitUsername', '');
//                  }
//              }).catch(function (err) {
//                  self.$store.dispatch('commitLoggedIn', false);
//                  self.$store.dispatch('commitUsername', '');
//                  console.log(err)
//              })
          },
      }
  }
</script>
