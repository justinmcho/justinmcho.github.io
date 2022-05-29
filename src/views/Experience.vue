<template>
  <div class="container">
    <div class="content-container">
      <span class="main-description">
        {{$t('experience.body')}}
      </span>
      <!-- <span>
        Click
        <a
          style="text-decoration: none; color: #aed9e0; font-weight: bold"
          href="/resume.pdf"
          target="_blank"
          >here</a
        >
        to open up a PDF version of my resume.
      </span> -->
      <div class="resume-container">
        <a
          v-for="company in resumeBlocks"
          :key="company"
          :href="company.href"
          target="_blank"
          class="resume-block"
        >
          <img
            class="resume-image"
            :src="require('../assets/logos/' + company.image)"
            :alt="company.companyName"
          />
          <div class="overlay">
            <div class="company-name">
              {{ company.companyName }}
            </div>
            <div class="company-description">
              {{ company.description }}
            </div>
            <div class="company-role">
              {{ company.role }}
            </div>
          </div>
        </a>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Experience",
  computed: {
    resumeBlocks() {
      return [
        {
          companyName: this.$t('experience.alchera.name'),
          description: this.$t('experience.alchera.description'),
          role: this.$t('experience.alchera.role'),
          image: "alchera-logo.png",
          href: "https://alcherainc.com/",
        },
        {
          companyName: this.$t('experience.illuner.name'),
          description: this.$t('experience.illuner.description'),
          role: this.$t('experience.illuner.role'),
          image: "illuner-logo.png",
          href: "https://www.linkedin.com/company/illuner",
        },
        {
          companyName: this.$t('experience.kbo.name'),
          description: this.$t('experience.kbo.description'),
          role: this.$t('experience.kbo.role'),
          image: "kbo-logo.png",
          href: "https://www.kboberkeley.com/",
        },
        {
          companyName: this.$t('experience.upsync.name'),
          description: this.$t('experience.upsync.description'),
          role: this.$t('experience.upsync.role'),
          image: "upsync-logo.png",
          href: "https://www.upsyncberkeley.com/",
        },
        {
          companyName: this.$t('experience.asuc.name'),
          description: this.$t('experience.asuc.description'),
          role: this.$t('experience.asuc.role'),
          image: "asuc-logo.png",
          href: "https://asuc.org/",
        },
        {
          companyName: this.$t('experience.aka.name'),
          description: this.$t('experience.aka.description'),
          role: this.$t('experience.aka.role'),
          image: "aka-logo.png",
          href: "https://callink.berkeley.edu/organization/associationofkoreanartists",
        },
        {
          companyName: this.$t('experience.mccann.name'),
          description: this.$t('experience.mccann.description'),
          role: this.$t('experience.mccann.role'),
          image: "mccann-logo.png",
          href: "http://www.mccann.co.kr/",
        },
        {
          companyName: this.$t('experience.ak-interactive.name'),
          description: this.$t('experience.ak-interactive.description'),
          role: this.$t('experience.ak-interactive.role'),
          image: "akinteractive-logo.png",
          href: "http://www.akinteractive.co.kr/kor/main.gs",
        },
        {
          companyName: this.$t('experience.justinmcho.name'),
          description: this.$t('experience.justinmcho.description'),
          role: this.$t('experience.justinmcho.role'),
          image: "jmc-logo.png",
          href: "https://blog.naver.com/justinmcho99/222463829656",
        },
      ]
    }
  },
  // data() {
  //   return {
  //     resumeBlocks: [
  //       {
  //         companyName: this.$t('experience.alchera.name'),
  //         description: this.$t('experience.alchera.description'),
  //         role: this.$t('experience.alchera.role'),
  //         image: "alchera-logo.png",
  //         href: "https://alcherainc.com/",
  //       },
  //       {
  //         companyName: this.$t('experience.illuner.name'),
  //         description: this.$t('experience.illuner.description'),
  //         role: this.$t('experience.illuner.role'),
  //         image: "illuner-logo.png",
  //         href: "https://www.linkedin.com/company/illuner",
  //       },
  //       {
  //         companyName: this.$t('experience.kbo.name'),
  //         description: this.$t('experience.kbo.description'),
  //         role: this.$t('experience.kbo.role'),
  //         image: "kbo-logo.png",
  //         href: "https://www.kboberkeley.com/",
  //       },
  //       {
  //         companyName: this.$t('experience.upsync.name'),
  //         description: this.$t('experience.upsync.description'),
  //         role: this.$t('experience.upsync.role'),
  //         image: "upsync-logo.png",
  //         href: "https://www.upsyncberkeley.com/",
  //       },
  //       {
  //         companyName: this.$t('experience.asuc.name'),
  //         description: this.$t('experience.asuc.description'),
  //         role: this.$t('experience.asuc.role'),
  //         image: "asuc-logo.png",
  //         href: "https://asuc.org/",
  //       },
  //       {
  //         companyName: this.$t('experience.aka.name'),
  //         description: this.$t('experience.aka.description'),
  //         role: this.$t('experience.aka.role'),
  //         image: "aka-logo.png",
  //         href: "https://callink.berkeley.edu/organization/associationofkoreanartists",
  //       },
  //       {
  //         companyName: this.$t('experience.mccann.name'),
  //         description: this.$t('experience.mccann.description'),
  //         role: this.$t('experience.mccann.role'),
  //         image: "mccann-logo.png",
  //         href: "http://www.mccann.co.kr/",
  //       },
  //       {
  //         companyName: this.$t('experience.ak-interactive.name'),
  //         description: this.$t('experience.ak-interactive.description'),
  //         role: this.$t('experience.ak-interactive.role'),
  //         image: "akinteractive-logo.png",
  //         href: "http://www.akinteractive.co.kr/kor/main.gs",
  //       },
  //       {
  //         companyName: this.$t('experience.justinmcho.name'),
  //         description: this.$t('experience.justinmcho.description'),
  //         role: this.$t('experience.justinmcho.role'),
  //         image: "jmc-logo.png",
  //         href: "https://blog.naver.com/justinmcho99/222463829656",
  //       },
  //     ],
  //   };
  // },
  components: { Footer },
  mounted() {
    document.getElementById("header-title").style.color = "black";
    document.getElementById("header-button-home").style.color = "black";
    document.getElementById("header-button-aboutme").style.color = "black";
    document.getElementById("header-button-experience").style.color = "#87c7ed";
    document.getElementById("header-button-blog").style.color = "black";
    document.getElementById("language-button-aboutme").style.color = "black";
    document.getElementById("language-button-aboutme2").style.color = "black";

    var drawerNav = document.getElementById("drawerNav");
    drawerNav.classList.remove("text-white");
    drawerNav.classList.add("text-black");
  },
  methods: {
    navigate() {
      console.log("HI");
    },
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
}
.content-container {
  margin-top: 7vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.main-description {
  font-size: min(2vw, 20px);
  font-weight: 500;
  text-align: start;
  width: 60%;
  margin-top: 50px;
  margin-bottom: 50px;
}
.resume-container {
  width: 60%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
}
.resume-block {
  display: block;
  width: 33%;
  position: relative;
}
.overlay {
  position: absolute;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.5s ease;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
}
.resume-block:hover .overlay {
  opacity: 1;
}
.resume-image {
  width: 100%;
  height: auto;
  display: block;
}
.company-name {
  color: white;
  opacity: 1;
  text-align: center;
  font-size: max(1rem, 1.875vw);
  padding-bottom: 1vw;
}
.company-description {
  color: white;
  text-align: start;
  justify-self: center;
  width: 85%;
  opacity: 1;
  font-size: max(0.65rem, 1vw);
  padding-bottom: 1vw;
}
.company-role {
  color: white;
  opacity: 1;
  font-size: max(0.65rem, 1vw);
  text-align: center;
}

@media only screen and (max-width: 1050px) {
  .main-description {
    width: 70%;
  }
  .resume-container {
    width: 90%;
  }
  .resume-block {
    width: 50%;
  }
  .company-name {
    font-size: max(2rem, 3.75vw);
    padding-bottom: 4vw;
  }
  .company-description {
    font-size: max(1.15rem, 2.25vw);
    padding-bottom: 4vw;
  }
  .company-role {
    font-size: max(1.15rem, 2.25vw);
  }
}
@media only screen and (max-width: 700px) {
  .main-description {
    font-size: 15px;
    width: 85%;
  }
  .resume-container {
    width: 80%;
  }
  .resume-block {
    width: 100%;
  }
  .company-name {
    font-size: max(2rem, 3.75vw);
    padding-bottom: 7.5vw;
  }
  .company-description {
    font-size: max(1.15rem, 2.25vw);
    padding-bottom: 7.5vw;
  }
  .company-role {
    font-size: max(1.15rem, 2.25vw);
  }
}
</style>