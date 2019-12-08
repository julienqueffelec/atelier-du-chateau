import React from 'react';
import { Link } from 'gatsby';
import Image from '../../components/image';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const BrestMoulinBlanc = () => (
	<Layout>
		<SEO title="Brest Moulin Blanc" />
		<Link to="/projets">{'< Retour aux projets'}</Link>
		<div className="project__content">
			Projet de réagencement d’une maison de 1875, située dans le quartier du Moulin
			Blanc à Brest. Le projet s’est porté sur 3 axes, une optimisation de la
			circulation des espaces intérieurs et extérieurs, un assainissement complet
			des bases de la maison, une communication décorative entre les différents
			lieux de vie de la maison.
		</div>
		<div className="project">
			<div class="container">
				<Image filename="1.jpg"></Image>
			</div>
			<div class="container">
				<Image filename="1.jpg"></Image>
			</div>
			<div class="container">
				<Image filename="1.jpg"></Image>
			</div>
		</div>
	</Layout>
);

export default BrestMoulinBlanc;
