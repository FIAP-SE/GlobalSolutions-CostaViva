import "./styles.css";
import logoImg from "../../assets/logo-black.svg";

export default function Footer() {

    return (
        <footer>
            <div className="blv-footer-container">
                <div>
                    <img src={logoImg} alt="logo" />
                </div>
                <div>
                    <p>FIAP 2024 <br />
                        Protótipo estudantil <br />
                        Andre, Bárbara, Gustavo, Paulo Sergio, e Silvaldo
                    </p>
                </div>
            </div>

        </footer>

    );
}