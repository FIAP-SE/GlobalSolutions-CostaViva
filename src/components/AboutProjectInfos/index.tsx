import "./styles.css";


interface AboutProjectHeaderProps {
    title: string;
    description: string;
}

export default function AboutProjectInfos({ title, description }: AboutProjectHeaderProps) {

    return (
        <section className="blv-section-infos">
            <div className="blv-conteudo">
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>
        </section>
    );
}