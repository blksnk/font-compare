<template>
  <ViewWrapper id="home">
    <h1>make your selection</h1>

    <div id="import">
      <h2>import</h2>
      <p>Use the area below to import local fonts.</p>
      <ImportForm />

      <p>Import web-hosted fonts by typing their direct url and name.</p>
    </div>
    <UrlImportForm />

    <ImportedFonts />
  </ViewWrapper>
</template>

<style lang="scss">
#home > h2 {
  margin-bottom: 1rem;
}
#import {
  margin-right: 1rem;

  h2 {
    margin-bottom: 0.5rem;
  }
}
</style>
