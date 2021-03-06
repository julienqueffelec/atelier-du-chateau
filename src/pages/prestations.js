import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const LinkContainer = styled.div`
  margin-top: 50px;
`;

const Prestations = (props) => {
  const { nodes } = props.data.allContentfulPrestationsPrestationsRichTextNode;
  const {
    image1,
    image2,
    image3,
    lienImage1,
    lienImage2,
    lienImage3,
  } = props.data.allContentfulPrestations.edges[1].node;
  console.log(props.data.allContentfulPrestations);
  return (
    <Layout>
      <SEO title="Prestations" />
      <div className="prestations">
        <div
          dangerouslySetInnerHTML={{
            __html: nodes[0].childContentfulRichText.html,
          }}
        ></div>
      </div>

      <LinkContainer>
        <div className="prestations__links">
          <div className="container">
            <Link to={lienImage1}>
              <img alt={image1.title} src={image1.fixed.src} />
              <div className="overlay">
                <div className="text">{image1.title}</div>
              </div>
            </Link>
          </div>
          <div className="container">
            <Link to={lienImage2}>
              <img alt={image2.title} src={image2.fixed.src} />
              <div className="overlay">
                <div className="text">{image2.title}</div>
              </div>
            </Link>
          </div>
          <div className="container">
            <Link to={lienImage3}>
              <img alt={image3.title} src={image3.fixed.src}></img>
              <div className="overlay">
                <div className="text">{image3.title}</div>
              </div>
            </Link>
          </div>
        </div>
      </LinkContainer>
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
