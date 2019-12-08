<template>
  <div class="content-block">
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ body }}
    </p>
  </div>
</template>
<script>
  export default {
    name: "ContentBlock",
    props: {
      title: String,
      body: String,
      theme: String
    }    
  }
</script>
<style lang="scss" scoped>
  .content-block {
    z-index: 4;
    position: relative;
    min-height: 50vh;
    background: white;
    display: flex;
    padding: 0px 10% 120px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>