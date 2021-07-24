<template>
  <div class="header-container">
    <v-app-bar :absolute="false" flat color="transparent">
      <v-app-bar-title shrink-on-scroll class="nav-title">
        <router-link to="/" style="text-decoration: none; color: white"
          >JUSTIN CHO</router-link
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="nav-buttons" v-show="!mobile">
        <!-- <v-btn rounded="lg" class="text-white" :to="{ name: 'About' }"
          >About Me</v-btn
        >
        <v-btn rounded="lg" class="text-white" :to="{ name: 'Blog' }"
          >Blog</v-btn
        > -->
        <!-- <v-btn rounded="lg" href="/resume.pdf" target="_blank">Resume</v-btn> -->

        <!-- <v-btn size="small">KOR</v-btn>
        <v-divider vertical></v-divider>
        <v-btn size="small">ENG</v-btn> -->
      </div>
      <v-btn icon @click="toggleDrawerNav" v-show="mobile"
        ><v-icon>mdi-menu</v-icon></v-btn
      >
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      position="right"
      temporary
      priority="1"
    >
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title>About Me</v-list-item-title>
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
      console.log(this.drawer);
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
