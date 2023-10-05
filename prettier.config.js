/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['prettier-plugin-astro'],
pluginSearchDirs: ["."],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};