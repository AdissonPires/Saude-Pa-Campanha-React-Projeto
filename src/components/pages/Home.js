import styles from '../css/Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className={styles.home_container}>
      
      <h1 className={styles.title}>
        Bem-vindo ao <span>SaúdePA</span>
      </h1>
      
      <p className={styles.subtitle}>
        Seu portal de transparência para localizar unidades de saúde, 
        acompanhar campanhas de vacinação e serviços de emergência em Belém e Região.
      </p>
      
      <Link to="/unidades">
        <button className={styles.btn}>Encontrar Unidade Agora</button>
      </Link>

      {/* Se quiser colocar uma imagem depois, use a classe styles.hero_img */}
      
    </section>
  );
}

export default Home;