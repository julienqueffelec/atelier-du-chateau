import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';

export default props => {
	return (
		<Menu {...props}>
			<Link aria-label="Accueil page" to="/" activeClassName="active">
				Accueil
			</Link>
			<Link aria-label="Atelier page" to="/atelier" activeClassName="active">
				Atelier
			</Link>

			<Link aria-label="Project page" to="/projets" activeClassName="active">
				Projets
			</Link>

			<Link aria-label="Prestation page" to="/prestations" activeClassName="active">
				Prestations
			</Link>

			<Link aria-label="Contact page" to="/contact" activeClassName="active">
				Contact
			</Link>
		</Menu>
	);
};
