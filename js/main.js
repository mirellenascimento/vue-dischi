const mySpotify = new Vue({
  el: '#root',
  data: {
    albums: [],
    selectedGenre: 'all',
  },
  methods:{
  },
  mounted(){
    //Imports data to albums ans filteredAlbums arrays
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(gotAlbums => {
      this.albums = gotAlbums.data.response;
      this.filteredAlbums = [...this.albums];
    });
  },

  computed:{
    //Filters albums by genre at user's input
    filteredAlbums(){
      if (this.selectedGenre === 'all'){
        return this.albums;
      }
      return this.albums.filter(album => album.genre.toLowerCase() === this.selectedGenre.toLowerCase())
    },
  }
});
