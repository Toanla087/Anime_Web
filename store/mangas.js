export const state = () => ({
    mangas: [],
  })
  
  export const getters = {
    all(state) {
      return state.mangas
    },
  //   progress(state) {
  //     return state.todoList.filter(function (item) {
  //       return !item.isComplete
  //     })
  //   },
  //   done(state) {
  //     return state.todoList.filter(function (item) {
  //       return item.isComplete
  //     })
  //   },
  }
  
  export const mutations = {
    store(state, data) {
      state.mangas = data
    },
  }
  
  export const actions = {
    getMangas(vuexContext) {
      return this.$axios
        .$get('https://mangakool-server.herokuapp.com/admin/mangas')
        .then((res) => {
          vuexContext.commit('store', res)
        })
    },
  }
  