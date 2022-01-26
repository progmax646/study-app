<template>
  <router-view/>
</template>

<style lang="scss">
@import './assets/scss/style.scss';
html {
  background-color: #F4F5F6;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
#app {
  font-family: 'Lato', sans-serif;
  font-size: 14px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
