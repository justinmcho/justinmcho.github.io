<template>
  <div class="container">
    <div class="home-container">
      <div class="container-cover">
        <HomeDescription id="top"></HomeDescription>
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
    document.getElementById("header-button-home").style.color = "#AED9E0";
    document.getElementById("header-button-aboutme").style.color = "white";
    document.getElementById("header-button-experience").style.color = "white";
    var drawerNavElement = document.querySelector("#drawerNav");
    if (drawerNavElement.classList.contains("text-black")) {
      drawerNav.classList.remove("text-black");
      drawerNav.classList.add("text-white");
    }
    // document.getElementById("header-button-blog").style.color = "white";
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.home-container {
  display: flex;
  flex: 1;
  background-image: url("../assets/seoul.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
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
  display: flex;
  align-items: center;
  height: 55vw;
  width: 100%;
  color: white;
}
.about-me-2-container {
  background-color: #25232c;
  display: flex;
  flex: 1;
  height: 55vw;
  width: 100%;
  overflow: hidden;
  color: white;
}

@media only screen and (max-width: 700px) {
  .about-me-container {
    height: fit-content;
  }
  .about-me-2-container {
    height: fit-content;
  }
}
</style>
