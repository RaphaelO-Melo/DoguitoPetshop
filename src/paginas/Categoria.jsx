import '../assets/css/blog.css'
import ListaCategorias from '../assets/components/ListaCategorias'
import ListaPost from '../assets/components/ListaPost'
import {useParams, useLocation, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { busca } from '../api/api';
import SubCabecalho from '../assets/components/SubCabecalho';

export default function Categoria() {

    const { id } = useParams();
    const { pathname } = useLocation();
    const [subcategorias, setSubcategorias] = useState([]);
    
    useEffect(() => {
        busca(`/categorias/${id}`, categoria => {
            setSubcategorias(categoria.subcategorias);
        });
    }, [id]);
    
    return(
        <>
            <SubCabecalho />
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map(subcategoria => (
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
                            <Link to={`${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <ListaPost url={`/posts?categoria=${id}`}/>
        </>
    )
}