import style from '../../styles/overlaynavbar.module.scss';
import {GrMenu, GrClose} from 'react-icons/gr';
import Link from 'next/link';
import logo from '../../public/logo.png';
import Image from 'next/image';
import {useState} from 'react';


export default function OverlayNavbar(){
	const [navActive, setNavActive] = useState(false);

	const navActiveHandler = () => {
		const nav = document.querySelector('nav');
		nav.classList.toggle('navActive');
		setNavActive(!navActive);
	}
	return(
			<>
				<header className={style.header}>
					{navActive ? <GrClose className={style.toggler} onClick={navActiveHandler} style={{width: '100px',heigth:'100px'}}/>:
					<GrMenu className={style.toggler} onClick={navActiveHandler}/>}
					<nav className={style.navbar}>
					<Image src={logo} alt='logo'/>
						<ul>
							<li className={style.nav_item}><Link href='/'><a>Home</a></Link></li>
							<li className={style.nav_item}><Link href='/about'><a>About</a></Link></li>
							<li className={style.nav_item}><Link href='/contact'><a>Contact</a></Link></li>
						</ul>
					</nav>
				</header>
			</>
		);
}