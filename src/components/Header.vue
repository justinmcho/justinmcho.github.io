<template>
  <div class="header-container">
    <v-app-bar :absolute="true" flat color="transparent">
      <v-app-bar-title class="nav-title">
        <router-link
          id="header-title"
          :to="{ name: 'Home' }"
          style="text-decoration: none"
          >JUSTIN MIN GI CHO</router-link
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="nav-buttons" v-show="!mobile">
        <!-- <router-link
          id="header-button-home"
          :to="{ name: 'Home' }"
          style="text-decoration: none; color: white"
          >Home</router-link
        > -->
        <v-btn rounded="lg" :to="{ name: 'Home' }" id="header-button-home"
          >Home</v-btn
        >
        <v-btn rounded="lg" @click="scrollToAboutMe" id="header-button-aboutme"
          >About Me</v-btn
        >
        <v-btn
          rounded="lg"
          :to="{ name: 'Experience' }"
          id="header-button-experience"
          >Experience</v-btn
        >
        <!-- <v-btn
          rounded="lg"
          style="color: white"
          :to="{ name: 'Blog' }"
          id="header-button-blog"
          >Blog</v-btn
        > -->

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
      <v-list nav dense style="background-color: white; z-index: 5">
        <v-list-item>
          <button @click="toggleDrawerNav" class="nav-link">
            <router-link
              :to="{ name: 'Home' }"
              style="text-decoration: none; color: black"
              >Home</router-link
            >
          </button>
        </v-list-item>
        <v-list-item>
          <v-list-item-title
            ><button
              rounded="lg"
              @click="scrollToAboutMe"
              id="header-button-aboutme"
            >
              About Me
            </button></v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <button @click="toggleDrawerNav">
              <router-link
                :to="{ name: 'Experience' }"
                style="text-decoration: none; color: black"
                >Experience</router-link
              >
            </button>
          </v-list-item-title>
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
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
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
    scroll2() {
      var element = document.getElementById("about-me");
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    scrollToAboutMe() {
      if (this.mobile) {
        this.toggleDrawerNav();
      }
      var element = document.getElementById("about-me");
      if (this.currentRoute !== "Home") {
        this.$router.push(
          { name: "Home" },
          setTimeout(() => {
            this.scroll2(), 1;
          })
        );
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
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
  position: fixed;
  width: 100%;
  z-index: 1;
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
  background-color: transparent;
}
.v-btn-overlay {
  display: none;
}
.v-navigation-drawer {
  z-index: 5 !important;
}
.nav-link {
  display: flex;
  flex: 1;
}
</style>
