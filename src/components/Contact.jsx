import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../HOC';
import { slideIn } from '../utils/motion';

//template_j6kq8pc
//service_7javjql
//E1G8qHzSpH6dQHvXS

const Contact = () => {
	const formRef = useRef();

	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);
		emailjs
			.send(
				'service_7javjql',
				'template_j6kq8pc',
				{
					from_name: form.name,
					to_name: 'Sanyam',
					from_email: form.email,
					to_email: 'sanyamk30@gmail.com',
					message: form.message
				},
				'E1G8qHzSpH6dQHvXS'
			)
			.then(
				() => {
					setLoading(false);
					alert('Thankyou, I will get back to you as soon as possible');
					setForm({ name: '', email: '', message: '' });
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert('Something went wrong');
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}> Contact</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4"> Your name</span>
						<input
							type="text"
							name="name"
							value={form.value}
							placeholder="What's your name"
							onChange={handleChange}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4"> Your email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							placeholder="What's your email"
							onChange={handleChange}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4"> Your message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							placeholder="What do you want to say ?"
							onChange={handleChange}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

const wrappedContact = SectionWrapper(Contact, 'contact');

export default wrappedContact;
