import React from 'react';
import ListaPost from '../assets/components/ListaPost';
import ListaCategorias from '../assets/components/ListaCategorias';
import SubCabecalho from '../assets/components/SubCabecalho';

export default function Home() {
  return (
    <main>
      <SubCabecalho />
      <ListaCategorias />
      <ListaPost url={"/posts"} />
    </main>
  )
}