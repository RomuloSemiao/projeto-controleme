import { Link } from "react-router-dom";

import "./Login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <h3 className="login__title">
                    Seja bem vindo(a) ao <span>Controle</span>!
                </h3>
                <form className="login__form">
                    <input
                        className="login__input"
                        type="email"
                        id="email"
                        placeholder="Email"
                    />
                    <input
                        className="login__input"
                        type="password"
                        id="password"
                        placeholder="Senha"
                    />
                    <button className="login__button" type="submit">
                        Entrar
                    </button>
                </form>

                <Link to="/siginup" className="login__siginup">
                    Clique aqui para se cadastrar!
                </Link>
            </div>
        </div>
    );
};

export { Login };
