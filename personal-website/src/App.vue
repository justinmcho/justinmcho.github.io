<template>
  <v-app class="container">
    <div class="container-cover">
      <v-main>
        <Header />
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  background-image: url("./assets/seoul.jpg");
  background-size: cover;
  background-position-y: -10vh;
  background-repeat: no-repeat;
  overflow: hidden;
}
.container-cover {
  display: flex;
  flex: 1;
  background-color: rgb(28, 28, 28, 0.3);
  background-size: cover;
}
</style>