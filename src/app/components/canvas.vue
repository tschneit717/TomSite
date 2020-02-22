<template>
  <div class="timeline-wrapper relative">
    <ul class='timeline'>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <li class='timeline-element' v-for='item in items'>
        {{item.name}}<br>{{item.date}}
      </li>
    </ul>
  </div>
</template>
<script>  
  const data = require('./data/timelineData.json')

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
        items: data.events
      }
    },
    methods: {
      getPosition(itemYear, startYear, itemSize) {
        if (itemYear === "Today") {
          let today = new Date().getFullYear()
          return ((today - startYear) * itemSize);
        }
        const timelinePosition = ((Number(itemYear) - startYear) * itemSize)
        return timelinePosition;

      },
      init(){
        const currentYear = new Date().getFullYear();
        const startYear = Number(data.events[0].year)
        const timelineLength = currentYear - startYear;
        const timelineScale = 10000;
        
        const timelineItemSize = timelineScale / timelineLength;

        const timelineItem = document.querySelectorAll('.timeline-element')

        let count = 0;
        timelineItem.forEach(item => {
          const itemPosition = this.getPosition(data.events[count].year, startYear, timelineItemSize)
          // eslint-disable-next-line no-console
          console.log(data.events[count].year, itemPosition)
          item.style.left = itemPosition + 'px';
          item.style.width = timelineItemSize + 'px';
          count++ 
        })

      },
    },
    mounted() {
      this.init();
    } 
  }
  
</script>
<style lang="scss" scoped>
  .timeline-wrapper {
    max-width: 100vw;
    height:100vh;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    width:100%;
    li {
      position: absolute;
      list-style: none;
    }
  }
</style>