<template>
  <div class="hero-wrapper">
    <div class="hero">
      <img class="fit" :src="src" :alt="alt" />
      <div class="absolute-cover">
        <div class="copybox">
          <h1>
            {{ title }}
          </h1>
          <h2>
            {{ subtitle }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: String,
    subtitle: String,
    src: String,
    alt: String
  }
}
</script>
<style lang="scss">
  hero {
    display:block;
  }
</style>
<style lang="scss" scoped>
  .hero {
    position:fixed;
  }
  img {
    object-fit: cover;
    height: 100vh;
    width:100%;
  }
  .absolute-cover {
    top:0;
    left:0;
    width:100%;
    height:100%;
    backdrop-filter: sepia(90%) brightness(90%) contrast(110%);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .copybox {
    bottom:20%;
    position: relative;
  }
  .hero-wrapper {
    height:100vh;
    position: relative;
  }
</style>