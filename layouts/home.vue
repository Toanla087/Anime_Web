<template>
    <div class="root">
        <header class="head-nav">
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
                                    <b-nav-form>
                                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                                    </b-nav-form>
                                    <b-nav-item to="/mangas">Mangas</b-nav-item>
                                    
                                    <b-nav-item v-b-toggle.sidebar-1>Gernes</b-nav-item>
                                    <b-sidebar id="sidebar-1" title="Gernes" shadow>
                                        <div class="row justify-content-center">
                                            <div class="col-5 px-3 py-2"  v-for="(genre, index) in genres" :key="index">
                                                <b-link>{{ genre.gen_name }}</b-link>  
                                            </div>
                                        </div>
                                    </b-sidebar>

                                    <b-nav-item to="/subscribed">Subscribed</b-nav-item>
                                    <b-nav-item to="/admin">Admin</b-nav-item>
                                    <b-nav-item to="/account">Account</b-nav-item>
                                </b-navbar-nav>

                                <b-navbar-nav class="ml-auto">
                                    <nuxt-link to="/login" class="nav-link btn-log">ĐĂNG NHẬP</nuxt-link>
                                    <nuxt-link to="/register" type="button" class="btn btn-regis nav-link">ĐĂNG KÝ</nuxt-link>
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

    .head-nav {
        position: fixed;
        z-index: 9999;
        background: #FFF;
        left: 0;
        right: 0;
        top: 0;
        height: 60px;
    }

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