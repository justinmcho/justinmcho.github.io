<template>
  <div class="container">
    <h1>This is an experiences page</h1>
  </div>
</template>

<script>
export default {
  name: "Experience",

  components: {},
  mounted() {
    document.getElementById("header-title").style.color = "black";
    document.getElementById("header-button-aboutme").style.display = "none";
    document.getElementById("header-button-experience").style.color = "black";
    document.getElementById("header-button-blog").style.color = "black";
  },
};
</script>


<style scoped>
.container {
  margin-top: 5vh;
}
</style>