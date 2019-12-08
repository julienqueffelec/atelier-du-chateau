import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import Header from './header';
import Sidebar from './sidebar';
import Nav from './nav';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
	const [isOpen, setisOpen] = useState(false);

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
				<Nav pageWrapId={'page-wrap'} outerContainerId={'app'} />
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
