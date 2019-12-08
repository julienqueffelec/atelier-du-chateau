import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

const IndexPage = () => (
	<Layout>
		<SEO title="Accueil" />
		<div className="project_1">
			<div class="container">
				<Image filename="1.jpg"></Image>
				<div class="overlay">
					<div class="text">Rénovation d'une maison de 1875</div>
					<div class="city">Brest</div>
				</div>
			</div>
			<div class="container">
				<Image filename="2.jpg"></Image>
				<div class="overlay">
					<div class="text">Rénovation d'une maison de 1875</div>
					<div class="city">Brest</div>
				</div>
			</div>
			<div class="container">
				<Image filename="3.jpg"></Image>
				<div class="overlay">
					<div class="text">Rénovation d'une maison de 1875</div>
					<div class="city">Brest</div>
				</div>
			</div>
			<div class="container">
				<Image filename="4.jpg"></Image>
				<div class="overlay">
					<div class="text">Rénovation d'une maison de 1875</div>
					<div class="city">Brest</div>
				</div>
			</div>
		</div>

		<div className="project_2">
			<div class="container">
				<Image filename="5.jpg"></Image>
				<div class="overlay">
					<div class="text">Projet en cours</div>
					<div class="city">Brest</div>
				</div>
			</div>
			<div class="container">
				<Image filename="6.jpg"></Image>
				<div class="overlay">
					<div class="text">Projet en cours</div>
					<div class="city">Brest</div>
				</div>
			</div>
			<div class="container">
				<Image filename="7.jpg"></Image>
				<div class="overlay">
					<div class="text">Projet en cours</div>
					<div class="city">Brest</div>
				</div>
			</div>
			<div class="container">
				<Image filename="8.jpg"></Image>
				<div class="overlay">
					<div class="text">Projet en cours</div>
					<div class="city">Brest</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
