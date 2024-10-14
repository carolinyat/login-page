import React from 'react';
import logo from '../assets/HE_LOGOTIPO_EXTENSO_TAGLINE_ORIGINAL.png';

function LoginPage() {
    return (
        <div className="login-page">
            <div className="login-left">

                <div className="login-message">
                    <h1>Evoluímos a cada momento.</h1>
                    <p>Otimizamos o bem-estar das pessoas por meio da Inteligência em Saúde.</p>
                </div>
            </div>

            {/* Área do lado direito com o formulário */}
            <div className="login-right">
                <div className="login-form-container">
                    <form className="login-form">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="email@exemplo.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" placeholder="********" />
                        </div>
                        <div className="form-group-termo">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">Eu aceito os <a href="#">Termos & Condições</a></label>
                        </div>
                        <button type="submit" className="login-button">Entrar</button>
                    </form>
                    <div className="login-header">
                        {/* <img src={logo} alt="Logo Healthbit" /> */}
                        <p>Não tem uma conta? <a href="#">Clique aqui!</a></p>
                    </div>
                    <div className='image-logo'>
                        <img className='logo' src={logo} alt="Logo Healthbit" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default LoginPage;
