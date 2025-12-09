import { Link } from 'react-router-dom'; // Importe o Link
import styles from '../css/Card.module.css';

// Receba o ID aqui nas props
function Card({ id, nome, tipo, endereco, imagem }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.img} />
      <div className={styles.info}>
        <h3>{nome}</h3>
        <span className={styles.tag}>{tipo}</span>
        <p>{endereco}</p>
        
        
        <Link to={`/unidade/${id}`}>
            <button>Ver Detalhes</button>
        </Link>
        
      </div>
    </div>
  );
}
export default Card;