import React from 'react';
import Image from './image';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Lightbox from './lightbox';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Project = props => {
	const { title, slug, content, image } = props.data.contentfulProjects;

	return (
		<Layout>
			<SEO title={title} />
			{title}
			<div
				dangerouslySetInnerHTML={{ __html: content.childContentfulRichText.html }}
			></div>
			<Lightbox projectImg={image}></Lightbox>
		</Layout>
	);
};

export default Project;

export const pageQuery = graphql`
	query project($slug: String!) {
		contentfulProjects(slug: { eq: $slug }) {
			title
			slug
			content {
				childContentfulRichText {
					html
				}
			}
			image {
				fixed {
					src
				}
			}
		}
	}
`;
