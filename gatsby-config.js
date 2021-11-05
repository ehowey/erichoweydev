const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.erichowey.dev",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
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
    siteUrl,
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
        name: `pages`,
        path: `content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `content/site-assets`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `content/pages`,
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
            resolve: `gatsby-remark-relative-images`,
            options: {},
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
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `content/assets`,
            },
          },

          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-reading-time` },
          { resolve: `gatsby-remark-responsive-iframe` },
          { resolve: `gatsby-remark-external-links` },
        ],
        remarkPlugins: [remarkSlug],
        rehypePlugins: [],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: `transparent`,
              quality: 1920,
            },
          },
        ],
      },
    },
    `gatsby-plugin-mdx-embed`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-theme-catalyst-core`,
    //   options: {
    //     assetPath: `content/site-assets`,
    //   },
    // },
    // {
    //   resolve: `gatsby-theme-catalyst-header-top`,
    //   options: {
    //     useStickyHeader: true,
    //     useColorMode: false,
    //   },
    // },
    // {
    //   resolve: `gatsby-theme-catalyst-blog`,
    //   options: {
    //     basePath: "/writing",
    //     excerptLength: 300,
    //     assetPath: `content/site-assets`,
    //     rssTitle: `erichowey.dev RSS Feed`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `erichoweydev`,
        short_name: `erichoweydev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/site-assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@raae/gatsby-plugin-fathom`,
      options: {
        site: "FNHMMBXM",
        loadType: "defer",
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/**/*.html": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/page-data/*.json": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/app-data.json": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
        },
      },
    },
  ],
}
