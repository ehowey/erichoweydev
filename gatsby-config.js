module.exports = {
  siteMetadata: {
    title: `erichowey.dev`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    menuLinks: [{}],
    anchorLinks: [
      {
        name: `Me`,
        link: `#me`
      },
      {
        name: `Work`,
        link: `#work`
      },
      {
        name: `Contact`,
        link: `#contact`
      }
    ],
    socialLinks: [
      {
        name: `Email`,
        url: `eric@erichowey.dev`,
        location: `footer`
      },
      {
        name: `Github`,
        url: `https://www.github.com/ehowey`,
        location: `all`
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/erchwy`,
        location: `footer`
      }
    ]
  },
  plugins: [
    `gatsby-theme-catalyst-core`,
    `gatsby-theme-catalyst-onepage`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `erichoweydev`,
        short_name: `erichoweydev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    }
  ]
};
