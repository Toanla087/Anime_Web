<template>
  <div class="mangas">
      <div class="container">
          <div class="row">
              <div class="col-3 my-5"  v-for="(manga, index) in mangas" :key="index">
                <!-- <ul>
                    <li 
                   
                    > -->
                    <img :src="`${ manga.cover}`" alt="">
                    <b-link :to="`mangas/${manga.manga_id}`">{{ manga.manga_name }}</b-link>    
                    <!-- </li>
                </ul> -->
              </div>
          </div>
          <div class="row justify-content-center overflow-auto">
              <div class="col-5">
                <!-- <div class=""> -->
                    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
                <!-- </div> -->
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
    }
  },
  methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '/mangas' : `/mangas-p${pageNum}`
      }
    },
  mounted() {
    axios.get('https://mangakool-server.herokuapp.com/mangas?page=1').then(response => {
      this.mangas = response.data
    });
  }
}
</script>

<style scoped>
    .mangas {
        margin-top: 55px;
    }
</style>
