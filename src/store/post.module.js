export default {
  namespaced: true,
  state () {
    return {
      url: 'https://jsonplaceholder.typicode.com/posts',
      posts: [],
      loader: false,
      message: ''
    }
  },
  mutations: {

  },
  actions: {
    async getPosts ({ state }) {
      state.loader = true
      state.posts = []
      setTimeout(async () => {
        try {
          await fetch(state.url, {
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          })
            .then(data => {
              return data.json()
            })
            .then(data => {
              const res = data.filter((item, idx) => idx < 10)
              state.posts = res
            })
          state.loader = false
        } catch (e) {
          state.loader = false
          alert(e)
        }
      }, 1500)
    },
    async savePost ({ state }, data) {
      state.loader = true
      try {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((response) => response.json())
          .then((json) =>
            state.posts.unshift(json)
          )
        console.log(state.posts)
        state.loader = false
      } catch (e) {
        state.loader = false
        alert(e)
      }
    },
    async deletePost ({ state }, id) {
      state.loader = true
      try {
        await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
          method: 'DELETE'
        })
          .then(data => {
            return data.json()
          })
          .then(data => {
            const res = state.posts.filter(item => item.id !== parseInt(id))
            state.posts = res
            console.log(res)
          })
        state.loader = false
      } catch (e) {
        state.loader = false
        alert(e)
      }
    },
    async updatePost ({ state }, data) {
      console.log(data)
      try {
        await fetch('https://jsonplaceholder.typicode.com/posts/' + data.id, {
          method: 'PUT',
          body: JSON.stringify({ data }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then((response) => response.json())
          .then((json) => {
            state.posts.forEach((item, idx) => {
              if (item.id === parseInt(json.data.id)) {
                item.title = json.data.title
                item.body = json.data.body
              }
            })
            console.log(state.posts)
          })
        state.message = 'Успешно изменено'
        setTimeout(() => {
          state.message = ''
        }, 1000)
      } catch (e) {
        alert(e)
      }
    }
  },
  getters: {

  }
}
