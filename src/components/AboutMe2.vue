<template>
  <div class="container">
    <div class="left">
      <div class="title-description"></div>
      <div class="underline"></div>
      <div class="description">
        <span class="description-title"> {{$t('bottom-portion.tech')}} </span>
        <br class="inbetween-break" />
        <span class="description-details">
          {{$t('bottom-portion.tech-description')}} <br />
        </span>
        <span class="description-title">{{$t('bottom-portion.background')}} </span>
        <br class="inbetween-break" />
        <span class="description-details">
          {{$t('bottom-portion.background-description')}}
          <br />
        </span>
        <span class="description-title">
          {{$t('bottom-portion.currently')}}
        </span>
        <br class="inbetween-break" />
        <span class="description-details"> {{$t('bottom-portion.currently-description')}} <br /> </span>
      </div>
      <router-link :to="{ name: 'Experience' }" style="text-decoration: none"
        ><div class="experiences-link">{{$t('bottom-portion.click-here')}}</div>
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
  margin-top: 2vw;
}
.inbetween-break {
  display: block;
  content: "";
  margin-top: 1vw;
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
.description-details {
  color: white;
  font-size: max(0.65rem, 1.85vw);
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
@media only screen and (max-width: 700px) {
  .container {
    margin-bottom: 50px;
  }
  br {
    margin-top: 30px;
  }
  .inbetween-break {
    margin-top: 0px;
  }
  .left {
    width: 90%;
  }
  .description {
    font-size: min(2.15rem, 8vw);
    padding-left: 5%;
  }
  .description-details {
    font-size: min(1.2rem, 5vw);
  }
  .experiences-link {
    margin-top: 10px;
    font-size: min(1.1rem, 4.5vw);
  }
  .right {
    display: none;
  }
  .my-image {
    display: none;
  }
}
</style>
