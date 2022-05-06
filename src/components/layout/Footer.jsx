import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(){
    return(
        <>
            <footer>
            <ul className={styles.social_list}>
                <li className={styles.social_list}><FaFacebook /></li>
                <li className={styles.social_list}><FaInstagram /></li>
                <li className={styles.social_list}><FaTwitter /></li>
            </ul>
            <p>Nosso rodapé</p>
            </footer>
        </>
    );
}

export default Footer;