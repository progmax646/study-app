<template>
<div class="loader" :style="{ marginTop: marginT + 'px' }">
  <img src="@/assets/img/loading.gif" alt="" width="100">
</div>
</template>

<script>
export default {
  name: 'Loader',
  props: ['marginT']
}
</script>

<style scoped>
  .loader {
    display: flex;
    justify-content: center;
  }
</style>
