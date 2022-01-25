<template>
    <div class="root">
        <header class="head-home">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <b-navbar type="light" variant="transparent">
                                <b-navbar-brand class="header-nav">
                                    <nuxt-link to="/">
                                        <img src="~/assets/logo-grey.png" alt="Mangakool" class="img-header">
                                    </nuxt-link>
                                </b-navbar-brand>
                                <b-navbar-nav>
                                    <b-nav-item to="/mangas">Mangas</b-nav-item>
                                    
                                    <b-nav-item v-b-toggle.sidebar-1>Gernes</b-nav-item>
                                    <b-sidebar id="sidebar-1" title="Gernes" shadow>
                                        <div class="row justify-content-center">
                                            <div class="col-5 px-3 py-2"  v-for="(genre, index) in genres" :key="index">
                                                <b-link>{{ genre.gen_name }}</b-link>  
                                            </div>
                                        </div>
                                    </b-sidebar>
                                </b-navbar-nav>
                            </b-navbar>
                        </div>
                    </div>
                </div>
        </header>
        <Nuxt />
        <footer></footer>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  data() {
    return {
      genres: [],
    }
  },
  mounted() {
    axios.get('https://mangakool-server.herokuapp.com/genres').then(res => {
      this.genres = res.data
    })
  }
}
</script>

<style scoped>
    .root {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #253858;
    }

    /* .head-nav {
        position: fixed;
        z-index: 9999;
        background: #FFF;
        left: 0;
        right: 0;
        top: 0;
        height: 55px;
    } */

    .header-nav {
        width: 200px;
        height: 55px;
    }

    /* .navbar-brand {
        margin: 0;
    } */

    .img-header {
        width: 90%;
        height: 90%;
    }
</style>