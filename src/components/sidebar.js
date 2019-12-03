import React from 'react';
import { Link } from 'gatsby';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<li>
					<Link to="/atelier">Atelier</Link>
				</li>
				<li>
					<Link to="/projets">Projets</Link>
				</li>
				<li>
					<Link to="/prestations">Préstations</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
