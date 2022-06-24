import React from 'react';
import ListaPost from '../assets/components/ListaPost';
import ListaCategorias from './ListaCategorias';

export default function Home() {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost url={"/posts"} />
    </main>
  )
}