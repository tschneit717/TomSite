<template>
  <div>
    <button class="mobile-menu-toggle" aria-label="Click here to toggle the mobile menu">///</button>
    <header>
      <div class="header-wrapper">
        <nav>
          <ul>
            <li>
              <a href="/work.html">
                <span>Work</span>
              </a>
            </li>
            <li>
              <a href="/interests.html">
                <span>Interests</span>
              </a>
            </li>
            <li class="/">
              <!-- <img src=""> -->
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/about.html">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/contact.html">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'HeaderWidget',
    props: {
      msg: String
    },
    methods: {
      toggleNavWrap() {
        const mobileNavToggle = document.querySelector('.mobile-menu-toggle');
        const headerWrapper = document.querySelector('header');
        if (mobileNavToggle) {
          mobileNavToggle.addEventListener('click', () => {
            headerWrapper.classList.toggle('active')
          })
        }
      },
    },
    mounted() {
      this.toggleNavWrap();
    },
  }
</script>

<style lang="scss" scoped>
.header-wrapper {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  @include viewport(medium) {
    display: none;
    .active & {
      display: block;
    }
  }
}
header {
  position: sticky;
  top:-20px;
  z-index: 10;
  height:80px;
  padding-bottom:20px;
  margin-bottom:-100px;
  color:$black;
  display: flex;
  align-items: flex-end;
  background:#00000000;
  transition:background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, color 0.1s ease-in-out;
  backdrop-filter:blur(0px);
  @include viewport (medium) {
    left:-600px;
    position: fixed;
    transition: 0.3s left ease-in-out;
    &.active {
      left:0;
      top:0;
      height: 100%;
      width: 100%;
      max-width: 400px;
      background:$dark-gray;
      padding-top:100px;
      align-items: flex-start;
      nav ul li a span {
        color:$white;
      }
      nav ul {
        a {
          display: block;
        }
      }
    }
  }
  &:hover {
    background:#00000099;
    backdrop-filter:blur(3px);
    color:$white;
    ul li a span{
      transition: 0.1s color ease-in-out;
      color:$white;
    }
    @include viewport (medium) {
      background:$dark-gray;
      backdrop-filter:blur(0px);
      color:$black;
      ul li a span{
        transition: 0s color ease-in-out;
        color:$black;
      }
    }
  }
}
nav {
  ul {
    list-style: none;
    padding:0;
    margin:0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @include viewport(medium) {
      flex-direction: column;
    }
    li {
      width:20%;
      height:30px;
      @include viewport(medium) {
        order:2;
        height:50px;
      }
      a span{ 
        transition:border-bottom 0.2s ease-in-out;
        border-bottom:3px solid transparent;
        margin:0 auto;
      }
      &:hover {
        a span {
          border-bottom:3px solid $gold;
          @include viewport(medium) {
            border-bottom:3px solid transparent;
          }
        }
      }
      &.home {
        @include viewport(medium) {
          order: 1;
          margin-bottom:15px;
        }
        a {
          font-size:30px;
        }
      }
      a {
        width:100%;
        height:100%;
        text-decoration: none;
        font-size:18px;
        font-weight:700;
        display: flex;
        justify-content:flex-end;
        flex-direction: column;
        color:inherit;
        @include viewport(medium) {
          text-align: left;
          height:20px;
        }
      }
    }
  }
}
  .mobile-menu-toggle {
    display:none;
    position:fixed;
    left:20px;
    top:20px;
    width:40px;
    height:40px;
    z-index: 11;
    background:$navy;
    color:$gold;
    border:none;
    font-size:22px;
    font-weight: 800;
    @include viewport(medium) {
      display: block;
    }
  }
</style>
