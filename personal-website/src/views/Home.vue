<template>
  <div class="home-container">
    <Developer v-if="developerMode"></Developer>
    <HomeDescription v-else></HomeDescription>
    <button
      @click="
        {
          developerMode = !developerMode;
          toggled = !toggled;
          checkClass();
        }
      "
      class="switch-button"
    >
      <div class="button-align">
        <div
          :class="toggled && !developerMode ? 'circle circle-move' : 'circle'"
          id="button"
          style="margin-left: 5px; margin-right: 7px"
        ></div>
      </div>
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
    return { developerMode: true, toggled: false };
  },
  methods: {
    checkClass() {
      document.getElementById;
    },
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
.button-align {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
}
.switch-button {
  color: white;
  font-size: 16px;
  height: 40px;
  width: 85px;
  border: #707070 0.5px solid;
  border-radius: 30px;
  outline: transparent 0 solid;
  background-color: rgba(83, 119, 240, 0.3);
}
.circle {
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: white;
}
.circle-move {
  animation: circleMove 500ms forwards;
}
.circle-move-back {
  animation: circleMove 500ms reverse ease-in;
}
@keyframes circleMove {
  100% {
    transform: translateX(140%);
  }
}
.button-text {
  animation: textMove forwards 500ms;
}
@keyframes textMove {
  100% {
    color: transparent;
    content: "false";
  }
}
</style>
