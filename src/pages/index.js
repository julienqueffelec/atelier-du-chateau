import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

const IndexPage = () => (
	<Layout>
		<SEO title="Accueil" />
		<div className="project_1">
			<div className="container">
				<Image filename="1.jpg"></Image>
				<div className="overlay">
					<div className="text">Rénovation d'une maison de 1875</div>
					<div className="city">Brest</div>
				</div>
			</div>
			<div className="container">
				<Image filename="2.jpg"></Image>
				<div className="overlay">
					<div className="text">Rénovation d'une maison de 1875</div>
					<div className="city">Brest</div>
				</div>
			</div>
			<div className="container">
				<Image filename="3.jpg"></Image>
				<div className="overlay">
					<div className="text">Rénovation d'une maison de 1875</div>
					<div className="city">Brest</div>
				</div>
			</div>
			<div className="container">
				<Image filename="4.jpg"></Image>
				<div className="overlay">
					<div className="text">Rénovation d'une maison de 1875</div>
					<div className="city">Brest</div>
				</div>
			</div>
		</div>

		<div className="project_2">
			<div className="container">
				<Image filename="5.jpg"></Image>
				<div className="overlay">
					<div className="text">Projet en cours</div>
					<div className="city">Brest</div>
				</div>
			</div>
			<div className="container">
				<Image filename="6.jpg"></Image>
				<div className="overlay">
					<div className="text">Projet en cours</div>
					<div className="city">Brest</div>
				</div>
			</div>
			<div className="container">
				<Image filename="7.jpg"></Image>
				<div className="overlay">
					<div className="text">Projet en cours</div>
					<div className="city">Brest</div>
				</div>
			</div>
			<div className="container">
				<Image filename="8.jpg"></Image>
				<div className="overlay">
					<div className="text">Projet en cours</div>
					<div className="city">Brest</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
