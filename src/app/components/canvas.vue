<template>
  <div>
    <ul>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <li v-for='item in events'>{{item.name}}</li>
    </ul>
  </div>
</template>
<script>  
  import events from './data/timelineData.json'

  export default {
    name:'Timeline',
    props: {
      scale: Number,
      color: {
        type: String,
        default: 'default'
      },
      effects: {
        type: Boolean,
        default: true,
      }
    },
    data () {
      return {
        items: events
      }
    },
    methods: {
      init(){
        fetch('./data/timelineData.json')
          .then(r => r.json())
          .then(json => {
            this.levels=json;
          },
          response => {
          // eslint-disable-next-line no-console
          console.log(response)
        });
      }
    },
    mounted() {
      this.init();
    } 
  }
  
</script>
<style lang="scss" scoped>
  
</style>