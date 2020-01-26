import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';
import Image from '../components/image';

const IndexPage = props => {
	const { edges } = props.data.allContentfulHomepage;

	return (
		<Layout>
			<SEO title="Accueil" />

			{edges.map(hp => {
				return (
					<div key={hp.node.lienProjet} className="hp__projects">
						<Link to={hp.node.lienProjet}>
							<div className="container">
								<img
									alt={hp.node.imageDeProjet.title}
									src={hp.node.imageDeProjet.fixed.src}
								/>
								<div className="overlay">
									<div className="text">
										{hp.node.imageDeProjet.title}
									</div>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query pageQuery {
		allContentfulHomepage {
			edges {
				node {
					lienProjet
					imageDeProjet {
						title
						fixed(width: 1325) {
							src
						}
						file {
							fileName
						}
					}
				}
			}
		}
	}
`;
