<template>
  <div class="container">
    <div class="left">
      <div class="title-description">Fun Facts</div>
      <div class="underline"></div>
      <span class="description"
        >Hobbies: volleyball, singing<br />Location: South Korea<br />MBTI:
        ENTP</span
      >
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
.left {
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title-description {
  font-size: clamp(1.5rem, 4vw, 2.75rem);
  padding-top: 10%;
  padding-left: 15%;
}
.underline {
  border-bottom: 1px white solid;
  width: 65%;
}
.description {
  font-size: clamp(0.75rem, 2vw, 1.5rem);
  padding-top: 15%;
  padding-left: 15%;
}
.experiences-link {
  margin-top: 20px;
  margin-left: 15%;
  color: #c6c6c6;
  font-size: clamp(0.75rem, 2vw, 1.5rem);
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
