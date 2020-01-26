import React from 'react';
import { Link } from 'gatsby';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<li>
					<Link aria-label="Accueil page" to="/" activeClassName="active">
						Accueil
					</Link>
				</li>
				<li>
					<Link
						aria-label="Atelier page"
						to="/atelier"
						activeClassName="active"
					>
						Atelier
					</Link>
				</li>
				<li>
					<Link
						aria-label="Project page"
						to="/projets"
						activeClassName="active"
					>
						Projets
					</Link>
				</li>
				<li>
					<Link
						aria-label="Prestation page"
						to="/prestations"
						activeClassName="active"
					>
						Prestations
					</Link>
				</li>
				<li>
					<Link
						aria-label="Contact page"
						to="/contact"
						activeClassName="active"
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
