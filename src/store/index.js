import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      isLoggedIn: false,
      access_token: '',
      searchResults: [],
      albumResults: []
  },
  mutations: {
      setSearchResults (state, data) {
          state.searchResults = data
      },
      setAlbumResults (state, data) {
          state.albumResults = data
      },
      setAccessToken (state, data) {
          state.access_token = data
      },
      setIsLogged (state, data) {
          state.isLoggedIn = data
      }
  },
  actions: {
      setIsLogged ({commit}, Logged) {
        commit('setIsLogged', Logged)
      },
      setAccessToken ({commit}, AT) {
          commit('setAccessToken', AT)
      },
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
                  'Authorization': 'Bearer ' + getters.getAccessToken
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
        getSearchResults (state) {
            return state.searchResults
        },
        getAlbums (state) {
            return state.albumResults
        }
    }
})
