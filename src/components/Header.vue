<template>
  <div class="header-container">
    <v-app-bar :absolute="false" flat color="transparent">
      <v-app-bar-title shrink-on-scroll class="nav-title">
        <router-link
          :to="{ name: 'Home' }"
          style="text-decoration: none; color: white"
          >JUSTIN MIN GI CHO</router-link
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="nav-buttons" v-show="!mobile">
        <v-btn rounded="lg" class="text-white" @click="scrollToAboutMe"
          >About Me</v-btn
        >
        <v-btn rounded="lg" class="text-white" :to="{ name: 'Experience' }"
          >Experience</v-btn
        >
        <v-btn rounded="lg" class="text-white" :to="{ name: 'Blog' }"
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
      element.scrollIntoView({ behavior: "smooth" });
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
}
.nav-buttons {
  margin-right: 5vw;
}
.v-btn {
  background-color: transparent;
}
</style>
