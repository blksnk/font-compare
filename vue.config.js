module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_fonts.scss";
          @import "@/styles/_vars.scss";
          @import "@/styles/_root.scss";
          @import "@/styles/_dark.scss";
        `,
      },
    },
  },
};
