<template>
  <div class="header-container">
    <v-app-bar
      :absolute="false"
      flat
      color="transparent"
      style="pointer-events: none"
    >
      <v-app-bar-title class="nav-title">
        <router-link
          id="header-title"
          :to="{ name: 'Home' }"
          style="text-decoration: none; color: white"
          >JUSTIN MIN GI CHO</router-link
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="nav-buttons" v-show="!mobile">
        <v-btn
          rounded="lg"
          @click="scrollToAboutMe"
          style="color: white"
          id="header-button-aboutme"
          >About Me</v-btn
        >
        <v-btn
          retain-focus-on-click="false"
          rounded="lg"
          style="color: white"
          :to="{ name: 'Experience' }"
          id="header-button-experience"
          >Experience</v-btn
        >
        <v-btn
          rounded="lg"
          style="color: white"
          :to="{ name: 'Blog' }"
          id="header-button-blog"
          >Blog</v-btn
        >
        <!-- <v-btn rounded="lg" href="/resume.pdf" target="_blank">Resume</v-btn> -->

        <!-- <v-btn class="text-white" size="small">KOR</v-btn>
        <v-divider vertical></v-divider>
        <v-btn class="text-white" size="small">ENG</v-btn> -->
      </div>
      <v-btn icon @click="toggleDrawerNav" v-show="mobile"
        ><v-icon color="white">mdi-menu</v-icon></v-btn
      >
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      position="right"
      temporary
      color="transparent"
      elevation="0"
    >
      <v-list nav dense style="background-color: white">
        <v-list-item>
          <v-list-item-title>About Me</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Experience</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Blog</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      mobile: null,
      drawer: null,
      windowWidth: null,
    };
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 815) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
        this.drawer = false;
        return;
      }
    },
    toggleDrawerNav() {
      this.drawer = !this.drawer;
    },
    scrollToAboutMe() {
      var element = document.getElementById("about-me");
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style scoped>
.header-container {
  background-color: transparent !important;
}
.logo-title {
  background-color: transparent !important;
}
.nav-title {
  color: white !important;
  pointer-events: all;
}
.nav-buttons {
  margin-right: 5vw;
  pointer-events: all;
}
.v-btn {
}
.v-btn {
  background-color: transparent;
}
</style>
