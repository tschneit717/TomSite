<template>
  <header>
    <div class="header-wrapper">
      <nav>
        <ul>
          <li>
            <a href="#">
              <span>Work</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Interests</span>
            </a>
          </li>
          <li class="home">
            <!-- <img src=""> -->
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderWidget',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
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
  transition:background 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out, color 0.1s ease-in-out;
  backdrop-filter:blur(0px);
  &:hover {
    background:#00000099;
    backdrop-filter:blur(3px);
    color:$white;
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
    li {
      width:20%;
      height:30px;
      a span{ 
        transition:border-bottom 0.2s ease-in-out;
        border-bottom:3px solid transparent;
        margin:0 auto;
      }
      &:hover {
        a span {
          border-bottom:3px solid $gold;
        }
      }
      &.home {
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
      }
    }
  }
}
</style>
