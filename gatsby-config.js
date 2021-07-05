/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 const config = require("./src/data/config");

module.exports = {
  siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
		locationAdressRoute: config.locationAdressRoute,
    companyName: config.companyName,
    city: config.address.city,
    street: config.address.street,
    code: config.address.code,
    email: config.contact.email,
    phone: config.contact.phone,
    phoneCode: config.contact.phoneCode,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: true,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Essentials',
        short_name: 'Essentials',
        start_url: '/',
        background_color: '#639',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: `src/assets/images/main/logo.png`,
      },
    },
    {
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/query/portfolio/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/query/sections/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `features`,
        path: `${__dirname}/src/query/features/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-svgr',
    {
			resolve: "gatsby-plugin-anchor-links",
			 			options: {
							offset: -300
						} 
		},
    `gatsby-plugin-polyfill-io`,
  ],
}
