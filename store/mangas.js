import axios from 'axios'

export const state = () => ({
    mangas: [],
    chapters: []
  })
  
  export const getters = {
    
  }
  
  export const mutations = {
    addManga(state, manga) {
      state.mangas.push({
        manga_id: manga.manga_id,
        manga_name: manga.manga_name,
        description: manga.description,
        num_of_chap: 0,
        author: manga.author,
        genre: manga.genre,
        rating: manga.rating,
        cover: manga.cover
      })
    },

    addChapter(state, chapter) {
      state.chapters.push({
        chap_id: chapter.chap_id,
        manga_id: chapter.manga_id,
        chap_name: chapter.chap_name,
        chap_content: chapter.chapter_content,
        time_up: 0
      })
      const index = state.mangas.findIndex(
        (item) => item.id === chapter.manga_id
      )
      state.mangas[index].manga_id = chapter.manga_id
    },
  }
  
  export const actions = {
    addManga(context, data) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('login')
      axios.post('https://mangakool-server.herokuapp.com/mangas', {
        cover: data.cover,
        manga_name: data.manga_name,
        author: data.author,
        description: data.description,
      })
        .then(response => {
          context.commit('addManga', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    addChapter(context, data) {
      const mangaID = data.manga_id
      axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('login')
      axios.post('https://mangakool-server.herokuapp.com/mangas/' + mangaID+ '/chapters', {
        chap_id: data.chap_id,
        manga_id: data.manga_id,
        chap_name: data.chap_name,
        chap_content: data.chapter_content,
      })
        .then(response => {
          context.commit('addManga', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
  