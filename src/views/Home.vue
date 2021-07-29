<template>
  <div class="container">
    <div class="home-container">
      <div class="container-cover">
        <HomeDescription id="top" v-if="developerMode"></HomeDescription>
        <Developer v-else>></Developer>
      </div>
    </div>
    <div id="about-me" class="about-me-container">
      <AboutMe></AboutMe>
    </div>
    <div class="about-me-2-container">
      <AboutMe2></AboutMe2>
    </div>
    <Footer />
  </div>
</template>

<script>
import HomeDescription from "../components/HomeDescription.vue";
import Developer from "../components/Develop.vue";
import AboutMe from "../components/AboutMe.vue";
import AboutMe2 from "../components/AboutMe2.vue";

import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: { HomeDescription, Developer, AboutMe, AboutMe2, Footer },
  data() {
    return { developerMode: true };
  },
  methods: {
    checkClass() {},
  },
  mounted() {
    document.getElementById("header-title").style.color = "white";
    document.getElementById("header-button-aboutme").style.display = null;
    document.getElementById("header-button-experience").style.color = "white";
    document.getElementById("header-button-blog").style.color = "white";
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
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.about-me-container {
  background-color: black;
  height: 100%;
  width: 100%;
  color: white;
}
.about-me-2-container {
  background-color: #ad9a83;
  height: 100%;
  width: 100%;
  color: white;
}
</style>
