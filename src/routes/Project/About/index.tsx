import Footer from "../../../components/Footer";
import ProjectHeader from "../../../components/ProjectHeader";
import Sobre from "../../../assets/sobre.svg";
import './styles.css';

export default function About() {

    return (
        <>
            <main>
                <ProjectHeader />
                <section>
                    <div className="blv-sobre-foto">
                        <img src={Sobre} alt="Sobre" />
                    </div>
                </section>
                <section className="blv-texto-section">
                    <div className="blv-sobre-titulo">
                        <h1>
                            SOBRE O COSTA VIVA
                        </h1>
                    </div>
                    <div className="blv-texto">
                        <p>
                            O projeto Costa Viva é uma solução tecnológica inovadora que visa abordar dois problemas críticos: o risco de extinção das baleias e a prática de turismo não sustentável. Atualmente, as populações de baleias são apenas uma fração do que eram antes da caça comercial no século XX, conforme destacado pela UNEP, e sua recuperação completa pode levar várias décadas. Além disso, o turismo de avistamento de baleias, embora contribua para a conscientização e preservação das espécies, pode ser prejudicial se não for realizado de forma sustentável.
                        </p>
                    </div>
                    <div className="blv-texto">
                        <p>
                            O Costa Viva propõe uma abordagem responsável e consciente. Nossa plataforma permite que usuários descubram e compartilhem, em tempo real, os locais de avistamento de baleias, facilitando o planejamento de visitas sem comprometer a integridade dos ecossistemas marinhos.
                        </p>
                    </div>
                    <div className="blv-texto">
                        <p>
                            Ao promover o turismo sustentável, o Costa Viva busca não apenas gerar receitas significativas para as comunidades costeiras, mas também transformar a experiência de avistamento em uma oportunidade de sensibilização e defesa da vida marinha. Através da nossa iniciativa, esperamos fomentar práticas turísticas responsáveis e reforçar a importância da preservação das baleias e de seus habitats naturais.
                        </p>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}