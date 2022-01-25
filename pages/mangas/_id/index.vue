<template>
    <div class="mangas-spe">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Mangas {{$route.params.id}} here</h1>
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
    }
  },
  mounted() {
    axios.get('https://mangakool-server.herokuapp.com/mangas/:id').then(response => {
      this.mangas = response.data
    });
  }
}
</script>

<style scoped>
  .mangas-spe {
    margin-top: 55px;
  }
</style>