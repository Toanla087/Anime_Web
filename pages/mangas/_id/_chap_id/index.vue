<template>
  <div class="chapters-spe">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Mangas {{$route.params.chap_id}} here</h1>
        </div>
      </div>
      <div class="row" v-for="(chapter, index) in chapters" :key="index">
        <div class="col">
          <h1>{{chapter.chap_name}}</h1>
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
      chapters: [],
    }
  },
  async asyncData(context) {
    try {
      const res = await axios
        .get(`https://mangakool-server.herokuapp.com/mangas/${context.params.id}/chapters/${context.params.chap_id}`);
      return {
        chapters: res.data
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
  .chapters-spe {
    margin-top: 55px;
  }
</style>