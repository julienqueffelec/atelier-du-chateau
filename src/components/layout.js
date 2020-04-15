import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";
import Nav from "./nav";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div id="app">
      <div className="bloc-menu-mobile">
        <Nav pageWrapId={"page-wrap"} outerContainerId={"app"} />
      </div>

      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="page">
        <div className="bloc-sidebar">
          <Sidebar />
        </div>
        <div id="page-wrap" className="wrapper">
          <main className="content">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
