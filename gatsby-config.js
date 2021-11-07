const remarkSlug = require("remark-slug")

module.exports = {
  siteMetadata: {
    title: `Eric Howey`,
    description: `Frontend web developer and designer, based in Calgary, Alberta. Specializing in Javascript, React, Gatsby, NextJS and SANITY. Say hello and let's build something amazing together!`,
    keywords: [
      `web developer`,
      `Cochrane`,
      `web design`,
      `Calgary`,
      `Gatsby`,
      `SANITY`,
      `Gatsbyjs`,
      `SANITY.io`,
      `sanity`,
      `NextJS`,
      `websites`,
      `react`,
      `javascript`,
      `front end`,
      `frontend`,
      `frontend web developer`,
      `GatsbyJS`,
      `Sanity`,
      `Sanity.io`,
      `developer`,
      `blog`,
      `tutorials`,
      `gatsby themes`,
    ],
    author: `Eric Howey`,
    siteUrl: `https://www.erichowey.dev`,
    menuLinks: [
      {
        name: `Me`,
        link: `/#me`,
      },
      {
        name: `Work`,
        link: `/#work`,
      },
      {
        name: `Hire`,
        link: `/#hire-me`,
      },
      {
        name: `Process`,
        link: `/it-starts-with-hello/`,
      },
      {
        name: `Writing`,
        link: `/writing/`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`,
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`,
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/erchwy`,
        location: `all`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/components/layout/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: `transparent`,
              quality: 50,
            },
          },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-reading-time` },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_self`,
            },
          },
        ],
        remarkPlugins: [remarkSlug],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1920,
        linkImagesToOriginal: false,
        withWebp: true,
        backgroundColor: `transparent`,
        quality: 50,
      },
    },
    `gatsby-plugin-mdx-embed`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `erichoweydev`,
        short_name: `erichoweydev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/erichowey-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
