<template>
  <div>
    <v-app-bar flat>
      <v-app-bar-title shrink-on-scroll class="nav-title">
        <v-btn to="/" size="large"> JMC </v-btn>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn rounded="lg" href="https://www.linkedin.com/in/justinmcho/"
        >Resume</v-btn
      >
      <v-btn rounded="0">Linkedin</v-btn>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style>
.nav-title {
  color: #3a7bc6 !important;
  margin-left: 5vw;
}
</style>
