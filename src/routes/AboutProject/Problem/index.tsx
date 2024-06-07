import AboutProjectHeader from "../../../components/AboutProjectHeader";
import Footer from "../../../components/Footer";
import AboutProjectInfos from "../../../components/AboutProjectInfos";

export default function Problem() {

    const description = `
        Nossa solução tecnológica visa abordar dois problemas principais: o risco de extinção das baleias e o turismo não sustentável.\n
        Segundo a UNEP, as populações de baleias hoje são uma fração do que eram antes. Biólogos estimam que atualmente existe apenas um quarto da população que existia antes do início da caça comercial no século XX. Estudos indicam que pode levar mais de 30 anos para dobrar o número atual de baleias e várias gerações para retomar os valores anteriores à caça comercial.\n
        O turismo de avistamento de baleias, apesar de contribuir positivamente para a preservação das espécies, pode causar danos quando não é praticado de forma sustentável. José Martins menciona em seu artigo sobre o turismo de observação de mamíferos aquáticos, que o turismo de vida silvestre tem o potencial de perturbar a dinâmica dos ecossistemas visitados, especialmente no caso do avistamento de baleias de barco. Ele destaca que "estudos têm demonstrado que os cetáceos apresentam alterações comportamentais em resposta ao tráfego de barcos de observação de cetáceos".\n
        As populações de baleias, drasticamente reduzidas pela caça comercial no século XX, necessitam de várias décadas para se recuperar. Ao mesmo tempo, o turismo de avistamento de baleias, embora benéfico para a conscientização e preservação, precisa ser manejado cuidadosamente para evitar impactos negativos na dinâmica dos ecossistemas marinhos. A implementação de práticas de turismo sustentável e tecnologias inovadoras são essenciais para assegurar a proteção dessas majestosas criaturas e a sustentabilidade de seus habitats naturais.
    `;

    return (
        <main>
            <AboutProjectHeader/>
            <AboutProjectInfos
                title={"PROBLEMAS A SEREM TRATADOS"}
                description={description}
            />
            <Footer />
        </main>
    );
}
