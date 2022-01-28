<template>
    <div class="users">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>This is Admin page</h1>
                </div>
            </div>
            <div class="row" v-for="(manga, index) in mangas" :key="index">
                <div class="col">
                    {{manga.manga_name}}
                    {{manga.manga_id}}
                    {{manga.num_of_chap}}
                    <b-button>Edit</b-button>
                    <b-button>Delete</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'home',
    data() {
        return {
            mangas: [],
        }
    },
    // mounted() {
    //     axios.get('https://mangakool-server.herokuapp.com/admin/users').then(response => {
    //     this.users = response.data
    //     });
    // },
    async asyncData(context) {
        try {

            const response= await axios.get('https://mangakool-server.herokuapp.com/admin/mangas', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('login')
                }
            });
            return {
                // .then(response => {
                    mangas: response.data
                //   });
            };
        } catch(e) {
            context.error(e);
        }
    }, 
}
</script>

<style scoped>
  .users {
    margin-top: 55px;
  }
</style>


