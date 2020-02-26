<template>
  <div class="timeline-wrapper relative">
    <ul class='timeline'>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <li class='timeline-element' v-for='item in items'>
        <p class="timeline-element__name">{{item.name}}</p>
        <p class="timeline-element__date">{{item.date}}</p>
      </li>
    </ul>
  </div>
</template>
<script>  
/* eslint-disable no-console */
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
      checkDuplicateYear(items) {
        items.forEach(event => {
          event
        })
      },
      init(){
        const currentYear = new Date().getFullYear();
        const startYear = Number(this.items[0].year)
        const timelineLength = currentYear - startYear;
        const timelineScale = (window.innerWidth * 5);
        
        console.log(this.items.length)
        const timelineItemSize = timelineScale / timelineLength;

        const timelineItem = document.querySelectorAll('.timeline-element')

        let count = 0;
        let dupYearCount = 0;
        timelineItem.forEach(item => {
          const itemPosition = this.getPosition(this.items[count].year, startYear, timelineItemSize)
          let currCount = this.items[count].year;
          if (count > 0) {
            let prevCount = this.items[count-1].year
            console.log(currCount, prevCount)
             if (currCount === prevCount) {
               dupYearCount++;
              if (dupYearCount > 0) {
                item.style.left = `${itemPosition + (dupYearCount * timelineItemSize)}px`;
              } else {
                item.style.left = itemPosition + timelineItemSize + 'px';
              }
            }
            else {
              if (dupYearCount > 0) {
                item.style.left = `${itemPosition + (dupYearCount * timelineItemSize)}px`;
              } else {
                item.style.left = itemPosition + 'px';
              }
            }
          }
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
  .timeline{
    &-wrapper {
      height:100vh;
      max-width:100vw;
      overflow: auto;
      display: flex;
      align-items: center;
      justify-content: baseline;
    }
    &-element {
      display: block;
      &__name {
        font-size:1.5rem;
      }
      &__date {
        font-size:2rem;
        font-weight: 800;
      }
    }
  }
  ul {
    display: flex;
    li {
      position: relative;
      list-style: none;
    }
  }
</style>