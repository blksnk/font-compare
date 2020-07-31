<template>
  <div
    id="app"
    :class="{
      dark: $store.state.isDarkMode,
    }"
  >
    <router-view />
    <NavBar />
  </div>
</template>
