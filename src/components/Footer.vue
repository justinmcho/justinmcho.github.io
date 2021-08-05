<template>
  <div class="footer-container">
    © Justin Min Gi Cho 2021 | justinmcho.k@gmail.com
  </div>
</template>


<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style scoped>
.footer-container {
  background-color: transparent !important;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-left: 7.5vw;
  color: black;
  overflow-x: hidden;
  height: 10vh;
  /* font-size: 0.75rem; */
  font-size: clamp(0.75rem, 1vw, 1rem);
}
</style>
