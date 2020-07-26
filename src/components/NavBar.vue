<template>
  <nav id="nav">
    <div>
      <span><router-link to="/">select</router-link></span>
      <span><router-link to="/compare">compare</router-link></span>
    </div>
    <span><router-link to="/about">About</router-link></span>
  </nav>
</template>

<style lang="scss">
#nav {
  padding: 2rem 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #dcd7bc;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    span:first-child {
      margin-bottom: 1rem;
    }
  }

  span {
    text-orientation: mixed;
    writing-mode: vertical-rl;
    text-transform: uppercase;
    font-size: 1rem;

    a {
      text-decoration: none;
      color: #2c3e50;

      &.router-link-exact-active {
        text-decoration: underline;
      }
    }
  }
}
</style>
