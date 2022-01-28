<template>
    <div class="users">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>This is Admin page</h1>
                </div>
            </div>
            <div class="row">
                <div class="col" v-for="(user, index) in users" :key="index">
                    {{user.user_name}}
                    {{user.admin_id}}
                    <b-button @click="removeUser(user.user_id)">Delete</b-button>
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
            users: [],
        }
    },
    // mounted() {
    //     axios.get('https://mangakool-server.herokuapp.com/admin/users').then(response => {
    //     this.users = response.data
    //     });
    // },
    async asyncData(context) {
        try {

            const response= await axios.get('https://mangakool-server.herokuapp.com/admin/users', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('login')
                }
            });
            return {
                // .then(response => {
                    users: response.data
                //   });
            };
        } catch(e) {
            context.error(e);
        }
    },
    methods: {
        removeUser(id) {
            this.$store.dispatch('auth/deleteUser', id)
        },
    }

}
</script>

<style scoped>
  .users {
    margin-top: 55px;
  }
</style>


