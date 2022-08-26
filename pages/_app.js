import '../styles/globals.css'
import Footer from '../src/components/Footer';
import OverlayNavbar from '../src/components/OverlayNavbar';

function MyApp({ Component, pageProps }) {
  return <>
    <OverlayNavbar/>
    <Component {...pageProps}/>
    <Footer/>
  </>
}

export default MyApp
