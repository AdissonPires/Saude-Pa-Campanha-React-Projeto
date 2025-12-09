import styles from '../css/Campanhas.module.css'; // Ajuste o caminho se necessário

function Campanhas() {
  
  // Lista de links (Dados)
  const linksOficiais = [
    { nome: "Secretaria de Saúde do Pará (SESPA)", url: "http://www.saude.pa.gov.br/" },
    { nome: "Ministério da Saúde", url: "https://www.gov.br/saude" },
    { nome: "Conecte SUS", url: "https://conectesus-paciente.saude.gov.br/" },
    { nome: "Vacina Belém (Agendamento)", url: "https://belem.pa.gov.br/" },
  ];

  return (
    <section className={styles.container}>
      
      <h1 className={styles.tituloPrincipal}>Campanhas de Saúde</h1>
      <p className={styles.descricao}>
        Acompanhe as principais ações de prevenção e cuidado acontecendo em nossa região.
      </p>

      {/* Aqui viriam os Cards de Campanha (Ideia 1) no futuro */}
      <div style={{ padding: '20px', border: '1px dashed #ccc', textAlign: 'center', marginBottom: '30px' }}>
        <p>⚠️ <em>Em breve: Calendário de Vacinação atualizado.</em></p>
      </div>

      {/* --- AQUI ESTÁ A IDEIA 4 (Links Úteis) --- */}
      <div className={styles.secaoLinks}>
        <h2> Links Úteis e Oficiais</h2>
        <div className={styles.gridLinks}>
          
          {/* Usando MAP para gerar os botões (Isso conta ponto de repetição!) */}
          {linksOficiais.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnLink}
            >
            {link.nome}
            </a>
          ))}

        </div>
      </div>

    </section>
  );
}

export default Campanhas;