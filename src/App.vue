<template>
  <div
    id="app"
    class="container"
  >
    <div
      class="alert alert-primary"
      role="alert"
    >
     <i class="bi bi-alarm"></i>
     A simple primary alert—check it out!
    </div>

    <Head></Head>
    <Menu></Menu>
    <router-view></router-view>
    <Footer></Footer>
    <!-- <Head></Head> -->
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    Head,
    Footer,
    Menu,
    // HelloWorld
  },
};
</script>

<style>
.my-border {
  border: 1px dashed black;
  padding: 0 10px;
}

.container {
  max-width: 400px;
  margin: 20px auto;
}
</style>
