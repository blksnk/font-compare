<template>
  <nav id="nav">
    <div>
      <span><router-link to="/">select</router-link></span>
      <span><router-link to="/compare">compare</router-link></span>
    </div>
    <div>
      <span><router-link to="/about">About tanuki</router-link></span>
      <span>
        <a
          target="_blank"
          rel="noopener noreferer"
          href="https://www.github.com/blksnk/font-compare"
        >
          view the code
        </a>
      </span>
    </div>
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
      color: #2c3e50;

      &.router-link-exact-active {
        text-decoration: underline;
        color: #212f3d;
      }
    }

    &:hover a {
      color: #212f3d;
    }
  }
}
</style>
