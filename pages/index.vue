<template>
  <div class="home">
    <div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Newest</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-6 my-5"  v-for="(manga, index) in mangas" :key="index">
                <!-- <ul>
                    <li 
                    
                    > -->
                    <img :src="`${ manga.cover}`" alt="">
                    <b-link :to="`mangas/${manga.manga_id}`">{{ manga.manga_name }}</b-link>    
                    <!-- </li>
                </ul> -->
              </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col">
              <h1>Genre</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-4 my-5"  v-for="(genre, index) in genres" :key="index">
                <!-- <ul>
                    <li 
                    
                    > -->
                      {{ genre.gen_name }}
                        <!-- {{ manga.manga_cover}}
                    <b-link :to="`mangas/${manga.manga_id}`">{{ manga.manga_name }}</b-link>     -->
                    <!-- </li>
                </ul> -->
              </div>
          </div>
          <!-- <ul>
            <li 
              v-for="(genre, index) in genres"
              :key="index"
              >
                {{ genre.gen_name }}
            </li>
          </ul> -->
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
      swiperOption: {
        loop: true,
        loopedSlides: 5, 
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    },
  mounted() {
    axios.get('https://mangakool-server.herokuapp.com/mangas?page=1').then(response => {
      this.mangas = response.data
    });
    axios.get('https://mangakool-server.herokuapp.com/genres').then(res => {
      this.genres = res.data
    })
  }
}
</script>

<style scoped>
  .home {
    margin-top: 60px;
  }

  /* .img-slide {
    width: 100%;
    height: 800px;
  } */

  .swiper {
    height: 600px;
  }

  .swiper-slide {
      background-position: center;
      background-size: cover;
  }

  .slide-1 {
    background-image:url('~/assets/kiminonawa.png')
  }

  .slide-2 {
    background-image:url('~/assets/iruma.png')
  }

  .slide-3 {
    background-image:url('~/assets/doraemon.png')
  }
</style>