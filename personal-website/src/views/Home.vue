<template>
  <div class="home-container">
    <Developer v-if="developerMode"></Developer>
    <HomeDescription v-else></HomeDescription>
    <button
      @click="developerMode = !developerMode"
      style="color: white; font-size: 50px"
    >
      {{ developerMode }}
    </button>
  </div>
</template>

<script>
import Developer from "../components/Develop.vue";
import HomeDescription from "../components/HomeDescription.vue";
export default {
  name: "Home",
  components: { Developer, HomeDescription },
  data() {
    return { developerMode: true };
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.json {
  font-size: 25px;
}
.json-key {
  color: #aed9e0;
  padding-left: 2.5vw;
}
</style>
