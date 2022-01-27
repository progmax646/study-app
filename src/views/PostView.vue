<template>
<div class="home">
  <div class="container">
    <div class="home__news">
      <h4>{{ findPost.title }}</h4>
      <img src="@/assets/img/test.jpg" alt="">
      <p>{{ findPost.body }}</p>
      <button class="btn-orange" @click="$router.push('/posts')">Назад</button>
    </div>
    <div class="home__comments">
      <div class="home__comments_header">
        <h4>Комментарии</h4>
        <button title="Загрузить еще комментарии" @click="getComment()"><i class="fa fa-cloud-download" aria-hidden="true"></i></button>
      </div>
      <div v-if="loader">
        <Loader
        :marginT="25"
        />
      </div>
      <hr style="width: 100%" :style="{display:getDisplayStatus()}">
      <div class="home__comments_item" v-for="comment in getComments" :key="comment.id">
        <div class="home__comments_item_user">
          <h5>{{ comment.email }}</h5>
        </div>
        <div class="home__comments_item_text">
          <p>{{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../components/Loader.vue'

export default {
  name: 'PostView',
  computed: {
    ...mapState('post', ['posts', 'comments', 'loader']),
    findPost () {
      const res = this.posts.filter(item => item.id === parseInt(this.$route.params.id))
      return res[0]
    },
    getComments () {
      if (this.comments.length > 0 && !this.loader) {
        return this.comments
      }
      return 'Отсутсвует'
    }
  },
  methods: {
    async getComment () {
      await this.$store.dispatch('post/getComments')
    },
    getDisplayStatus () {
      if (this.loader) {
        return 'none'
      } else {
        return 'block'
      }
    }
  },
  components: {
    Loader
  },
  created () {
    this.$store.commit('post/nullableComments')
  }
}
</script>

<style scoped>

</style>
