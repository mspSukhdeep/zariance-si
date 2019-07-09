<template>
  <div>
    <div class="container home">
      <div>
        <div class="logo-wrpr">
          <img class="logo" src="https://assets.mspimages.in/zariance/intel/zariance_intel.svg">
        </div>
        <Search/>
        <h2 class="subtitle">Sales Intelligence</h2>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import style from "~/assets/style/index.sass";
import Search from "~/components/Search.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Search,
    Footer
  }
};
</script>

<style>
.home {
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  display: flex;
  text-align: center;
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
  font-size: 24px;
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
.logo
  width: 300px
  &-wrpr
    margin-bottom: 10px
</style>
