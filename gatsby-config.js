module.exports = {
  siteMetadata: {
    title: `Danny Denenberg`,
    siteUrl: `https://nehalem.netlify.com`,
    description: `About %TOPICS%`,
    topics: [`node.js`, `typescript`, `javascript`],
    menu: [
      {
        name: "Home",
        path: "/"
      },
      {
        name: "About",
        path: "/about"
      }
    ],
    footerMenu: [
      {
        name: "About",
        path: "/about"
      }
    ],
    search: true,
    author: {
      name: `Danny Denenberg`,
      description: `I'm <a href="/about">Danny</a>, the guy behind this site - a blog about software development, technology and all that kind of geeky stuff.`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/dannydenenberg_`,
        linkedin: `https://www.linkedin.com/in/dannydenenberg/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/dannydenenberg`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    }
  ]
};
