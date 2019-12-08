import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Projets = () => (
	<Layout>
		<SEO title="Projets" />
		<div className="projects">
			<div class="container">
				<Link to="/projet/brest-centre-ville">
					<Image filename="project1.jpg"></Image>
					<div class="overlay">
						<div class="text">Voir le projet</div>
					</div>
					<div className="project__title">Brest - Centre ville</div>
				</Link>
			</div>
			<div class="container">
				<Link to="/projet/brest-guipavas">
					<Image filename="7.jpg"></Image>
					<div class="overlay">
						<div class="text">Voir le projet</div>
					</div>
					<div className="project__title">Brest - Guipavas</div>
				</Link>
			</div>
		</div>
	</Layout>
);

export default Projets;
