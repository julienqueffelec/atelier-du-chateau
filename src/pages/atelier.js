import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const Atelier = props => {
	const { nodes } = props.data.allContentfulAtelierContentRichTextNode;
	const { src } = props.data.allContentfulAtelier.edges[0].node.image.fixed;

	return (
		<Layout>
			<SEO title="Atelier" />
			<div className="atelier">
				<div
					style={{
						width: 400
					}}
				>
					<img src={src}></img>
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: nodes[0].childContentfulRichText.html
					}}
				></div>
			</div>
		</Layout>
	);
};

export default Atelier;

export const pageQuery = graphql`
	query atelier {
		allContentfulAtelierContentRichTextNode {
			nodes {
				childContentfulRichText {
					html
				}
			}
		}
		allContentfulAtelier {
			edges {
				node {
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
