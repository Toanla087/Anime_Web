<template>
    <div class="mangas-spe">
      <div class="container" v-for="(manga, index) in mangas" :key="index">
        <div class="row">
          <div class="col">
            <h1>Mangas {{$route.params.id}} here</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img :src="`${ manga.cover}`" alt="">
          </div>
          <div class="col-8">
            <h2>{{manga.manga_name}}</h2>
            <p>Genres: <span v-for="(genre, index) in genres" :key="index">{{genre.gen_name}}, </span></p>
            <p>Author: <span>{{manga.author}}</span></p>
            <p>{{manga.rating}}</p>
            <p>Description: <span>{{manga.description}}</span></p>
            <b-button>Subscrible</b-button>
            <p>Rate this manga</p>
          </div>
        </div>
        <div class="row" v-for="(chapter, index) in chapters" :key="index">
          <div class="col">
            {{chapter.chap_name}}
            {{chapter.time_up}}
            <b-button :to="`${manga.manga_id}/${chapter.chap_id}`">read</b-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  layout: 'home',
  data() {
    return {
      mangas: [],
      genres: [],
      chapters: [],
    }
  },
  async asyncData(context) {
    try {
      const response = await axios
        .get(`https://mangakool-server.herokuapp.com/mangas/${context.params.id}`);
      const ans = await axios
        .get(`https://mangakool-server.herokuapp.com/mangas/${context.params.id}/genres`);
      const res = await axios
        .get(`https://mangakool-server.herokuapp.com/mangas/${context.params.id}/chapters`);
      return {
        mangas: response.data,
        chapters: res.data,
        genres: ans.data
      };
    } catch(e) {
      context.error(e);
    }
  },
  // mounted() {
  //   axios.get('https://mangakool-server.herokuapp.com/mangas/:id').then(response => {
  //     this.mangas = response.data
  //   });
  // }
}
</script>

<style scoped>
  .mangas-spe {
    margin-top: 55px;
  }
</style>