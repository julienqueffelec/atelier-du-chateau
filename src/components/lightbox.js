import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const LightboxContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 5px;
`;

const PreviewButton = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	margin: 0;
`;

export default class Lightbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showLightbox: false,
			selectedImage: null
		};
	}

	render() {
		const { projectImg } = this.props;
		const { selectedImage, showLightbox } = this.state;
		return (
			<Fragment>
				<LightboxContainer>
					{projectImg.map(image => (
						<PreviewButton
							key={image.fixed.src}
							type="button"
							onClick={() =>
								this.setState({
									showLightbox: true,
									selectedImage: image
								})
							}
						>
							<img key={image.fixed.src} src={image.fixed.src} />
						</PreviewButton>
					))}
				</LightboxContainer>
				{showLightbox && (
					<Dialog aria-label={selectedImage.fixed.src}>
						<img src={selectedImage.fixed.src} />
						<button
							type="button"
							onClick={() => this.setState({ showLightbox: false })}
						>
							Fermer
						</button>
					</Dialog>
				)}
			</Fragment>
		);
	}
}
