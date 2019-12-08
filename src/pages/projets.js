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
				<Image filename="project1.jpg"></Image>
				<div class="overlay">
					<div class="text">Voir le projet</div>
				</div>
				<div className="project__title">Brest - Centre ville</div>
			</div>
			<div class="container">
				<Image filename="7.jpg"></Image>
				<div class="overlay">
					<div class="text">Voir le projet</div>
				</div>
				<div className="project__title">Brest - Guipavas</div>
			</div>
		</div>
		Projet de réagencement d’une maison de 1875, située dans le quartier du Moulin
		Blanc à Brest. Le projet s’est porté sur 3 axes, une optimisation de la
		circulation des espaces intérieurs et extérieurs, un assainissement complet des
		bases de la maison, une communication décorative entre les différents lieux de vie
		de la maison.
	</Layout>
);

export default Projets;
