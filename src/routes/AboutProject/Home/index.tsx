import "./styles.css";
import AboutProjectHeader from "../../../components/AboutProjectHeader";
import Footer from "../../../components/Footer";

export default function Home() {

    return (
        <main>
            <AboutProjectHeader />
            <section className="blv-video-card-container">
                <div className="blv-video-card">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/yrBm3DRIoLE?si=AFyoufVDRTGAUKwW"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="blv-integrantes">
                    <div>
                        <p className="blv-nome-grupo">
                            Nome do Grupo: Costa Viva
                        </p>
                        <p className="blv-integrantes-nomes">
                            André Luiz Viana Ribeiro rm553702 <br />
                            Bárbara Blauth Schmidt rm554124 <br />
                            Gustavo Henrique de Jesus rm553554 <br />
                            Sivaldo Stolarz de Lima rm552727 <br />
                            Paulo Sergio Morais Gonçalves rm553012
                        </p>
                    </div>
                    <div>
                        <p className="blv-descritivo">
                            Breve descritivo do projeto:
                        </p>
                        <p>
                            Nossa plataforma promove o turismo sustentável de avistamento de baleias, permitindo que usuários descubram e compartilhem em tempo real os locais de avistamento, ajudando a minimizar o impacto ambiental. Com esta iniciativa, esperamos fomentar práticas turísticas responsáveis, contribuindo para a conservação das baleias e a sustentabilidade de seus habitats naturais.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}