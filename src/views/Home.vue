<template>
  <div class="container">
    <div class="home-container">
      <div class="container-cover">
        <HomeDescription v-if="developerMode"></HomeDescription>
        <Developer v-else>></Developer>
      </div>
    </div>
    <div class="about-me-container">
      <AboutMe></AboutMe>
    </div>
  </div>
</template>

<script>
import HomeDescription from "../components/HomeDescription.vue";
import Developer from "../components/Develop.vue";
import AboutMe from "../components/AboutMe.vue";
export default {
  name: "Home",
  components: { HomeDescription, Developer, AboutMe },
  data() {
    return { developerMode: true };
  },
  methods: {
    checkClass() {},
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
}
.home-container {
  display: flex;
  flex: 1;
  background-image: url("../assets/seoul.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
.container-cover {
  display: flex;
  flex: 1;
  background-color: rgb(28, 28, 28, 0.2);
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  overflow: hidden;
}
.about-me-container {
  background-color: black;
  height: 100vh;
  width: 100vw;
  color: white;
}
</style>
