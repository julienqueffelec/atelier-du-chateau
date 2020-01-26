import React from 'react';
import Image from './image';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import Lightbox from './lightbox';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h1`
	font-weight: bold;
	font-family: 'OratorStd';
	text-transform: uppercase;
	font-size: 20px;
`;

const Content = styled.div`
	font-family: 'Avenir Next Condensed';
	font-size: 15px;
	color: #000;
	p {
		margin-bottom: 0;
		font-weight: 600;
	}
`;

const LightboxStyles = styled.div`
	button:hover {
		cursor: pointer;
	}
`;

const Project = props => {
	const { title, slug, content, image } = props.data.contentfulProjects;

	return (
		<Layout>
			<SEO title={title} />
			<Title>{title}</Title>
			<Content
				dangerouslySetInnerHTML={{ __html: content.childContentfulRichText.html }}
			></Content>
			<LightboxStyles>
				<Lightbox projectTitle={title} projectImg={image}></Lightbox>
			</LightboxStyles>
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
				fixed(width: 600) {
					src
				}
			}
		}
	}
`;
