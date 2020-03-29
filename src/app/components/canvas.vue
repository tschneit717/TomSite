<template>
  <div class="outer-div">
    <div class="timeline-wrapper relative">
      <ul class='timeline'>
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li class='timeline-element' v-for='item in items'>
          <div class="timeline-element__card">
            <p class="timeline-element__name">{{item.name}}</p>
            <p class="timeline-element__date">{{item.date}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="scrollbar-container">
      <div class="scrollbar-wrapper">
        <button class="scrollbar"></button>
      </div>
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
        items: data.events,
        isScrolling: false
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
      initScrollbar() {
        const ref = this;
        const scrollButton = document.querySelector('button.scrollbar');
        const scrollWrapper = document.querySelector('.scrollbar-wrapper');
        const timelineWrapper = document.querySelector('.timeline-wrapper');
        // const timelineItems = document.querySelectorAll('.timeline-element')
        // const outerDiv = document.querySelector('.outer-div')

        let active = false;
        var currentX, initialX;
        var xOffset = 0;

        function scrollStart(e) {
          if (e === 'touchstart') {
            initialX = e.touches[0].clientX - xOffset;
          } else {
            initialX = e.clientX - xOffset;
          }
          if (e.target === scrollButton) {
            active = true;
          }
        }
        function scrollEnd() {
          initialX = 0;
          xOffset = 0;
          currentX = 0;

          active = false;
          setTranslate(0, scrollButton);
        }
        function scroll(e) {
          if (active) {
          
            e.preventDefault();
            if (e.type === "touchmove") {
              currentX = e.touches[0].clientX - initialX;
            } else {
              currentX = e.clientX - initialX;
            }
            xOffset = currentX;
            if (xOffset >= 100 ) {
              xOffset = 100;
              currentX = 100;
            } else if (xOffset <= -100) {
              xOffset = -100;
              currentX = -100;
            }
            setTranslate(currentX, scrollButton);
          }
        }
        function checkScrolling() {
          let scrollStop;
          if(active) {
            scrollStop = function (callback) {
              if (!callback || typeof callback !== 'function') return;
              ref.isScrolling = setInterval(() => {
                callback();
              }, 10);
            };
            scrollStop(function() {
              timelineWrapper.scroll(timelineWrapper.scrollLeft + xOffset / 2,0, 'smooth') 
            })
          } else {
            window.clearInterval(ref.isScrolling);
            scrollStop = null;
          }
        }
        
        function setTranslate(xPos,el) {
          if (xPos === 0) {
            el.style.transition = 'all 0.4s;'
          } else {
            el.style.transition = 'all 0s;'
          }
          el.style.transform = "translateX(" + xPos + "px)";
        }
        scrollWrapper.addEventListener("mousedown", scrollStart, false);
        scrollWrapper.addEventListener("mouseup", scrollEnd, false);
        scrollWrapper.addEventListener("mousemove", scroll, false);     
        scrollWrapper.addEventListener("mousedown", checkScrolling, false);
        scrollWrapper.addEventListener("mouseup", () => {
          window.clearInterval(this.isScrolling)
        }, false);
      }
    },
    mounted() {
      this.init();
      this.initScrollbar();
      this.scrollListen();
    } 
  }
  
</script>
<style lang="scss" scoped>
.outer-div {
  &:after {
    background: -moz-linear-gradient(left,  rgba(244, 244, 239,1) 0%, rgba(244, 244, 239,0) 50%, rgba(244, 244, 239,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(244, 244, 239,1) 0%,rgba(244, 244, 239,0) 50%, rgba(244, 244, 239,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(244, 244, 239,1) 0%,rgba(244, 244, 239,0) 50%, rgba(244, 244, 239,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
        transform: scale(0.75);
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
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
      scrollbar-width: none;  /* Firefox */
      &::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
      }
      &.scrolling{
        transform:scale(0.75);
        transition: 0.4s;
      }
    }
    &-element {
      display: block;
      perspective: 1000px;
      &__name {
        font-size:1.5rem;
      }
      &__date {
        font-size:2rem;
        font-weight: 800;
      }
      &__card {
        border-radius: 10px;
        min-height:200px;
        height:40vh;
        background:$dark;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding:10px;
        transition:.4s;
        p {
          color:$light;
        }
      }
      &.tilt- {
        &left .timeline-element__card {
          transform: rotateY(-65deg);
          transition:.4s;
        }
        &right .timeline-element__card {
          transition:.4s;
          transform: rotateY(65deg);
        }
      }
    }
  }
  ul {
    display: flex;
    li {
      position: relative;
      list-style: none;
      &:last-of-type::after {
        position: relative;
        width:40vw;
        content:'';
        display:block;
      }
    }
  }
  .scrollbar {
    display: block;
    border-radius: 50%;
    height:100px;
    width:100px;
    background:$blue;
    position: absolute;
    margin:0 auto;
    border:none;
    &:hover {
      cursor:pointer;
    }
    &-wrapper {
      width:100%;
      height:100px;
      margin:0px auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-container {
      margin:-130px auto;
      overflow: hidden;
      width:100%;
      height:100px;
    }
  }
</style>