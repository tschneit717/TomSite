<template>
  <div :style="{ backgroundImage: `url(${src})` }">
  </div>
</template>
<script>
  export default {
    name: "BackgroundBlock",
    props: {
      src: String,
    }
  }
</script>
<style lang="scss" scoped>
  div {
    position: relative;
    width:100%;
    height:100vh;
    background-attachment: fixed;
    background-size: cover;  
  }
</style>
