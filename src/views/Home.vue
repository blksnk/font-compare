<template>
  <ViewWrapper id="home">
    <h1>make your selection</h1>

    <h2>import</h2>
    <p>Use the area below to import local fonts.</p>
    <ImportForm />

    <p>Import webfonts by typing their url and name.</p>
    <UrlImportForm />

    <ImportedFonts />
  </ViewWrapper>
</template>

<style lang="scss" scoped>
#home > h2 {
  margin-bottom: 1rem;
}
</style>
