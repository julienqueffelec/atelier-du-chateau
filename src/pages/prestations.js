import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Prestations = props => {
	const { nodes } = props.data.allContentfulPrestationsPrestationsRichTextNode;
	const {
		image1,
		image2,
		image3,
		lienImage1,
		lienImage2,
		lienImage3
	} = props.data.allContentfulPrestations.edges[0].node;
	console.log(props.data);

	return (
		<Layout>
			<SEO title="Prestations" />
			<div className="prestations">
				<div
					dangerouslySetInnerHTML={{
						__html: nodes[0].childContentfulRichText.html
					}}
				></div>
			</div>

			<div>
				<div className="prestations__links">
					<div className="container">
						<Link to={lienImage1}>
							<img src={image1.fixed.src} />
							<div className="overlay">
								<div className="text">{image1.title}</div>
							</div>
						</Link>
					</div>
					<div className="container">
						<Link to={lienImage2}>
							<img src={image2.fixed.src} />
							<div className="overlay">
								<div className="text">{image2.title}</div>
							</div>
						</Link>
					</div>
					<div className="container">
						<Link to={lienImage3}>
							<img src={image3.fixed.src}></img>
							<div className="overlay">
								<div className="text">{image3.title}</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Prestations;

export const pageQuery = graphql`
	query prestations {
		allContentfulPrestationsPrestationsRichTextNode {
			nodes {
				childContentfulRichText {
					html
				}
			}
		}
		allContentfulPrestations {
			edges {
				node {
					lienImage1
					lienImage2
					lienImage3
					image1 {
						fixed {
							src
						}
						title
					}
					image2 {
						fixed {
							src
						}
						title
					}
					image3 {
						fixed {
							src
						}
						title
					}
				}
			}
		}
	}
`;
