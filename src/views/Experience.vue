<template>
  <div class="container">
    <div class="content-container">
      <span class="main-description">
        Justin Min Gi Cho is a student studying Computer Science and Economics
        at UC Berkeley.
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
  data() {
    return {
      resumeBlocks: [
        {
          companyName: "Click to open resume",
          description: "",
          role: "",
          image: "resume.png",
          href: "/resume.pdf",
        },
        {
          companyName: "Alchera",
          description:
            "Alchera is an AI company that specializes in face recognition and image anomaly.",
          role: "Software Development / Strategy",
          image: "alchera-logo.png",
          href: "http://alcherainc.com/",
        },
        {
          companyName: "illuner",
          description:
            "illuner is a startup that helps college students in Korea order food.",
          role: "CEO / Software / Strategy",
          image: "illuner-logo.png",
          href: "https://www.linkedin.com/company/illuner",
        },
        {
          companyName: "McCann",
          description:
            "McCann is a global advertising firm that provides marketing services for companies.",
          role: "Account Management / Marketing",
          image: "mccann-logo.png",
          href: "http://www.mccann.co.kr/",
        },
        {
          companyName: "UpSync Consulting",
          description:
            "UpSync Consulting is a premier technology consulting organization at UC Berkeley.",
          role: "CTO / Management / Consulting",
          image: "upsync-logo.png",
          href: "https://www.upsyncberkeley.com/",
        },
        {
          companyName: "ASUC",
          description:
            "The Associated Students of the University of California (ASUC) is the student government of UC Berkeley.",
          role: "Chief of Staff to the CFO / Funds Management",
          image: "asuc-logo.png",
          href: "https://asuc.org/",
        },
        {
          companyName: "Association of Korean Artists",
          description:
            "Association of Korean Artists is a UC Berkeley hiphop/vocal music group.",
          role: "President / Management / Singing",
          image: "aka-logo.png",
          href: "https://callink.berkeley.edu/organization/associationofkoreanartists",
        },
        {
          companyName: "Korean Business Organization",
          description:
            "KBO is a UC Berkeley organization that serves as a community for students interested in business.",
          role: "President / Management / Entrepreneurship",
          image: "kbo-logo.png",
          href: "https://www.kboberkeley.com/",
        },
        {
          companyName: "AK Interactive",
          description:
            "AK Interactive is a game company that maintains the game ‘The Merchant’.",
          role: "Project Management / Software",
          image: "akinteractive-logo.png",
          href: "http://www.akinteractive.co.kr/kor/main.gs",
        },
      ],
    };
  },
  components: { Footer },
  mounted() {
    document.getElementById("header-title").style.color = "black";
    document.getElementById("header-button-home").style.color = "black";
    document.getElementById("header-button-aboutme").style.color = "black";
    document.getElementById("header-button-experience").style.color = "#AED9E0";
    var drawerNav = document.getElementById("drawerNav");
    drawerNav.classList.remove("text-white");
    drawerNav.classList.add("text-black");

    // document.getElementById("header-button-blog").style.color = "black";
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
  font-size: 20px;
  text-align: start;
  width: 35%;
  margin-bottom: 10px;
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
  background-color: rgba(0, 0, 0, 0.5);
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
    font-size: max(1rem, 1.875vw);
  }
  .company-description {
    font-size: max(0.65rem, 1vw);
  }
  .company-role {
    font-size: max(0.65rem, 1vw);
  }
}
@media only screen and (max-width: 700px) {
  .main-description {
    width: 75%;
  }
  .resume-container {
    width: 80%;
  }
  .resume-block {
    width: 100%;
  }
  .company-name {
    font-size: max(1rem, 1.875vw);
  }
  .company-description {
    font-size: max(0.65rem, 1vw);
  }
  .company-role {
    font-size: max(0.65rem, 1vw);
  }
}
</style>