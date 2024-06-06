import "./styles.css";
import React, { useState } from 'react';

export default function RegisterPage() {
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage('OBRIGADA PELO ENVIO!\nVocê está ajudando com o turismo sustentável e o monitoramento costeiro das baleiras.\nEm breve seu registro estará disponível em nossa plataforma.');
    }

    return (
        <main className="register-page-main">
            <div className="register-page-header">
                <h1>VOCÊ AVISTOU UMA BALEIA?</h1>
                <p>Preencha o formulário abaixo nos contando mais </p>
                <p>informações sobre seu avistamento. Assim toda a sua</p>
                <p>comunidade poderá também saber onde elas estão. </p>
            </div>
            <div className="register-page-form-container">
                <form onSubmit={handleSubmit} className="register-page-form">
                    <input type="text" placeholder="Dia" className="register-page-input" />
                    <input type="text" placeholder="Horário" className="register-page-input" />
                    <input type="text" placeholder="Cidade" className="register-page-input" />
                    <input type="text" placeholder="Local" className="register-page-input" />
                    <input type="text" placeholder="Espécie" className="register-page-input" />
                    <input type="number" placeholder="Quantidade" className="register-page-input" />
                    <button type="submit" className="register-page-button">Enviar</button>
                </form>
                {message && <h2 className="register-page-message">{message}</h2>}
            </div>
        </main>
    );
}
