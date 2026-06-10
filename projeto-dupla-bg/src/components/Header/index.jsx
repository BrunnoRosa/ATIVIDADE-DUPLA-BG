import './style.css'
import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <header className="otaku-header">
            <div className="header-container">
                {/* Logo com efeito neon/mangá */}
                <NavLink to="/" className='header-logo'>
                    <h1>MY ANIME <span>LIST</span></h1>
                </NavLink>
                
                {/* Menu de Navegação */}
                <nav className="header-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        HOME
                    </NavLink>
                    <NavLink to="/produtos" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        PRODUTOS
                    </NavLink>
                    <NavLink to="/servicos" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        SERVIÇOS
                    </NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        SOBRE NÓS
                    </NavLink>
                </nav>
            </div>
            {/* Linha de energia inferior (combina com o footer) */}
            <div className="header-energy-line"></div>
        </header>
    )
}