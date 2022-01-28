import axios from 'axios'

export const state = () => ({
    token: null,
    users: [],
    isAdmin: false,
  })
  
  export const getters = {
    loggedIn(state) {
      return state.token !== null
    },
  }
  
  export const mutations = {
    login(state, token) {
      state.token = token
    },
    logout(state) {
      state.token = null
    },
    deleteUser(state, user) {
      const index = state.users.findIndex(
        (item) => item.id === user
      )
      state.users.splice(index, 1)
    },
  }
  
  export const actions = {
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('https://mangakool-server.herokuapp.com/signup', {
          username: data.username,
          password: data.password,
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout(context) {
      // axios.defaults.headers.common.Authorization = "Bearer " + context.state.token
      if (context.getters.loggedIn) {
        localStorage.removeItem('login')
        context.commit('logout')
      }
    },
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('https://mangakool-server.herokuapp.com/login', {
          username: credentials.username,
          password: credentials.password,
        })
          .then(response => {
            localStorage.setItem('login', response.data)
            context.commit('login', response.data)
            resolve(response)
            
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
        })
    },
    deleteUser(context, user) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('login')
      axios.delete(`https://mangakool-server.herokuapp.com/admin/users/${user}`)
        .then(response => {
          context.commit('deleteUser', response)
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
  