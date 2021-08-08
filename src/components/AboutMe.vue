<template>
  <div class="container">
    <div class="left">
      <img class="my-image" :src="require('../assets/Justin_Photo.jpeg')" />
      <div
        style="display: flex; flex-direction: row; align-items: center"
        class="social-container"
      >
        <span class="name">Justin Min Gi Cho</span>
        <div>
          <a href="https://github.com/justinmcho" target="_blank">
            <img
              :src="require('../assets/github-logo-white.png')"
              alt="Github Logo"
              class="social-icon"
            />
          </a>
          <a href="https://www.instagram.com/justinmcho/" target="_blank">
            <img
              :src="require('../assets/instagram-logo.png')"
              alt="Github Logo"
              class="social-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/justinmcho/" target="_blank">
            <img
              :src="require('../assets/linkedin-logo.png')"
              alt="Github Logo"
              class="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="right">
      <img
        class="logo-background-image"
        :src="require('../assets/logo.png')"
        alt="JMC Logo"
      />
      <div class="title-description">
        I'm an <span style="color: #aed9e0">engineer </span>studying
        <span style="color: #aed9e0">management</span>
      </div>
      <div class="description">
        I’ve always had a fascination for building new ideas. I am a junior
        studying computer science and economics at UC Berkeley. Right now, I am
        taking a gap year(s) in Korea to take on internships from various
        industries and to serve in the Korean military.
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AboutMe",
  components: {},
};
</script>

<style scoped>
.container {
  color: white;
  display: flex;
  flex-direction: row;
  flex: 1;
}
.left {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-image {
  width: max(9.5rem, 50%);
  /* width: 32.5rem max */
  border-radius: 10px;
  margin-bottom: 2vh;
}
.name {
  font-size: max(0.75rem, 1.75vw);
  /* width: 1.75rem max */
}
.social-icon {
  margin: min(5px, 0.5vw);
  height: clamp(0.75rem, 3vw, 3rem);
  width: clamp(0.75rem, 3vw, 3rem);
}
.right {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.title-description {
  font-size: max(1.5rem, 3.5vw);
  padding-bottom: 5vw;
  z-index: 1;
}
.description {
  font-size: max(0.75rem, 2.1vw);
  z-index: 1;
}
.logo-background-image {
  position: absolute;
  left: 45vw;
  opacity: 0.4;
  height: clamp(10rem, 50vw, 60rem);
  width: clamp(10rem, 50vw, 60rem);
}

@media only screen and (max-width: 700px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .left {
    width: 100%;
  }
  .my-image {
    margin-top: 50px;
    width: max(9.5rem, 70%);
  }
  .name {
    font-size: max(1.25rem, 2vw);
  }
  .social-container {
    margin-bottom: 45px;
  }
  .social-icon {
    margin-left: min(30px, 1.5vw);
    margin-right: min(30px, 1.5vw);
    height: clamp(2rem, 4vw, 3rem);
    width: clamp(2rem, 4vw, 3rem);
  }
  .right {
    width: 90%;
    margin-bottom: 50px;
  }
  .title-description {
    /* font-size: max(2.5rem, 7vw); */
    font-size: min(2.25rem, 8vw);
    padding-bottom: 8vw;
    z-index: 1;
  }
  .description {
    font-size: min(1.25rem, 4.75vw);
  }
  .logo-background-image {
    position: absolute;
    left: 0;
    opacity: 0.4;
    height: 100vw;
    width: 100vw;
  }
}
</style>
