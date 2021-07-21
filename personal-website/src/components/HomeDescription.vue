<template>
    <div class="container-home-description">
        <div class="test">
          <span class="title">Hi, I'm Justin </span>
          <span class="title">|</span>
        </div>
        <div class="description">I develop ideas for a purpose and share <br/> them with my community.</div>        <span class="dev-mode">developer-mode</span>:
        <span style="color: #87c7ed">false</span>
    </div>
</template>


<script>
export default {
  name: "HomeDescription",
  components: {},
};
</script>

<style scoped>
.container-home-description {

}
.test {
  display:flex;
  flex:1;
  flex-direction:row;
}
.title {
    color:white;
    font-size:80px;
    font-weight: 400;
    display: inline-block;
    line-height: 52px;
}
.description {
    color: #87C7ED;
    font-size: 39px;
}
.dev-mode {
  color: #87C7ED;
  padding-left: 2.5vw;
}
</style>
