<template>
  <div id="app">
    <HeaderWidget/>
    <Hero title="Hello World" src="/assets/images/glacier-np.png" subtitle="I'm Tom" alt=""/>
    <ContentBlock title="test" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    <BackgroundBlock src="/assets/images/grand-canyon.png"/>
  </div>
</template>

<script>
import HeaderWidget from './components/Header.vue'
import Hero from './components/Hero.vue'
import ContentBlock from './components/ContentBlock.vue'
import BackgroundBlock from './components/BackgroundBlock.vue'

export default {
  name: 'app',
  components: {
    HeaderWidget,
    Hero,
    ContentBlock,
    BackgroundBlock
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
