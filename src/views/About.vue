<template>
  <ViewWrapper id="about">
    <h1>about tanuki</h1>

    <h2>what is this website?</h2>
    <p>
      Tanuki is a simple tool designed to
      <span class="underline">test and compare</span> multiple fonts under
      various conditions and styles. <br />
      Import fonts, stored as files or accessible trough a URL.
    </p>

    <p>
      Tanuki is a passion project, developed over a couple of days by
      <span class="underline">Jean-Nicolas Veigel</span>, a freelance web
      developer and designer.
    </p>

    <p>
      The entire code for the project is fully open-sourced, and is available
      for free on
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/blksnk/font-compare"
        >GitHub</a
      >.
    </p>

    <h2>how are data and files handled?</h2>
    <p>
      Files imported to Tanuki
      <span class="bold">don't leave your computer</span>.
    </p>

    <p>
      Fonts are handled and manipulated
      <span class="underline">directly on your browser</span> and are never
      sent to a server, nor saved on any database.
    </p>

    <h2>why "tanuki"?</h2>
    <p>
      The word "tanuki" is Japanese for "racoon dog", a species that people
      often confuse with racoons.<br />
      Designers and developers alike often encounter such ambiguity when
      deciding on which fonts to use for a given project.
    </p>

    <p>
      Tanuki is designed to help deal with this issue, in a manner that aims
      to be simple to use and to understand.
    </p>

    <h2>credits</h2>
    <p>
      <span class="bold">Evan You</span> for
      <span class="underline">Vue.js</span>, the framework powering this very
      website.
    </p>
    <p>
      <span class="bold">Fatype</span> for the
      <span class="underline">Beausite</span> font, used throughout the
      project.
    </p>
  </ViewWrapper>
</template>

<style lang="scss">
#about {
  padding-right: 1rem;

  h2 {
    margin-top: 4rem;
  }

  p {
    margin-top: 1rem !important;
    margin-bottom: 1rem;
  }
}
</style>
