import { Link } from "react-router-dom";
import "./styles.css";
import chaveiroImg from "../../assets/chaveiro.jpeg";
import livro1Img from "../../assets/livro1.jpg";
import livro2Img from "../../assets/livro2.jpg";

export default function CardLoja() {
    return (
        <div>
            <div className="blv-loja-grid">
                <div className="blv-loja-container">
                    <Link to="/produto/1" className="card-link">
                        <div className="blv-loja-imagem">
                            <img src={chaveiroImg} alt="chaveiro" />
                        </div>
                        <div className="blv-nomevalor">
                            <p>Chaveiro de baleia</p>
                            <h6><span>R$</span>14,00</h6>
                        </div>
                    </Link>
                </div>
                <div className="blv-loja-container">
                    <Link to="/produto/5" className="card-link">
                        <div className="blv-loja-imagem">
                            <img src={livro1Img} alt="livro" />
                        </div>
                        <div className="blv-nomevalor">
                            <p>Livro Whales</p>
                            <h6><span>R$</span>140,00</h6>
                        </div>
                    </Link>
                </div>
                <div className="blv-loja-container">
                    <Link to="/produto/6" className="card-link">
                        <div className="blv-loja-imagem">
                            <img src={livro2Img} alt="livro" />
                        </div>
                        <div className="blv-nomevalor">
                            <p>Livro o conto da baleia</p>
                            <h6><span>R$</span>145,00</h6>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="ver-toda-loja-container">
                <Link to="/loja" className="ver-toda-loja-btn">Ver toda loja</Link>
            </div>
        </div>
    );
}
