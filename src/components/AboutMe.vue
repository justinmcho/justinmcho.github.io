<template>
  <div class="container">
    <div class="left">
      <img class="my-image" :src="require('../assets/Justin_Photo.jpeg')" />
      <div style="display: flex; flex-direction: row; align-items: center">
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
        I’ve always had a fascination for building new ideas. I am currently
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
  height: 100%;
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
  width: min(60%, 280px);
  border-radius: 10px;
  margin-bottom: 2vh;
}
.name {
  font-size: max(10px, 2vw);
}
.social-icon {
  margin: 1vw;
  height: 3.5vw;
  width: 3.5vw;
  /* height: 30px; */
  /* width: 30px; */
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
  font-size: clamp(1.5rem, 4vw, 2.75rem);
  padding-bottom: 20px;
  z-index: 1;
}
.description {
  font-size: clamp(0.75rem, 2vw, 1.5rem);
  z-index: 1;
}
.logo-background-image {
  position: absolute;
  opacity: 0.4;
  height: 50vw;
  width: 50vw;
}
</style>
