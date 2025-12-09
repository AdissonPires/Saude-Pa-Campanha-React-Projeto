import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. Importamos o BrowserRouter
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Unidades from './components/pages/Unidades';
import Campanhas from './components/pages/Campanhas';
import Sobre from './components/pages/Sobre';
import Detalhes from './components/pages/Detalhes';

function App() {
  return (
    <BrowserRouter> {/* 2. Usamos o BrowserRouter aqui (antes estava Router) */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/unidade/:id" element={<Detalhes />} />
          <Route path="/campanhas" element={<Campanhas />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter> 
  );

  
}

export default App;