import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Image from './image';
import styled from 'styled-components';

const HeaderStyles = styled.div`
	margin: 0 auto;
	width: 200px;
	padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
	<HeaderStyles>
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
	</HeaderStyles>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ''
};

export default Header;
