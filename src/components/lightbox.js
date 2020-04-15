import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import React, { Component, Fragment } from "react";
import styled from "styled-components";

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

const DialogStyles = styled.div`
  width: 100%;
  text-align: center;
  button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 5px;
  }
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
      selectedImage: null,
    };
  }

  render() {
    const { projectImg, projectTitle } = this.props;
    const { selectedImage, showLightbox } = this.state;
    return (
      <Fragment>
        <LightboxContainer>
          {projectImg.map((image) => (
            <PreviewButton
              key={image.fixed.src}
              type="button"
              onClick={() =>
                this.setState({
                  showLightbox: true,
                  selectedImage: image,
                })
              }
            >
              <img
                alt={projectTitle}
                key={image.fixed.src}
                src={image.fixed.src}
              />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
          <Dialog aria-label={selectedImage.fixed.src}>
            <DialogStyles>
              <img alt={projectTitle} src={selectedImage.fixed.src} />
              <button
                type="button"
                onClick={() => this.setState({ showLightbox: false })}
              >
                Fermer
              </button>
            </DialogStyles>
          </Dialog>
        )}
      </Fragment>
    );
  }
}
