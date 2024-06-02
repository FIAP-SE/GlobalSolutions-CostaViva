import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo-white.svg";
import "./styles.css";
import { Link } from "react-router-dom";



export default function ProjectHeader() {
    return (
        <header className="blv-projeto-header">
            <div className="blv-projeto-header-container">
                <div className="blv-projeto-header-logo">
                    <NavLink to={"/"}>
                        <img src={logoImg} alt="logo" />
                    </NavLink>
                </div>
                <div className="blv-projeto-header-nav">
                    <nav>
                        <Link className="blv-projeto-nav" to={"/registrar"}>Registrar</Link>
                        <Link className="blv-projeto-nav" to={"/encontrar"}>Encontrar</Link>
                        <Link className="blv-projeto-nav" to={"/sobre"}>Sobre</Link>
                        <Link className="blv-projeto-nav" to={"/loja"}>Loja</Link>
                        <Link className="blv-projeto-nav" to={"/carrinho"}>Carrinho</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

