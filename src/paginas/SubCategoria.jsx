import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { busca } from "../api/api";
import ListaCategorias from "../assets/components/ListaCategorias";
import ListaPost from "../assets/components/ListaPost";
import SubCabecalho from "../assets/components/SubCabecalho";

export default function SubCategoria(){

    const { id, idsubcategoria } = useParams();
    const { pathname } = useLocation();
    const [subcategorias, setSubcategorias] = useState([]);

    console.log(id, idsubcategoria);
    
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
                            <Link to={`/categoria/${id}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <ListaPost url={`/posts?subcategoria=${idsubcategoria}`}/>
        </>
    );
}