import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Lightbox from '../components/lightbox';

const Project = props => {
	const projects = props.data.allContentfulProjects.edges;
	let couvs = [];
	const couvImg = projects.map(projet => {
		return projet.node.image.filter(img => {
			if (img.title == 'COUV') {
				let az = [projet.node.slug, projet.node.title, img.fixed];
				couvs.push(az);
			}
		});
	});

	return (
		<Layout>
			<SEO title="Projets" />
			<div className="projects">
				{couvs.map(couv => {
					return (
						<div key={couv[1]} className="project">
							<div className="container">
								<Link to={`/${couv[0]}`}>
									<img alt={couv[1]} src={couv[2].src} />
									<div className="overlay">
										<div className="text">Voir le projet</div>
									</div>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

export default Project;

export const pageQuery = graphql`
	query projects {
		allContentfulProjects {
			edges {
				node {
					title
					slug
					image {
						title
						fixed {
							src
						}
					}
				}
			}
		}
	}
`;
