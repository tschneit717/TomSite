<template>
  <div class="hero-wrapper">
    <div class="hero">
      <div class="top-half">
        <h1>
          I got abducted by aliens
        </h1>
      </div>
      <div class="middle-gradient"></div>
      <div class="bottom-half">
        <h1>
          I got abducted by aliens
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunkyBlock",
  props: {
    title: String,
    subtitle: String,
    src: String,
    alt: String
  }
}
</script>
<style lang="scss" scoped>
  .hero {
    position: relative;
    height:100%;
    width:100%;
    font-family: 'Quicksand', sans-serif;
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
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .copybox {
    bottom:5%;
    position: relative;
  }
  .hero-wrapper {
    height:100vh;
    position: relative;
    background:$black;
  }
  .top-half,
  .bottom-half {
    height:50%;
    background-size: 100% 100%;
    width:100%;
    display: flex;
    flex-direction: column;
    position: relative;
    h1 {
      padding:40px;
    }
  }
  .top-half {
    background: radial-gradient(at bottom, $greenGradient,#000000FF 65%);
    justify-content: flex-end;
    h1 {
      }
  }
  .middle-gradient {
    background: linear-gradient(to right, #00000060 5%, $accentGreen 50%,#00000060 95%);
    height:3px;
    width:100%;
    position: relative;
    margin-top:-2px;
    margin-bottom:-5px;
  }
  .bottom-half {
    opacity: 0.5;
    transform:rotateX(20deg);
    transform-origin: top;
    background:linear-gradient(to bottom, #333 60%, #000 100%);
    &:before {
      opacity: 0.8;
      background: radial-gradient(at top, $greenGradient 0%,#000000ff 65%);
      content:"";
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 1;
    }
    justify-content: flex-start;
    h1 {
      transform: rotateX(130deg) scale(1, 1);
      opacity:0.5;
    }
  }
  h1 {
    color:$white;
  }
</style>