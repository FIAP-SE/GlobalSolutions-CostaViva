import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo-white.svg";
import "./styles.css";

interface CustomNavLinkProps {
    to: string;
    children: React.ReactNode;
}

export default function AboutProjectHeader() {
    return (
        <header className="blv-header">
            <div className="blv-header-container">
                <div className="blv-header-logo">
                    <NavLink to={"/"} className="blv-navlink-logo" id="logo-link">
                        <img src={logoImg} alt="logo" />
                    </NavLink>
                </div>
                <div className="blv-header-nav">
                    <nav>
                        <CustomNavLink to={"/home"}>Home</CustomNavLink>
                        <CustomNavLink to={"/problemas"}>Problemas</CustomNavLink>
                        <CustomNavLink to={"/estudos"}>Estudos</CustomNavLink>
                        <CustomNavLink to={"/propostas"}>Propostas</CustomNavLink>
                        <NavLink className="blv-navlink blv-header-button" to={"/projeto"}>Ver projeto</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

function CustomNavLink({ to, children }: CustomNavLinkProps) {
    const { pathname } = useLocation();
    const isActive = pathname === to || (pathname === "/" && to === "/home");
    const activeClassName = isActive ? 'active' : '';

    return (
        <NavLink to={to} className={`blv-navlink ${activeClassName}`}>
            {children}
        </NavLink>
    );
}
