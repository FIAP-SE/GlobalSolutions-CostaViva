import AboutProjectHeader from "../../../components/AboutProjectHeader";
import Footer from "../../../components/Footer";
import AboutProjectInfos from "../../../components/AboutProjectInfos";

export default function Study() {
    const description = `
        UNEP, 2024. Disponível em: \n https://www.unep.org/pt-br/noticias-e-reportagens/story/protecao-das-baleias-nova-solucao-para-mudanca-climatica\n
        Guia de Observação de Baleias, Instituto Baleia Jubarte, 2024. Disponível em: https://www.baleiajubarte.org.br/_files/ugd/2d15f2_6d647b894e8444c093f0e5a67ec92fc5.pdf\n
        Instituto Baleia Jubarte, 2024. Disponível em: https://www.baleiajubarte.org.br/observacaodebaleias\n
        Turismo de Observação de Mamíferos Aquáticos: benefícios, impactos e estratégias, José Martins. Disponível em: https://periodicos.unifesp.br/index.php/ecoturismo/article/download/6614/4223/32974
    `;

    return (
        <main>
            <AboutProjectHeader/>
            <AboutProjectInfos 
                title={"ESTUDOS"} 
                description={description}
            />
            <Footer/>
        </main>
    );
}
