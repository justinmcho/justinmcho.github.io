<template>
  <div class="home-container">
    <div style="color: white">
      <span style="color: yellow">{</span><br />
      <div>
        <span class="json-key">"name"</span>: "Justin Min Gi Cho",<br />
        <span class="json-key">"school"</span>: "UC Berkeley",<br />
        <span class="json-key">"majors"</span>: "Computer Science and
        Economics",<br />
        <span class="json-key">"hobbies"</span>: "Entrepreneurship, singing,
        volleyball",<br />
        <span class="json-key">"values"</span>: "Develop ideas for a
        purpose",<br />
        <span class="json-key">"mbti"</span>: "ENTP",<br />
        <span class="json-key">developer-mode</span>:
        <span style="color: #87c7ed">true</span> <br />
      </div>
      <span style="color: yellow">}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  components: {},
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
}
.json {
  /* display: flex;
  flex-direction: row;
  flex: 1; */
  /* align-items: center;
  justify-content: center; */
}
.json-key {
  color: #aed9e0;
  padding-left: 2.5vw;
}
</style>
