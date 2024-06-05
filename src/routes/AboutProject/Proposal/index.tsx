import AboutProjectHeader from "../../../components/AboutProjectHeader";
import Footer from "../../../components/Footer";
import AboutProjectInfos from "../../../components/AboutProjectInfos";

export default function Proposal() {
    const description = `
        Nossa solução tecnológica pretende solucionar os problemas apresentados através de uma plataforma que promove o turismo de avistamento de baleias.\n
        Segundo o site do Instituto Baleia Jubarte, atualmente, o turismo de observação de baleias é praticado em mais de 100 países e territórios, gerando receitas para as comunidades costeiras que excedem dois bilhões de dólares. O site também menciona que, quando praticado de forma sustentável e seguindo as normas legais, o Turismo de Observação de Baleias não impacta negativamente nem os indivíduos nem as populações das baleias-alvo.\n
        Além disso, o contato direto da população com a majestosa presença das baleias é uma experiência inesquecível que tem o potencial de sensibilizar e transformar muitos em defensores da vida marinha, contribuindo positivamente para ações de preservação das espécies.\n
        Por isso, através do nosso site, os usuários poderão pesquisar e descobrir exatamente os locais onde foram avistadas baleias, facilitando assim o avistamento desses gigantes mamíferos. A plataforma será alimentada pelos próprios usuários, que poderão inserir dados de avistamento em tempo real, mantendo todos os dados atualizados.\n
        Nossa plataforma permitirá aos usuários localizar facilmente os pontos de avistamento de baleias, contribuindo para uma experiência enriquecedora e consciente. Com esta iniciativa, esperamos fomentar o turismo sustentável e reforçar a importância da preservação das baleias e seus habitats naturais.
    `;

    return (
        <main>
            <AboutProjectHeader/>
            <AboutProjectInfos 
                title={"COMO SERÁ RESOLVIDO"} 
                description={description}
            />
            <Footer/>
        </main>
    );
}
