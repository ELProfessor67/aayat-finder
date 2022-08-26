import style from '../styles/contact.module.scss';
import {useState} from 'react';
import Head from 'next/head';

export default function Contact(){
	const [form, setForm] = useState({
		name : '',
		email : '',
		subject : '',
		message : '',
	});
	const handleForm = (e) => {
		setForm({
			...form,
			[e.target.name] : e.target.value
		});
	}


	const handleSubmit = async (e) => {
		e.preventDefault();
		try{
			let res = await fetch('https://formspree.io/f/mnqwwkea',{
			method: 'POST', // or 'PUT'
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(form),
		});
		res = await res.json();
		if(res.ok){
			alert('message send successfully');
			setForm({
				name : '',
				email : '',
				subject : '',
				message : '',
			});
		}else{
			alert('message send failed');
		}
		// console.log(res);

	}catch(err){
		alert(err.message);
	}
	}

	return(
			<>
				<Head>
			        <title>Ayyat Finder Contact</title>
			    </Head>
				<section className={style.contact_section}>
					<h2 className={style.common_heading}>Contact Us</h2>
					<form className={style.container} onSubmit={handleSubmit}>
						<div className={style.two_col}>
							<div className={style.flex_col}>
								<label htmlFor='name'>Name : </label>
								<input type='text' id='name' name='name' value={form.name} onChange={handleForm} placeholder='Enter Your Name' className={style.input} autoComplete="true" required/>
							</div>
							<div className={style.flex_col}>
								<label htmlFor='email'>Email : </label>
								<input type='email' id='email' name='email' value={form.email} onChange={handleForm} placeholder='Enter Your Email' className={style.input} autoComplete="true" required/>
							</div>
						</div>
						<div className={style.flex_col}>
							<label htmlFor='subject'>Subject : </label>
							<input type='text' id='subject' name='subject' value={form.subject} onChange={handleForm} placeholder='Enter Your Subject' className={style.input} autoComplete="true" required/>
						</div>
						<div className={style.flex_col}>
							<label htmlFor='message'>Message : </label>
							<textarea type='text' id='message' name='message' value={form.message} onChange={handleForm} placeholder='Write somethig here...' className={style.input} autoComplete="true" required/>
						</div>
						<div className={style.flex_col}>
							<button className={style.btn}>Submit</button>
						</div>
					</form>
				</section>
			</>
		);
}