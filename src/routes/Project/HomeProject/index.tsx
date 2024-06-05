import Footer from '../../../components/Footer';
import ProjectHeader from '../../../components/ProjectHeader';
import BackgroundSection from '../../../components/BackgroundSection';
import backgroundImage from '../../../assets/background.svg';
import './styles.css';
import CardBaleia from '../../../components/CardBaleia';
import CardLoja from '../../../components/CardLoja';

const HomeProject: React.FC = () => {
    return (
        <>
            <ProjectHeader />
            <BackgroundSection backgroundImage={backgroundImage}>
                <div className='blv-conteudo-background'>
                    <h1>OLHOS NO OCEANO</h1>
                    <p>Monitorando Baleias e Preservando o Futuro</p>
                </div>
            </BackgroundSection>
            <section>
                <CardBaleia />
            </section>
            <section>
                <div className='blv-loja'>
                    <h2>LOJA</h2>
                    <p>
                        Ao comprar nossos produtos você estará <br />
                        apoiando a ONG Monitoramento Mirim Costeiro
                    </p>
                </div>

                <CardLoja />
            </section>
            <Footer />
        </>
    );
}

export default HomeProject;
