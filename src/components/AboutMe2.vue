<template>
  <div class="container">
    <div class="left">
      <div class="title-description"></div>
      <div class="underline"></div>
      <div class="description">
        <span class="description-title"> Technical Skills: </span>
        <br style="display: block; content: ''; margin-top: 1px" />
        Python, Java, C, HTML, CSS, Javascript, React Native, Vue, RISC-V,
        Swift, R, Stata <br />
        <span class="description-title">Background: </span>
        <br style="display: block; content: ''; margin-top: 1px" />
        Consulting, Front end web development, App development
        <br />
        <span class="description-title"> Currently studying/working on: </span>

        <br style="display: block; content: ''; margin-top: 1px" />
        Back end development <br />
      </div>
      <router-link :to="{ name: 'Experience' }" style="text-decoration: none"
        ><div class="experiences-link">Click here for my experiences!</div>
      </router-link>
    </div>
    <div class="right">
      <img class="my-image" :src="require('../assets/justin-pic2.jpeg')" />
    </div>
  </div>
</template>


<script>
export default {
  name: "AboutMe2",
  components: {},
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex: 1;
}
br {
  display: block;
  content: "";
  margin-top: 0.75vw;
}
.left {
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title-description {
  font-size: clamp(1.5rem, 4vw, 2.75rem);
  padding-top: 12.5%;
  padding-left: 15%;
}
.underline {
  border-bottom: 1px white solid;
  width: 65%;
}
.description {
  font-size: max(0.75rem, 2.1vw);
  padding-top: 10%;
  padding-left: 15%;
}
.description-title {
  color: #aed9e0;
  font-weight: 500;
}
.experiences-link {
  margin-top: 20px;
  margin-left: 15%;
  color: #c6c6c6;
  font-size: max(0.75rem, 1.75vw);
  border-bottom: 1px white solid;
  width: max-content;
}
.right {
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  background-color: black;
}
.my-image {
  width: 100%;
  position: relative;
  top: -20%;
}
</style>
