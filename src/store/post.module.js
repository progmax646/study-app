export default {
  namespaced: true,
  state () {
    return {
      url: 'https://jsonplaceholder.typicode.com/posts',
      posts: [],
      loader: false,
      message: '',
      comments: [
        {
          postId: 1,
          id: 1,
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
        }
      ]
    }
  },
  mutations: {
    nullableComments (state) {
      state.comments = [
        {
          postId: 1,
          id: 1,
          name: 'id labore ex et quam laborum',
          email: 'Eliseo@gardner.biz',
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
        }
      ]
    }
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
            console.log(json)
            // state.posts.forEach((item, idx) => {
            //   if (item.id === parseInt(json.data.id)) {
            //     item.title = json.data.title
            //     item.body = json.data.body
            //   }
            // })
          })
        state.message = 'Успешно изменено'
        setTimeout(() => {
          state.message = ''
        }, 1000)
      } catch (e) {
        alert(e)
      }
    },
    // добавить комменты
    async getComments ({ state }) {
      state.loader = true
      try {
        await fetch('https://jsonplaceholder.typicode.com/comments', {
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
            state.comments = res
            console.log(state.comments)
          })
        state.loader = false
      } catch (e) {
        state.loader = false
        alert(e)
      }
    }
  },
  getters: {

  }
}
