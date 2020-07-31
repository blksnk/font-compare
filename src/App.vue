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
  text-decoration-thickness: 0.2rem;

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
  //-webkit-font-smoothing: antialiased;
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
  margin-right: 1rem;
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
  line-height: 1.25rem;
  margin-bottom: 1rem;

  a {
    color: #212f3d;

    text-decoration: underline double;
  }
}

button,
a {
  cursor: pointer;
}

button {
  background-color: #dcd7bc;
  padding: 0.26rem 0.25rem 0 0.25rem;
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
  padding: 0.26rem 0.25rem 0 0.25rem;
  border: 1px solid #2c3e50;
  color: #2c3e50;
  // min-width: 200px;

  &:focus {
    border-color: #2c3e50;
  }

  &[type='range'] {
    -webkit-appearance: none; /*nécessaire pour Chrome */
    padding: 0; /* nécessaire pour IE */
    font: inherit;

    &::-webkit-slider-runnable-track {
      height: inherit;
      border-radius: 0;
      padding: 0.25rem;
      cursor: ew-resize;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 1rem;
      height: 1rem;
      border-radius: 0;
      background-color: #2c3e50;
      cursor: grab;
    }
  }
}

.underline {
  text-decoration: underline;
}

.bold {
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  #app {
    grid-template-columns: 1fr 2rem;
  }
}
</style>
