<template>
<div class="outer-div">
  <div class="timeline-wrapper relative">
    <ul class='timeline'>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <li class='timeline-element' v-for='item in items'>
        <p class="timeline-element__name">{{item.name}}</p>
        <p class="timeline-element__date">{{item.date}}</p>
      </li>
    </ul>
  </div>
  <div class="scrollbar-wrapper">
    <div class="scrollbar"></div>
  </div>
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
        const timelineItemSize = timelineScale / timelineLength;
        const timelineList = document.querySelector('.timeline')
        const timelineWrapper = document.querySelector('.timeline-wrapper')
        const timelineItem = document.querySelectorAll('.timeline-element')
        timelineList.style.width = timelineScale * (timelineLength + 1);

        let count = 0;
        let dupYearCount = 0;
        timelineItem.forEach(item => {
          const itemPosition = this.getPosition(this.items[count].year, startYear, timelineItemSize)
          let currCount = this.items[count].year;
          if (count > 0) {
            let prevCount = this.items[count-1].year
             if (currCount === prevCount) {
               dupYearCount++;
              if (dupYearCount > 0) {
                item.style.left = `${itemPosition + (dupYearCount * timelineItemSize)}px`;
              } else {
                item.style.left = `${itemPosition + timelineItemSize}px`;
              }
            }
            else {
              if (dupYearCount == 0) {
                item.style.left = `${itemPosition + (dupYearCount * timelineItemSize)}px`;
              } else {
                item.style.left = `${itemPosition}px`;
              }
            }
          } else if (count == 0) {
            item.style.left = `${((timelineWrapper.clientWidth - timelineItemSize) / 2)}px`
          }
          item.style.width = `${timelineItemSize}px`;
          count++  
        })

      },
      scrollPosition(scrollPos, scrollElement) {
        let isRight;
        if (scrollElement.scrollLeft > scrollPos)
          isRight = true
        else
          isRight = false;
        return isRight;
      },
      scrollListen() {
        const timelineWrapper = document.querySelector('.timeline-wrapper')
        const timelineItems = document.querySelectorAll('.timeline-element')
        const outerDiv = document.querySelector('.outer-div')
        var ref = this;
          // Initial state
        let scrollPos = 0;
        timelineWrapper.addEventListener('scroll', event => {
          timelineWrapper.classList.add('scrolling')
          outerDiv.classList.add('scrolling')
          if (ref.scrollPosition(scrollPos, event.target)) {
            timelineItems.forEach( item => {
              item.classList.add('tilt-right')
              if (item.classList.contains('tilt-left')){
                item.classList.remove('tilt-left')
              }
            })
          }
          else if (!ref.scrollPosition(scrollPos, event.target)) {
            timelineItems.forEach( item => {
              item.classList.add('tilt-left')
              if (item.classList.contains('tilt-right')){
                item.classList.remove('tilt-right')
              }
            })
          }
          var scrollStop = function (callback) {
            if (!callback || typeof callback !== 'function') return;
            var isScrolling;
            timelineWrapper.addEventListener('scroll', ()  => {
              window.clearTimeout(isScrolling);
              isScrolling = setTimeout(() => {
                callback();
              }, 150);
            }, false);
          };
          scrollPos = event.target.scrollLeft;
          scrollStop(function () {
            timelineWrapper.classList.remove('scrolling')
            outerDiv.classList.remove('scrolling')
            timelineItems.forEach( item => {
              if (item.classList.contains('tilt-left')){
                item.classList.remove('tilt-left')
              } else if (item.classList.contains('tilt-right')) {
                item.classList.remove('tilt-right')
              }
            })
          });
        });
      },
    },
    mounted() {
      this.init();
      this.scrollListen();
    } 
  }
  
</script>
<style lang="scss" scoped>
.outer-div {
  &:after {
    background: -moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.98) 99%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.98) 99%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.98) 99%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
    content:'';
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1;
    pointer-events: none;
    transition:  all 0.4s;
  }
    &.scrolling {
      &:after {
        transition: all 0.4s;
        background: -moz-linear-gradient(left,  rgba(255,255,255,1) 12%, rgba(255,255,255,0) 50%,  rgba(255,255,255,1)88%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  rgba(255,255,255,1) 12%,rgba(255,255,255,0) 50%,rgba(255,255,255,1) 88%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  rgba(255,255,255,1) 12%,rgba(255,255,255,0),rgba(255,255,255,1) 88%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
    }
  }
  .timeline{
    &-wrapper {
      height:100vh;
      max-width:100vw;
      overflow: auto;
      display: flex;
      align-items: center;
      justify-content: baseline;
      transition: 0.4s;
     &.scrolling{
        transform:scale(0.75);
        transition: 0.4s;
      }
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
      &.tilt- {
        &left p {
          transform: rotateY(-65deg);
          transition:.4s;
        }
        &right p {
          transition:.4s;
          transform: rotateY(-65deg);
        }
      }
      p {
          transition:.4s;
      }
    }
  }
  ul {
    display: flex;
    li {
      position: relative;
      list-style: none;
      &:last-of-type {
        padding-right:40vw;
      }
    }
  }
</style>