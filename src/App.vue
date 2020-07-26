<template>
  <div id="app">
    <router-view />
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Beausite';
  src: url('assets/font/beausite.woff') format('woff');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Beausite';
  $c-p: #2c3e50;
  $c-p-dark: #212f3d;
  $c-p-saturated: #235b81;
  $c-s: #dcd7bc;
  $c-s-dark: #c6c2a9;

  &:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
}

body {
  overflow: hidden;
}

#app {
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr 3rem;
  grid-template-rows: auto;
  overflow: hidden;
  height: 100vh;
}

h1,
h2 {
  text-transform: uppercase;
  font-weight: normal;
  color: #212f3d;
}

h1 {
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 4rem;
  text-decoration: underline;
}

h2 {
  font-size: 1rem;
  line-height: 1rem;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #212f3d;
}

p {
  color: #2c3e50;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 1rem;
}

button,
a {
  cursor: pointer;
}

button {
  background-color: #dcd7bc;
  padding: 0;
  border: none;
  color: #2c3e50;

  &.active,
  &:hover {
    text-decoration: underline;
  }
}

input,
textarea {
  resize: none;
  outline: none;
  background-color: #dcd7bc;
  border-radius: 0;
  padding: 0.25rem;
  border: 1px solid #2c3e50;
  color: #2c3e50;

  &:focus {
    border-color: #2c3e50;
  }
}
</style>
