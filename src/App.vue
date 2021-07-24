<template>
  <v-app>
    <v-main style="padding: 0; margin: 0">
      <Header />
      <router-view />
    </v-main>
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
</style>