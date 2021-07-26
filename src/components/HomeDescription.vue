<template>
  <div class="container-home-description">
    <div class="description-container">
      <span class="title">{{ currentIntro }}{{ currentName }}</span>
      <span class="cursor"></span>
    </div>
    <div class="description">
      I develop ideas for a purpose and share <br />
      them with my community.
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeDescription",
  components: {},
  data() {
    return {
      currentName: "",
      currentIntro: "",
      intro: "Hi, I'm ",
      nameArray: [
        "Justin.",
        "an entrepreneur.",
        "a programmer.",
        "from UC Berkeley.",
      ],
      typeSpeed: 100,
      deleteSpeed: 50,
      newNameDelay: 2500,
      restartSpeed: 1500,
      typing: true,
      introFinished: false,
    };
  },
  methods: {
    initiate(charIndex) {
      if (this.currentIntro === this.intro) {
        this.introFinished = true;
      }
      if (!this.introFinished) {
        this.currentIntro += this.intro[charIndex];
        setTimeout(() => {
          this.initiate(charIndex + 1);
        }, this.typeSpeed);
      } else {
        this.typeText(0, 0);
      }
    },
    typeText(index, charIndex) {
      if (this.currentName === this.nameArray[index]) {
        this.typing = false;
      }
      if (this.typing) {
        this.currentName += this.nameArray[index][charIndex];
        setTimeout(() => {
          this.typeText(index, charIndex + 1);
        }, this.typeSpeed);
      } else {
        setTimeout(() => {
          this.deleteText(index + 1);
        }, this.newNameDelay);
      }
    },
    deleteText(nextWordIndex) {
      if (this.currentName === "") {
        this.typing = true;
        if (nextWordIndex === this.nameArray.length) {
          setTimeout(() => {
            this.deleteIntro();
          }, this.deleteSpeed);
          return;
        }
      }
      if (!this.typing) {
        this.currentName = this.currentName.substring(
          0,
          this.currentName.length - 1
        );
        setTimeout(() => {
          this.deleteText(nextWordIndex);
        }, this.deleteSpeed);
      } else {
        setTimeout(() => {
          this.typeText(nextWordIndex, 0);
        }, this.typeSpeed);
      }
    },
    deleteIntro() {
      if (this.currentIntro !== "") {
        this.currentIntro = this.currentIntro.substring(
          0,
          this.currentIntro.length - 1
        );
        setTimeout(() => {
          this.deleteIntro();
        }, this.deleteSpeed);
      } else {
        this.introFinished = false;
        setTimeout(() => {
          this.initiate(0);
        }, this.restartSpeed);
      }
    },
  },
  created() {
    setTimeout(() => {
      this.initiate(0);
    }, 1500);
  },
};
</script>

<style scoped>
.container-home-description {
  width: 100vw;
  margin-left: 50vw;
}
.description-container {
  display: flex;
  flex: 1;
  flex-direction: row;
}
.title {
  color: white;
  font-size: min(10vh, 5vw);
  line-height: min(10.25vh, 5.1vw);
  height: min(10vh, 5vw);
  font-weight: normal;
  display: inline-block;
  text-align: flex-start;
  width: auto;
}
.cursor {
  display: inline-block;
  margin-left: 5px;
  width: 4px;
  background-color: white;
  animation: blink 1s infinite;
}

@keyframes blink {
  49.9% {
    background-color: white;
  }
  50% {
    background: transparent;
  }
  99% {
    background: transparent;
  }
}
.description {
  color: #87c7ed;
  font-size: min(4vh, 2vw);
}
</style>
