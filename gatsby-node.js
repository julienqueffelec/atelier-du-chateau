const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	return new Promise((resolve, reject) => {
		const projectTemplate = path.resolve('src/components/project.js');
		resolve(
			graphql(`
				{
					allContentfulProjects(limit: 100) {
						edges {
							node {
								id
								slug
							}
						}
					}
				}
			`).then(result => {
				if (result.errors) {
					reject(result.errors);
				}
				result.data.allContentfulProjects.edges.forEach(edge => {
					createPage({
						path: edge.node.slug,
						component: projectTemplate,
						context: {
							slug: edge.node.slug
						}
					});
				});
				return;
			})
		);
	});
};
