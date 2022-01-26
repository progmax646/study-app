<template>
<div class="home">
  <div class="container">
    <div class="home__projects">
      <h3>Проекты</h3>
      <div class="home__projects_item">
        <div class="home__projects_item_text">
          <h4>Создай новость</h4>
          <span>New</span>
        </div>
        <div class="home__projects_item_action">
          <button @click="$router.push('/posts')">Войти</button>
        </div>
      </div>
      <div class="home__projects_item">
        <div class="home__projects_item_text">
          <h4>Новый проект</h4>
          <span>Test</span>
        </div>
        <div class="home__projects_item_action">
          <button @click="$router.push('/posts')" disabled>Войти</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
