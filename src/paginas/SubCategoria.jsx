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
    
    useEffect(() => {
        busca(`/categorias/${id}`, categoria => {
            setSubcategorias(categoria.subcategorias);
            console.log(subcategorias);
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
                            <Link to={`${pathname}/${subcategoria}`}>
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