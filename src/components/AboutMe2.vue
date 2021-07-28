<template>
  <div class="container">
    <div class="left">
      <div class="title-description">Fun Facts</div>
      <span class="description"
        >Hobbies: volleyball, singing<br />Location: South Korea<br />MBTI:
        ENTP</span
      >
      <router-link :to="{ name: 'Experience' }" style="text-decoration: none"
        ><div class="experiences-link">Click here for my experiences</div>
      </router-link>
    </div>
    <div class="right">
      <img class="my-image" :src="require('../assets/justin2.jpeg')" />
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
}
.title-description {
  font-size: 40px;
  padding-top: 10%;
  padding-left: 15%;
  border-bottom: 1px white solid;
  width: 40%;
}
.description {
  font-size: 25px;
  padding-top: 15%;
  padding-left: 15%;
}
.experiences-link {
  margin-top: 20px;
  margin-left: 15%;
  color: #c6c6c6;
  font-size: 20px;
  border-bottom: 1px white solid;
  width: max-content;
}
.right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}
.my-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 25px;
}
</style>
