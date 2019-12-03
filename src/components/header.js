import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Image from './image';

const Header = ({ siteTitle }) => (
	<header
		style={{
			marginBottom: '1.45rem'
		}}
	>
		<div
			style={{
				margin: '0 auto',
				width: 200,
				padding: '1.45rem 1.0875rem'
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					aria-label="Logo"
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
				>
					<Image filename="logo.jpg" />
				</Link>
			</h1>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ''
};

export default Header;
