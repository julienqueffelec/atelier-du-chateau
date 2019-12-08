import React, { useState } from 'react';
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

	if (typeof window !== 'undefined') {
		defaultWidth = window.innerWidth;
	}

	const [width, setWidth] = useState(defaultWidth);
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const updateWidthAndHeight = () => {
		setWidth(window.innerWidth);
	};

	React.useEffect(() => {
		window.addEventListener('resize', updateWidthAndHeight);
		return () => window.removeEventListener('resize', updateWidthAndHeight);
	});

	return (
		<div id="app">
			{width < 768 && <Nav pageWrapId={'page-wrap'} outerContainerId={'app'} />}

			<Header siteTitle={data.site.siteMetadata.title} />
			<div className="page">
				{width >= 768 && <Sidebar />}
				<div id="page-wrap" className="wrapper">
					<main className="content">{children}</main>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
