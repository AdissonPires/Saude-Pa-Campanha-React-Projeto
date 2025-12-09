import styles from '../css/Unidades.module.css';
import Card from '../layout/Card'; // Importamos o componente
import { unidadesSaude } from '../../dados/dados'; // Importamos os dados falsos

function Unidades() {
  return (
    <section className={styles.container}>
      <h2>Unidades de Saúde em Belém/Ananindeua</h2>
      <p>Encontre a unidade mais próxima de você.</p>
      
      <div className={styles.grid}>
        {/* Aqui usamos o MAP para criar os cards dinamicamente */}
        {unidadesSaude.map((item) => (
          <Card 
            key={item.id}
            id={item.id}
            nome={item.nome}
            tipo={item.tipo}
            endereco={item.endereco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </section>
  );
}
export default Unidades;