<template>
<div class="home">
  <div class="container">
    <div class="home__news">
      <h4>{{ findPost.title }}</h4>
      <img src="@/assets/img/test.jpg" alt="">
      <p>{{ findPost.body }}</p>
      <button class="btn-orange" @click="$router.push('/posts')">Назад</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PostView',
  computed: {
    ...mapState('post', ['posts']),
    findPost () {
      const res = this.posts.filter(item => item.id === parseInt(this.$route.params.id))
      return res[0]
    }
  }
}
</script>

<style scoped>

</style>
