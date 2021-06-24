# SpotifyVue

A VueJs implementation of Spotify api.

This app is made to search for artists and fetch their albums on Spotify.
Two Spotify Api calls where performed from:

[Search Api](https://api.spotify.com/v1/search)

[Albums Api](https://api.spotify.com/v1/artists/{id}/albums)

Both Apis need Authentications which you can get them from those links, simply click on "GET TOKEN" to generate a new Access Token.
Copy it and paste it inside 'store/index.js'

`access_token` for Search

`access_token_albums` for Albums

When search results are fetched, click on the artist image to fetch its albums.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
