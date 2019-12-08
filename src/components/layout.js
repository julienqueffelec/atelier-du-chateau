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
	let defaultWidth;
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

	function useWindowWidth() {
		const [width, setWidth] = useState(window.innerWidth);

		useEffect(() => {
			const handleResize = () => setWidth(window.innerWidth);
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		});

		return width;
	}

	const currentWidth = useWindowWidth();
	return (
		<div id="app">
			{currentWidth < 768 && (
				<Nav pageWrapId={'page-wrap'} outerContainerId={'app'} />
			)}

			<Header siteTitle={data.site.siteMetadata.title} />
			<div className="page">
				{currentWidth >= 768 && <Sidebar />}
				<div id="page-wrap" className="wrapper">
					<main className="content">{children}</main>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
