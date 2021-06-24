import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      isLoggedIn: false,
      access_token: 'BQAOayjoezhJPYoLC3m9YL2YNt6v6b7rfufcWldVnf45qTa423rxFM1SAn1g6avAzZ4uf9xGfUAUScGDehgU6jGCV5jFzhtLbwiTwYmsA1jqHwKm1OIRMmqQXywck3n9x_T7noXad6xlX38apS2nG9yjIji4s0Q',
      access_token_albums: 'BQAIWsuiqKt9yBX7qaBTVtG_IaUvGGPYy3KORBcj4nGjoJzIIKBQV4KGD5kuZ4V8rlMiMQAPuxsQgmhzVOLo5v_fEnejUlH1fLKba3PWqM-bDhhkczk6biTc209p-WY7brRIt6_fobSYME80YFARYjrI-bQvQMs',
      searchResults: [],
      albumResults: []
  },
  mutations: {
      setSearchResults (state, data) {
          state.searchResults = data
      },
      setAlbumResults (state, data) {
          state.albumResults = data
      }
  },
  actions: {
      Search ({commit, getters}, q){
          axios.get('https://api.spotify.com/v1/search', {
              headers: {
                  'Authorization': 'Bearer ' + getters.getAccessToken
              },
              params: {
                  'q': q,
                  'type': 'artist'
              }
          }).then((response) => {
              commit('setSearchResults', response.data.artists.items);
              console.log(response.data.artists.items)
          }).catch((err) => {
              console.log(err)
          })
      },
      FetchAlbums ({commit, getters}, id){
          axios.get('https://api.spotify.com/v1/artists/' + id + '/albums', {
              headers: {
                  'Authorization': 'Bearer ' + getters.getAccessTokenAlbums
              },
          }).then((response) => {
              commit('setAlbumResults', response.data.items);
              console.log(response.data.items)
          }).catch((err) => {
              console.log(err)
          })
      }
  },
  modules: {},
    getters: {
        getIsLogged (state) {
            return state.isLoggedIn
        },
        getAccessToken (state) {
            return state.access_token
        },
        getAccessTokenAlbums (state) {
            return state.access_token_albums
        },
        getSearchResults (state) {
            return state.searchResults
        },
        getAlbums (state) {
            return state.albumResults
        }
    }
})
