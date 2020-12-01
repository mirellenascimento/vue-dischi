const mySpotify = new Vue({
  el: '#root',
  data: {
    albums: [],
    filteredAlbums: [],
    selectedGenre: 'all',
  },
  methods:{

    //Filters albums by genre at user's input
    selectGenre(event){
      this.selectedGenre = event.target.value;
      if (this.selectedGenre === 'all'){
        this.filteredAlbums = [...this.albums];
      } else {
        this.filteredAlbums = this.albums.filter(album => album.genre.toLowerCase() === this.selectedGenre.toLowerCase());
      }
    },
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
});
