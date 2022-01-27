<template>
  <div class="home">
    <div class="container">
      <Modal
      :isVisiable="isModal"
      @close="close"
      />
      <BackBtn/>
      <div class="home__header">
        <div class="home__header_text">
          <h4>Создай публикацию</h4>
          <p>для Arvis Group</p>
        </div>
        <div class="home__header_search">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Поиск статей" v-model="searchInput">
        </div>
      </div>
      <div class="home__action">
        <button @click="getModal()">Создать</button>
        <button @click="getPostServer()">Облако</button>
      </div>
      <div class="home__posts" v-if="!loader">
        <div class="home__posts_item" v-for="post in getPosts" :key="post.id">
          <div class="home__posts_item_text">
            <h4>{{ getShortText(post.title, 10, '...') }}</h4>
            <p>{{ getShortText(post.body, 100, '...') }}</p>
          </div>
          <div class="home__posts_item_img">
            <img src="@/assets/img/test.jpg" alt="">
          </div>
          <div class="home__posts_item_service">
            <button type="button" @click="$router.push('/post/update/'+post.id)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button type="button" @click="$router.push('/post/'+post.id)"><i class="fa fa-eye" aria-hidden="true"></i></button>
            <button type="button" @click="sendDel(post.id)"><i class="fa fa-trash" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
      <div class="home__loader" v-if="loader">
        <Loader
        :marginT="130"
        />
      </div>
      <div class="home__not-found" v-if="getPosts.length === 0 && !loader">
        <img src="@/assets/img/not-found.png" alt="" width="150">
        <h4>Данные не найдены</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../components/Loader.vue'
import Modal from '../components/Modal.vue'
import BackBtn from '../components/BackBtn.vue'

export default {
  name: 'Home',
  data () {
    return {
      searchInput: '',
      isModal: false
    }
  },
  computed: {
    ...mapState('post', ['posts', 'loader']),
    getPosts () {
      // поиск
      if (this.searchInput.length > 2) {
        const res = this.posts.filter(item => item.title.toLowerCase().includes(this.searchInput.toLowerCase()))
        return res
      }
      if (this.posts.length > 0) {
        return this.posts
      }
      // проверка заполнен ли массив
      // if (this.posts.length > 1) {
      //   const res = this.posts.filter((item, idx) => idx < 5)
      //   return res
      // }
      return ''
    }
  },
  methods: {
    getShortText (str, max, add) {
      add = add || '...'
      return (typeof str === 'string' && str.length > max ? str.substring(0, max) + add : str)
    },
    getModal () {
      this.isModal = true
    },
    close () {
      this.isModal = false
    },
    async getPostServer () {
      await this.$store.dispatch('post/getPosts')
    },
    async sendDel (id) {
      await this.$store.dispatch('post/deletePost', id)
    }
  },
  async created () {
    // await this.$store.dispatch('post/getPosts')
  },
  components: {
    Loader,
    Modal,
    BackBtn
  }
}
</script>
