let proxy = require('http-proxy-middleware');
module.exports = {
	developMiddleware: app => {
		app.use(
			'/.netlify/functions/',
			proxy({
				target: 'http://localhost:9000',
				pathRewrite: {
					'/.netlify/functions/': ''
				}
			})
		);
	},
	siteMetadata: {
		title: 'Atelier du château',
		description:
			'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
		author: '@gatsbyjs',
		siteUrl: 'https://atelier-du-chateau.netlify.com'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-robots-txt'
	]
};
