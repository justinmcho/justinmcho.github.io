<template>
  <div class="container">
    <div class="left">
      <img class="my-image" :src="require('../assets/Justin_Photo.png')" />
      <div style="display: flex; flex-direction: row; align-items: center">
        <span>Justin Min Gi Cho</span>
        <div class="social-container">
          <a href="https://github.com/justinmcho" target="_blank">
            <img
              :src="require('../assets/github-logo-white.png')"
              alt="Github Logo"
              width="30"
              height="30"
              class="social-icon"
            />
          </a>
          <a href="https://www.instagram.com/justinmcho/" target="_blank">
            <img
              :src="require('../assets/instagram-logo.png')"
              alt="Github Logo"
              width="30"
              height="30"
              class="social-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/justinmcho/" target="_blank">
            <img
              :src="require('../assets/linkedin-logo.png')"
              alt="Github Logo"
              width="30"
              height="30"
              class="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="right">
      <img
        class="description-image"
        :src="require('../assets/logo.png')"
        alt="JMC Logo"
        width="550"
        height="550"
      />
      <div class="title-description">
        I'm an <span style="color: #aed9e0">engineer </span>studying <br />
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
  width: 280px;
  border-radius: 10px;
  margin-bottom: 25px;
}
.social-container {
}
.social-icon {
  margin: 5px;
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
  font-size: 45px;
  padding-bottom: 40px;
  z-index: 1;
}
.description {
  font-size: 25px;
  z-index: 1;
}
.description-image {
  position: absolute;
  z-index: 0;
  opacity: 0.4;
}
</style>
