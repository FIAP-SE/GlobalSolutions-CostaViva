import Footer from '../../../components/Footer';
import ProjectHeader from '../../../components/ProjectHeader';
import Mapa from "../../../assets/mapa.svg";
import './styles.css';

export default function Finding() {

    return (
        <>
            <ProjectHeader />
            <section>
                <div className='blv-mapa-titulo'>
                    <h1>
                    VOCÊ QUER AVISTAR UMA BALEIA?
                    </h1>
                </div>
                <div className='blv-mapa-subtitulo'>
                    <p>
                    Pesquise no mapa abaixo quais foram os locais onde as baleias foram <br /> avistadas recentemente e desfrute da beleza desses animais
                    </p>
                </div>
                <div className='blv-mapa'>
                    <img src={Mapa} alt="Mapa" />
                </div>
            </section>
            <Footer />
        </>
    );
}