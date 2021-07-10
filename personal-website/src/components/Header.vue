<template>
  <div>
    <v-app-bar flat>
      <v-app-bar-title shrink-on-scroll class="nav-title">
        <v-btn
          :to="{ name: 'Home' }"
          size="large"
          style="text-decoration: none; color: black"
        >
          justin-mingi-cho.com
        </v-btn>
        <!-- <router-link to="/" style="text-decoration: none; color: black"
          >JUSTIN-MINGI-CHO</router-link
        > -->
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="nav-buttons" v-show="!mobile">
        <v-btn rounded="lg" :to="{ name: 'About' }">About</v-btn>
        <v-btn rounded="lg" :to="{ name: 'Blog' }">Blog</v-btn>
        <v-btn rounded="lg" href="/resume.pdf" target="_blank">Resume</v-btn>
        <v-btn
          rounded="lg"
          href="https://www.linkedin.com/in/justinmcho/"
          target="_blank"
          >Linkedin</v-btn
        >
        <!-- <v-btn rounded="lg">{{ $vuetify.lang.t("$vuetify.message") }}</v-btn> -->

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
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
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

<style>
.logo-title {
  background-color: transparent !important;
}
.nav-title {
  color: black !important;
  margin-left: 5vw;
}
.nav-buttons {
  margin-right: 5vw;
}
.v-btn {
  background-color: transparent;
}
</style>
