import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ImageStyle = styled.div`
  width: 400px;
`;

const Atelier = (props) => {
  const { nodes } = props.data.allContentfulAtelierContentRichTextNode;
  const { fixed, title } = props.data.allContentfulAtelier.edges[0].node.image
    ? props.data.allContentfulAtelier.edges[0].node.image
    : { title: null, fixed: null };

  return (
    <Layout>
      <SEO title="Atelier" />
      <div className="atelier">
        {title && fixed && (
          <ImageStyle>
            <img alt={title} src={fixed.src}></img>
          </ImageStyle>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: nodes[0].childContentfulRichText.html,
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
