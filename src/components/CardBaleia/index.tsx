import { Link } from 'react-router-dom';
import "./styles.css";
import baleia1Img from "../../assets/baleia1.svg";
import baleia2Img from "../../assets/baleia2.svg";

export default function CardBaleia() {
    return (
        <div className="blv-cardbaleia-container">
            <Link to="/registrar" className="card-link">
                <div className="card-baleia">
                    <img src={baleia1Img} alt="baleia 1" />
                    <div className="overlay">
                        <h3>Eu vi uma baleia</h3>
                        <p>
                            Clique aqui para <br />
                            registrar avistamento
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/encontrar" className="card-link">
                <div className="card-baleia">
                    <img src={baleia2Img} alt="baleia 2" />
                    <div className="overlay">
                        <h3>Encontrar baleias</h3>
                        <p>
                            Clique aqui para saber <br />
                            onde elas estão agora
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
