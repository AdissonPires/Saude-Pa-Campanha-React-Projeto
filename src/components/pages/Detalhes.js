import { useParams, Link } from 'react-router-dom';
import styles from '../css/Detalhes.module.css'; // Vamos criar esse CSS no passo 2
import { unidadesSaude } from '../../dados/dados'; // Importa sua lista de hospitais

function Detalhes() {
  const { id } = useParams(); // Pega o número da URL (ex: 1)
  
  // Procura no arquivo de dados qual hospital tem esse ID
  // O parseInt garante que o texto "1" vire o número 1
  const hospital = unidadesSaude.find(item => item.id === parseInt(id));

  // Se o usuário digitar um ID que não existe (ex: /unidade/999)
  if (!hospital) {
    return (
      <div className={styles.container}>
        <h2>Hospital não encontrado!</h2>
        <Link to="/unidades" className={styles.btnVoltar}>Voltar</Link>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <Link to="/unidades" className={styles.btnVoltar}>← Voltar</Link>
      
      <div className={styles.detalheCard}>
        <img src={hospital.imagem} alt={hospital.nome} className={styles.imgGrande} />
        
        <div className={styles.info}>
          <h1>{hospital.nome}</h1>
          <span className={styles.tag}>{hospital.tipo}</span>
          
          <p className={styles.endereco}>📍 {hospital.endereco}</p>
          <p className={styles.telefone}>📞 {hospital.telefone}</p>
          
          {/* Texto fictício para encher linguiça */}
          <div className={styles.descricao}>
            <h3>Sobre a Unidade</h3>
            <p>
              Esta unidade oferece atendimento especializado para a região. 
              Conta com equipe multidisciplinar e funcionamento de acordo com as normas da SESPA.
              Ligue antes de ir para confirmar a disponibilidade de atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detalhes;