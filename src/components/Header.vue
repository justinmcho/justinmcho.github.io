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
        <router-link
          class="header-button"
          id="header-button-home"
          :to="{ name: 'Home' }"
          style="text-decoration: none"
          >Home</router-link
        >
        <button
          @click="scrollToAboutMe"
          class="header-button"
          id="header-button-aboutme"
        >
          About Me
        </button>
        <router-link
          class="header-button"
          id="header-button-experience"
          :to="{ name: 'Experience' }"
          style="text-decoration: none"
          >Experiences</router-link
        >
        <a
          class="header-button"
          id="header-button-blog"
          href="https://blog.naver.com/justinmcho99"
          style="text-decoration: none"
          >Blog</a
        >

        <!-- <v-btn class="text-white" size="small">KOR</v-btn>
        <v-divider vertical></v-divider>
        <v-btn class="text-white" size="small">ENG</v-btn> -->
      </div>
      <v-btn icon @click="toggleDrawerNav" v-show="mobile"
        ><v-icon id="drawerNav" color="black">mdi-menu</v-icon></v-btn
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
              style="
                text-decoration: none;
                color: black;
                display: inline-block;
                width: 100%;
              "
              >Home</router-link
            >
          </button>
        </v-list-item>
        <v-list-item>
          <button
            rounded="lg"
            @click="scrollToAboutMe"
            id="header-button-aboutme"
            style="
              text-decoration: none;
              color: black;
              display: inline-block;
              width: 100%;
            "
          >
            About Me
          </button>
        </v-list-item>
        <v-list-item>
          <button
            @click="toggleDrawerNav"
            style="
              text-decoration: none;
              color: black;
              display: inline-block;
              width: 100%;
            "
          >
            <router-link
              :to="{ name: 'Experience' }"
              style="
                text-decoration: none;
                color: black;
                display: inline-block;
                width: 100%;
              "
              >Experiences</router-link
            >
          </button>
        </v-list-item>
        <v-list-item>
          <button
            @click="toggleDrawerNav"
            style="
              text-decoration: none;
              color: black;
              display: inline-block;
              width: 100%;
            "
          >
            <a
              href="https://blog.naver.com/justinmcho99"
              style="
                text-decoration: none;
                color: black;
                display: inline-block;
                width: 100%;
              "
              >Blog</a
            >
          </button>
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
      if (this.windowWidth <= 850) {
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
  z-index: 5;
  background-color: transparent !important;
}
.logo-title {
  background-color: transparent !important;
}
.nav-title {
  color: white !important;
}
.header-button {
  display: inline-block;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 8px;
  padding-right: 8px;
  transition: 0.5s ease;
  border-radius: 6px;
  font-size: 17.5px;
}
.header-button:hover {
  background-color: rgba(204, 204, 204, 0.2);
}
.v-btn {
  background-color: transparent;
}
.nav-buttons {
  margin-right: 5vw;
}
.nav-link {
  display: flex;
  flex: 1;
}
@media only screen and (min-width: 1050px) {
  .nav-title {
    margin-left: 10vw;
  }
  .nav-buttons {
    margin-right: 10vw;
  }
}
</style>
