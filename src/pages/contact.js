import React, { useState } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MapContainer from '../components/map';

function Contact() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	function onSubmit(e) {
		e.preventDefault();
		try {
			const response = fetch('/.netlify/functions/sendmail', {
				method: 'POST',
				body: JSON.stringify(formState)
			});

			if (!response.ok) {
				//not 200 response
				return;
			}

			//all OK
		} catch (e) {
			//error
		}
	}

	function handleChange(e) {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	}

	return (
		<Layout>
			<SEO title="Contact" />
			<form
				name="contact"
				method="post"
				action="/thanks/"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				onSubmit={onSubmit}
			>
				{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
				<input type="hidden" name="form-name" value="contact" />
				<p hidden>
					<label>
						Don’t fill this out:{' '}
						<input name="bot-field" onChange={handleChange} />
					</label>
				</p>
				<p>
					<label>
						Your name:
						<br />
						<input type="text" name="name" onChange={handleChange} />
					</label>
				</p>
				<p>
					<label>
						Your email:
						<br />
						<input type="email" name="email" onChange={handleChange} />
					</label>
				</p>
				<p>
					<label>
						Message:
						<br />
						<textarea name="message" onChange={handleChange} />
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
			<div style={{ width: '600px', height: '300px', position: 'relative' }}>
				<MapContainer></MapContainer>
			</div>
			<div>
				<p>Pour tout renseignements, n'hésitez pas à me contacter :</p>
				<p>Oana Manuel</p>
				<p>07 85 58 31 68</p>
				<p>latelierduchateau@outlook.fr</p>
			</div>
		</Layout>
	);
}

export default Contact;
