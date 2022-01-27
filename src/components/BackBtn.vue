<template>
  <div class="home__back-btn">
    <button @click="$router.push('/'+ (pathBack || ''))"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
  </div>
</template>

<script>
export default {
  name: 'BackBtn',
  props: ['pathBack']
}
</script>

<style lang="scss" scoped>
  .home__back-btn {
    display: flex;
    justify-content: flex-start;
    button {
      background: transparent !important;
      border: none !important;
      cursor: pointer !important;
      transition: .3s !important;
      margin: 0 0 25px 0 !important;
      padding: 0 !important;

      i {
        font-size: 15px !important;
        color: black !important;
      }
    }
    button:hover {
      transition: .3s;
      transform: scale(1.5);
    }
  }
</style>
