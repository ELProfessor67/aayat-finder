import style from '../../styles/footer.module.scss';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Link from 'next/link';
import {BsTelephoneFill} from 'react-icons/bs';
import {MdMail, MdLocationOn} from 'react-icons/md';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Footer(){
	return(
			<>
				<footer className={style.footer_section}>
					<div className={style.container}>
						<div className={style.f_logo}>
							<Image src={logo} alt='logo'/>
						</div>
						<div className={style.f_link}>
							<h3>Links</h3>
							<ul>
								<li>
									<span><AiOutlineArrowRight/></span>
									<Link href="/"><a>Home</a></Link>
								</li>
								<li>
									<span><AiOutlineArrowRight/></span>
									<Link href="/about"><a>About</a></Link>
								</li> 
								<li>
									<span><AiOutlineArrowRight/></span>
									<Link href="/contact"><a>Contact</a></Link>
								</li> 
							</ul>
						</div>
						<div className={style.f_serive}>
							<h3>Services</h3>
							<ul>
								<li>
									<span><AiOutlineArrowRight/></span>
									<a target='_zeeshan' href="https://zeeshan-raza.herokuapp.com/">Web Design</a> 
								</li>
								<li>
									<span><AiOutlineArrowRight/></span>
									<a target='_zeeshan' href="https://zeeshan-raza.herokuapp.com/">Web Development</a> 
								</li> 
								<li>
									<span><AiOutlineArrowRight/></span>
									<a target='_zeeshan' href="https://zeeshan-raza.herokuapp.com/">Web scrapping</a> 
								</li> 
							</ul>
						</div>
						<div className={style.f_address}>
							<h3>Have a Questions ?</h3>
							<address>
								<div>
									<p>
										<span><MdLocationOn/></span>
									 	<a href="https://goo.gl/maps/FiLxdbYmKt72HVZz7" target="_zeeshan">Uttar Pradesh, Bareilly</a>
									</p>
								</div>
								<div>
									<p>
										<span><BsTelephoneFill/></span>
									 	 <a href="tel:+917302332142">+91 7302332142</a>
									</p>
								</div>
								<div>
									<p>
										<span><MdMail/></span>
									 	 <a href="mailto:jeeshanr599@gmail.com">jeeshanr599@gmail.com</a>
									</p>
								</div>	
							</address>
						</div>
					</div>
					<div className={style.f_credits}>
						<p>Copyright © 2022 All rights reserved | This template is made with <span style={{color:"red"}}>❤</span> by Zeeshan Raza</p>
					</div>
				</footer>
		    </>
		);
}