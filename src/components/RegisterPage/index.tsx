import "./styles.css";
import React, { useState } from 'react';

export default function registerPage() {
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage('OBRIGADA PELO ENVIO!\nVocê está ajudando com o turismo sustentável e o monitoramento costeiro das baleiras.\nEm breve seu registro estará disponível em nossa plataforma.');
    }

    return(
        <main>
            <div>
                <h1>VOCÊ AVISTOU UMA BALEIA?</h1>
                <p>Preencha o formulário abaixo nos contando mais </p> 
                <p>informações sobre seu avistamento. Assim toda a sua</p>  
                <p>comunidade poderá também saber onde elas estão. </p>
            </div>
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Dia" />
                    <input type="text" placeholder="Horário" />
                    <input type="text" placeholder="Cidade" />
                    <input type="text" placeholder="Local" />
                    <input type="text" placeholder="Espécie" />
                    <input type="number" placeholder="Quantidade" />
                    <button type="submit">Enviar</button>
                </form>
                {message && <h2>{message}</h2>}
            </div>
        </main>
    );
}