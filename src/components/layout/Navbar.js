import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Saúde<span>PA</span></h1>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}><Link to="/">Início</Link></li>
        <li className={styles.item}><Link to="/unidades">Unidades</Link></li>
        <li className={styles.item}><Link to="/campanhas">Campanhas</Link></li>
        <li className={styles.item}><Link to="/sobre">Sobre</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;