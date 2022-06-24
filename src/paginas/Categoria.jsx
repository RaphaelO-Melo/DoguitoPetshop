import '../assets/css/blog.css'
import ListaCategorias from '../assets/components/ListaCategorias'
import ListaPost from '../assets/components/ListaPost'
import {Routes, Route, useParams, useLocation} from 'react-router-dom'

export default function Categoria() {

    const { id } = useParams();
    const { pathname } = useLocation();
    
    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias />
            <ListaPost url={`/posts?categoria=${id}`}/>
        </>
    )
}