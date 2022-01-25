<template>
    <div class="register">
        <div class="container">
            <div class="row my-3">
                <div class="col">
                    <h1 class=" font-weight-bold">Đăng ký tài khoản</h1>
                </div>
            </div>
            <div class="row my-3">
                <div class="col">
                    <p class="d-inline">Already have an account? </p>
                    <nuxt-link to="/login" class="nav-link btn-log d-inline">ĐĂNG NHẬP</nuxt-link>
                </div>
            </div>
            <div class="row text-left mb-5 justify-content-center">
                <div class="col-md-6 col-sm-12 bg-light">
                    <b-form class="row py-5 px-3" @submit.prevent="onSubmit">
                        <b-form-group id="input-group-2" label="Username" label-for="input-2" class="col-12">
                            <b-form-input
                            id="input-2"
                            v-model="form.name"
                            placeholder="Please enter your name"
                            required
                            ></b-form-input>
                        </b-form-group>


                        <b-form-group id="input-group-1" label="Password" label-for="input-1" class="col-12">
                            <b-form-input
                            id="input-1"
                            v-model="form.pass"
                            type="password"
                            placeholder="Please enter your password"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-button type="submit" block variant="info" class="px-0 mx-3">Đăng ký</b-button>
                    </b-form>
                </div>
               
                      
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    layout: 'auth',
    data() {
      return {
        form: {
          name: '',
          pass: ''
        },
      }
    },
    methods: {
       async onSubmit(event) {
        event.preventDefault()
        // alert(JSON.stringify(this.form))
        // const data = {
            
        // }

        await axios.post('https://mangakool-server.herokuapp.com/signup', {
            username: this.form.name,
            password: this.form.pass,
        })

        this.$router.push('/login')
            
      }
    }
  }
</script>