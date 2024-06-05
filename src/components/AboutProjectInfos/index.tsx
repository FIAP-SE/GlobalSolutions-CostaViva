import "./styles.css";

interface AboutProjectInfosProps {
    title: string;
    description: string;
}

export default function AboutProjectInfos({ title, description }: AboutProjectInfosProps) {
    const formattedDescription = description.split('\n').map((line, index) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = line.split(urlRegex);

        return (
            <span key={index}>
                {parts.map((part, index) =>
                    urlRegex.test(part) ? (
                        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
                            {part}
                        </a>
                    ) : (
                        part
                    )
                )}
                <br />
            </span>
        );
    });

    return (
        <section className="blv-section-infos">
            <div className="blv-conteudo">
                <h3>{title}</h3>
                <p>{formattedDescription}</p>
            </div>
        </section>
    );
}
