import React from 'react';
import Image from './image';

const Footer = ({ siteTitle }) => {
	return (
		<footer
			style={{
				marginBottom: '1.45rem'
			}}
		>
			<div
				style={{
					margin: '0 auto',
					textAlign: 'center',
					maxWidth: 480,
					padding: '1.45rem 1.0875rem'
				}}
			>
				<div style={{ fontWeight: 600 }}>
					Architecture & Décoration intérieure
				</div>
				<div className="infos">
					latelierduchateau@outlook.fr / 17 rue de Pouloupry, Brest / 07 85 58
					31 68
				</div>
				<div className="social">
					<div className="instagram">
						<a
							aria-label="Instagram"
							rel="noopener noreferrer"
							href="https://instagram.com/latelierduchateaubrest"
							target="_blank"
						>
							<Image filename="instagram.jpg"></Image>
						</a>
					</div>
					<div className="facebook">
						<a
							aria-label="facebook"
							rel="noopener noreferrer"
							href="https://facebook.com/LAtelier-du-Chateau-453688348776897/"
							target="_blank"
						>
							<Image filename="facebook.jpg"></Image>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
