<template>
    <div class="json" style="color: white">
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
</template>


<script>
export default {
  name: "Develop",
  components: {},
};
</script>

<style scoped>
.json {
  font-size:39px;
}
.json-key {
  color: #aed9e0;
  padding-left: 2.5vw;
}
</style>
