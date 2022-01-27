<template>
<div class="home">
  <div class="contaner">
    <div class="home__update">
      <h4>Редактирование поста</h4>
      <input type="text" v-model="post.title">
      <textarea name="" id="" cols="30" rows="10" v-model="post.body"></textarea>
      <div class="notification" v-if="message.length > 0">
        {{ message }}
      </div>
      <div class="home__update_action">
        <button @click="updatePost()">Изменить</button>
        <button @click="$router.push('/posts')">Назад</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PostUpdate',
  data () {
    return {
      post: {
        id: this.$route.params.id,
        title: '',
        body: '',
        userId: 1
      }
    }
  },
  methods: {
    async updatePost () {
      await this.$store.dispatch('post/updatePost', this.post)
    }
  },
  computed: {
    ...mapState('post', ['posts', 'message'])
  },
  created () {
    const res = this.posts.filter(item => item.id === parseInt(this.$route.params.id))
    this.post.title = res[0].title
    this.post.body = res[0].body
  }
}
</script>

<style scoped>

</style>
