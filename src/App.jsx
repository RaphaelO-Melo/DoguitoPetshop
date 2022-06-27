import React from 'react'
import './assets/css/base/base.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './assets/components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';
import SubCategoria from './paginas/SubCategoria';

export default function App() {

  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/categoria/:id/*" element={<Categoria />} />
        <Route path="/categoria/:id/:idsubcategoria/*" element={<SubCategoria />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </Router>
  );

}