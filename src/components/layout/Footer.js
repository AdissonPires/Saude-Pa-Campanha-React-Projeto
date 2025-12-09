import styles from '../css/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><a href="https://www.facebook.com/facebookBrasil/"target="_blank">Facebook</a></li>
        <li><a href="https://www.instagram.com/"target="_blank">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/adisson-pires-b23bb9354/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BWpyuTEPJTh6a4hj%2FPegS%2FA%3D%3D" target="_blank">LinkedIn</a></li>
      </ul>
      <p>SaúdePA &copy; 2025 - Todos os direitos reservados.</p>
      <p>Adisson Filho - Lab. De Desenvolvimento Web</p>
    </footer>
  );
}
export default Footer;