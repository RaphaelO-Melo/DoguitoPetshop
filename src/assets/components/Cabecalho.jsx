import imagem from '../img/doguito.svg';
import '../css/componentes/cabecalho.css';
import { Link } from 'react-router-dom';

export default function Cabecalho(){
    return (
        <header className="cabecalho container">
            <div className="menu-hamburger">
                <span className="menu-hambuger__icone"></span>
            </div>
            <div className="cabecalho-container">
                <Link className="flex flex--centro" to="/">
                    <img className="cabecalho__logo" src={imagem} alt="Logo doguito" />
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </Link>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><Link className='menu-item menu-item--entrar' to="#">Entrar</Link></li>
                    <li><Link className='menu-item' to="#">Produtos</Link></li>
                    <li><Link className='menu-item' to="/">Blog</Link></li>
                    <li><Link className='menu-item' to="Sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
}