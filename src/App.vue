<template>
  <v-app style="">
    <v-main style="padding: 0; margin: 0">
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import AOS from "aos";

export default {
  name: "App",
  components: {
    Header,
  },
  created() {
    AOS.init();
  },
};
</script>

<style scoped>
.v-layout {
  overflow: unset;
}
</style>