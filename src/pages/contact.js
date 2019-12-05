import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MapContainer from '../components/map';

const Contact = () => (
	<Layout>
		<SEO title="Contact" />
		<form name="contact" method="POST" data-netlify="true">
			<p>
				<label>
					Your Name: <input type="text" name="name" />
				</label>
			</p>
			<p>
				<label>
					Your Email: <input type="email" name="email" />
				</label>
			</p>
			<p>
				<label>
					Message: <textarea name="message"></textarea>
				</label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
		<div style={{ width: '600px', height: '300px', position: 'relative' }}>
			<MapContainer></MapContainer>
		</div>
	</Layout>
);

export default Contact;
