import { Link } from "react-router-dom";

import "./SiginUp.scss";

const SiginUp = () => {
    return (
        <div className="siginup">
            <div className="siginup__container">
                <h3 className="siginup__title">Cadastre-se!</h3>
                <form className="siginup__form">
                    <input
                        className="siginup__input"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="siginup__input"
                        type="password"
                        placeholder="Senha"
                    />
                    <input
                        className="siginup__input"
                        type="password"
                        placeholder="Confirme a senha"
                    />
                    <button className="siginup__button" type="submit">
                        Cadastrar
                    </button>
                </form>
                <Link to="/" className="siginup__login">
                    Voltar ao login
                </Link>
            </div>
        </div>
    );
};

export { SiginUp };
