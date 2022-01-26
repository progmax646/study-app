<template>
  <div class="modal-post" v-if="isVisiable">
    <form action="" @submit.prevent="getForm" style="display: flex;">
      <div class="modal-post__body">
        <img src="@/assets/img/CloseSquare.png" alt="" width="14" id="close_btn" @click="$emit('close', false)">
        <div class="modal-post__text">
          <div class="modal-post__text_item">
            <h5 for="" style="text-align: center; margin-bottom: 25px; margin-right: 21px;">Создать публикацию</h5>
            <input type="text" placeholder="Заголовок твоей статьи" v-model="post.title" required>
            <textarea placeholder="Содержание статьи" v-model="post.body"></textarea>
          </div>
        </div>
        <div class="modal-post__btn">
          <button @click="$emit('close', false)">Нет</button>
          <button class="btn-orange" type="submit">Сохранить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['isVisiable'],
  data () {
    return {
      post: {
        title: '',
        body: '',
        userId: 1
      }
    }
  },
  methods: {
    async getForm () {
      await this.$store.dispatch('post/savePost', this.post)
    }
  },
  computed: {
    ...mapState('post', ['message'])
  }
}
</script>
