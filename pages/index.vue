<template>
  <div class="container home">
    <div>
      <h1 class="title">
        Zariance Intel
      </h1>
      <Search />
      <h2 class="subtitle">
        Zariance Sales Intelligence
      </h2>
    </div>
  </div>
</template>

<script>
import style from '~/assets/style/index.sass'
import Search from '~/components/Search.vue'

export default {
  components: {
    Search
  }
}
</script>

<style>

.home{
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
  text-align: center
}
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 30px;
  margin-top: 30px;
}

.links {
  padding-top: 15px;
}
</style>

<style lang="sass">
body
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
</style>
