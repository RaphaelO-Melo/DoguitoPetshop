import imagem from '../img/doguito.svg';
import '../css/componentes/cabecalho.css';

export default function Cabecalho(){
    return (
        <header className="cabecalho container">
            <div className="menu-hamburger">
                <span className="menu-hambuger__icone"></span>
            </div>
            <div className="cabecalho-container">
                <a className="flex flex--centro" href="/">
                    <img className="cabecalho__logo" src={imagem} alt="Logo doguito" />
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </a>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><a className='menu-item menu-item--entrar' href="#">Entrar</a></li>
                    <li><a className='menu-item' href="#">Produtos</a></li>
                    <li><a className='menu-item' href="/">Blog</a></li>
                    <li><a className='menu-item' href="Sobre">Sobre</a></li>
                </ul>
            </nav>
        </header>
    );
}