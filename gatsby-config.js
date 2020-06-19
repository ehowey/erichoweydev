const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.erichowey.dev",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Eric Howey`,
    description: `Frontend web developer and designer, based in Calgary, Alberta. Specializing in Javascript, React, and Gatsby. Say hello and let's build something amazing together!`,
    keywords: [
      `web developer`,
      `Cochrane`,
      `web design`,
      `Calgary`,
      `Gatsby`,
      `websites`,
      `react`,
      `javascript`,
      `front end`,
      `frontend`,
      `frontend web developer`,
      `GatsbyJS`,
      `Sanity`,
      `Sanity.io`,
    ],
    author: `Eric Howey`,
    siteUrl,
    menuLinks: [
      {
        name: `Writing`,
        link: `/writing`,
        type: `internal`,
      },
      {
        name: `Me`,
        link: `#me`,
        type: `anchor`,
      },
      {
        name: `Work`,
        link: `#work`,
        type: `anchor`,
      },
      {
        name: `Contact`,
        link: `#contact`,
        type: `anchor`,
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
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteTitle: false,
        displaySiteTitleMobile: false,
        invertSiteLogo: true,
        useStickyHeader: true,
        assetPath: `content/site-assets`,
      },
    },
    `gatsby-theme-catalyst-header-top`,
    {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        basePath: "/writing",
        excerptLength: 300,
        assetPath: `content/post-assets`,
        rssTitle: `erichowey.dev RSS Feed`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
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
  ],
}
