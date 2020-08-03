<template>
  <ViewWrapper id="home">
    <h1>make your selection</h1>

    <Retractable title="file import (automatic naming)">
      <div>
        <p>Use the area below to import local fonts.</p>
        <ImportForm />
      </div>
    </Retractable>

    <Retractable title="url import (manual naming)">
      <div>
        <p>Import web-hosted fonts by typing their direct url and name.</p>
        <UrlImportForm />
      </div>
    </Retractable>

    <ImportedFonts />
  </ViewWrapper>
</template>

<style lang="scss">
#home > h2 {
  margin-bottom: 1rem;
}
</style>
