import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

const Atelier = () => (
	<Layout>
		<SEO title="Atelier" />
		<div
			style={{
				width: 400
			}}
		>
			<Image filename="atelier.jpg"></Image>
		</div>
		<div
			style={{
				width: 400,
				textAlign: 'center',
				fontFamily: 'Avenir Next Condensed'
			}}
		>
			<p
				style={{
					fontFamily: 'OratorStd',
					marginTop: 30,
					fontSize: 16
				}}
			>
				L'atelier vous dévoile son nouveau bureau et showroom brestois dans
				quelques jours
			</p>
			<p>
				Encore un peu de patience et de travail pour vous présenter notre atelier
				de conception d'intérieurs. Suivez nous sur @latelierduchateaubrest pour
				vivre la transformation du bureau.
			</p>
		</div>
	</Layout>
);

export default Atelier;
