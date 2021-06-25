import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      isLoggedIn: false,
      access_token: 'BQBd_LrMkNYzxOyqwVqA1hwwbQwjOpVuthyOL0sTPHXraOs6MDCcK_QmhELOIWCij9ifaNVNkQp7z2bj5OEwKGMaPLzBijgoJB_VLb6_NmqtsWsQtj55ogvtBTujbOPyTQMylbyBzVLJHA5Tz3VDaC-kt0PnfDE',
      access_token_albums: 'BQCOJBkcG1aOn8tQSPQp08xWAzpXVwyZNu-RfIogFo_J3e3WGs6i5eTeVZBCpOY0HnQkyN-DEDy3PiSN6cNyfCoPVsY9gb7GSqKc6nenbtBT-M5tPnZw96SXWUmYhY-wy8djpVmncal04EST32TowArpobxt9Fc',
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
