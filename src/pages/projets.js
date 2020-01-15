import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Lightbox from '../components/lightbox';

const Project = props => {
	const projects = props.data.allContentfulProjects.edges;

	return (
		<Layout>
			<SEO title="Projets" />
			<div className="projects">
				{projects.map(project => {
					return (
						<div key={project.node.title} className="project">
							<div className="container">
								<Link to={project.node.slug}>
									<img src={project.node.image[0].fixed.src} />
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
						fixed {
							src
						}
					}
				}
			}
		}
	}
`;
