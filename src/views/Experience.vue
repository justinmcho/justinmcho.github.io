<template>
  <div class="container">
    <div class="content-container">
      <span>
        Click
        <a
          style="text-decoration: none; color: #aed9e0; font-weight: bold"
          href="/resume.pdf"
          target="_blank"
          >here</a
        >
        to open up a PDF version of my resume.
      </span>
      <div class="resume-container">
        <div
          v-for="company in resumeBlocks"
          :key="company"
          class="resume-block"
        >
          <img
            class="resume-image"
            :src="require('../assets/logos/' + company.image)"
            alt="Alchera"
            width="100"
            height="100"
          />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Experience",
  data() {
    return {
      resumeBlocks: [
        {
          companyName: "Alchera",
          description: "hi",
          image: "alchera-logo.png",
        },
        {
          companyName: "illuner",
          description: "hi",
          image: "illuner-logo.png",
        },
        {
          companyName: "McCann",
          description: "hi",
          image: "mccann-logo.png",
        },
        {
          companyName: "UpSync Consulting",
          description: "hi",
          image: "upsync-logo.png",
        },
        {
          companyName: "Associated Students of the University of California",
          description: "hi",
          image: "asuc-logo.png",
        },
        {
          companyName: "Association of Korean Artists",
          description: "hi",
          image: "aka-logo.png",
        },
        {
          companyName: "Korean Business Organization",
          description: "hi",
          image: "kbo-logo.png",
        },
        {
          companyName: "AK Interactive",
          description: "hi",
          image: "akinteractive-logo.png",
        },
        {
          companyName: "Resume",
          description: "hi",
          image: "resume.png",
        },
      ],
    };
  },
  components: { Footer },
  created() {
    console.log("Created experience");
    document.getElementById("header-title").style.color = "black";
    document.getElementById("header-button-home").style.color = "black";
    document.getElementById("header-button-aboutme").style.color = "black";
    document.getElementById("header-button-experience").style.color = "black";
    // document.getElementById("header-button-blog").style.color = "black";
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.content-container {
  margin-top: 10vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.resume-container {
  margin-top: 10vh;
  width: 80vw;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
}
.resume-block {
  width: 26.6667vw;
  height: 26.6667vw;
}
.resume-image {
  width: 100%;
  height: 100%;
  outline: none;
}
</style>