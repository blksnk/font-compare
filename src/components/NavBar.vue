<template>
  <nav id="nav">
    <div>
      <span><router-link to="/">select</router-link></span>
      <span><router-link to="/compare">compare</router-link></span>
    </div>
    <div>
      <span><router-link to="/about">About</router-link></span>
      <span
        ><a href="" @click.prevent="toggleDarkMode">
          {{ $store.state.isDarkMode ? 'light' : 'dark' }} mode
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode');
    },
  },
};
</script>

<style lang="scss">
#nav {
  padding: 2rem 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: $c-s;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    span {
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  span {
    text-orientation: mixed;
    writing-mode: vertical-rl;
    text-transform: uppercase;
    font-size: 1rem;

    a {
      text-decoration: none;
      color: $c-p-dark;

      &.router-link-exact-active {
        text-decoration: underline;
        color: $c-p;
      }
    }

    &:hover a {
      color: $c-p;
    }
  }
}

.dark #nav {
  background-color: $c-p;

  span {
    &:hover a {
      color: $c-s;
    }

    a {
      color: $c-s-dark;

      &.router-link-exact-active {
        text-decoration: underline;
        color: $c-s;
      }
    }
  }
}
</style>
