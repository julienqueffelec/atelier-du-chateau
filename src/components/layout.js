import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import Header from './header';
import Sidebar from './sidebar';
import Nav from './nav';
import Footer from './footer';
import './layout.css';

function useWindowSize() {
	const isClient = typeof window === 'object';

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (!isClient) {
			return false;
		}

		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
}

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
	const size = useWindowSize();
	console.log(size);

	return (
		<div id="app">
			{size.width < 768 && (
				<Nav pageWrapId={'page-wrap'} outerContainerId={'app'} />
			)}

			<Header siteTitle={data.site.siteMetadata.title} />
			<div className="page">
				{size.width >= 768 && <Sidebar />}
				<div id="page-wrap" className="wrapper">
					<main className="content">{children}</main>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
