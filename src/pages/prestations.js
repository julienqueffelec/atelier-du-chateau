import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Prestations = () => (
	<Layout>
		<SEO title="Prestations" />
		<div className="prestations">
			<p className="prestations--center">
				Diplômée du Studio des Arts Déco de Paris en architecture d’intérieur et
				décoration, l'aventure continue en Bretagne avec la création de L’ATELIER
				DU CHATEAU, installé dans le quartier brestois de Saint-Marc.
			</p>
			<p className="prestations--center">
				Né de ma passion pour l’agencement, les vielles bâtisses et de mon envie
				de mettre mon expérience et mes compétences en décoration, architecture
				d'intérieur et design au service des professionnels et particuliers. Je
				vous accompagne dans votre projet d'aménagement intérieur selon vos
				envies, allant de la simple visite conseil à la conception d'un projet
				jusqu'à la réalisation des travaux.
			</p>
			<p className="prestations--center">
				Ecoute, adaptabilité, respect des normes et des bâtisses existantes,
				L’ATELIER DU CHATEAU vous propose plusieurs prestations :
			</p>
			<span className="prestations__title">
				DEUX A TROIS HEURES DE CONSEILS A DOMICILE
			</span>
			<p> A partir de 180 €</p>
			<p>
				La visite conseil s’adresse aux personnes qui ont besoin de conseils en
				décoration et agencement d’espaces, sans suivi de projet par la suite.
			</p>
			<p>
				Durant ce rendez-vous, nous mettons en relation votre mode et rythme de
				vie, vos envies, les couleurs, les matériaux et le mobilier afin de
				définir un style déco vous correspondant.
			</p>
			<p>
				Prise de vues des espaces et métré si étude plus approfondie par la suite.
			</p>
			<span className="prestations__title">
				MODIFICATION ET REAGENCEMENT DE VOTRE INTERIEUR
			</span>
			<p>>Devis et tarifs sur demande</p> 
			<p>
				Pour modifier les volumes d’un intérieur, je peux vous accompagner sur les
				différentes prestations ci-dessous :
			</p>
			<ul>
				<li>Relevé de mesure de l'existant</li>
				<li>Plusieurs propositions selon les possibilités de votre projet</li>
				<li>Plan du futur aménagement</li>
				<li>Réalisation 3D de votre futur intérieur</li>
				<li>
					Étude travaux estimative après RDV technique sur le futur chantier
					avec le(s) artisan(s)
				</li>
				<li>Sélection couleur, matières et matériaux</li>
				<li>Chiffrages définitifs avec devis d'artisans précis & détaillés</li>
			</ul>
			<span className="prestations__title">SHOPPING LIST OU SHOPPING DAY</span>
			<p>> A partir de 280 €</p>
			<p>
				La décoration est essentielle pour personnaliser les intérieurs, les
				extérieurs ou les espaces recevant du public, découvrez les conseils de
				LATELIER DU CHATEAU
			</p>
			<p>Shopping list avec références et dimensions précises des mobiliers </p>
			<p>
				Shopping day pour vous accompagner dans le choix de vos mobiliers et vous
				faire découvrir de jolies adresses.
			</p>
			<div className="prestations__contact">
				<p>
					Pour plus d’informations, contactez directement L’ATELIER DU CHATEAU,
				</p>
				<p>Oana MANUEL</p>
				<p>07 85 58 31 68</p>
				<p>latelierduchateau@outlook.fr</p>
			</div>
		</div>
		<div>
			<div className="prestations__links">
				<div class="container">
					<Link to="/">
						<Image filename="1.jpg"></Image>
						<div class="overlay">
							<div class="text">Réalisations</div>
						</div>
					</Link>
				</div>
				<div class="container">
					<Link to="/projets">
						<Image filename="salle de bain0.jpg"></Image>
						<div class="overlay">
							<div class="text">Projet en cours</div>
						</div>
					</Link>
				</div>
				<div class="container">
					<Link to="/atelier">
						<Image filename="atelier.jpg"></Image>
						<div class="overlay">
							<div class="text">L'atelier</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</Layout>
);

export default Prestations;
