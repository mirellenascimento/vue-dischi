const mySpotify = new Vue({
  el: '#root',
  data: {
    albums: [],
    filteredAlbuns: [],

  },
  mounted(){
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(gotAlbums => {
      this.albums = gotAlbums.data.response;
      console.log(gotAlbums.data.response);
      console.log(this.albums);
    });
  }

});
