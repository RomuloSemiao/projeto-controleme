import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";

import "./Login.scss";

const Login = () => {
    const { signInGoogle }: any = useContext(AuthGoogleContext);

    return (
        <div className="login">
            <div className="login__container">
                <h3 className="login__title">
                    Seja bem vindo(a) ao <span>Controle</span>!
                </h3>

                <button
                    onClick={() => signInGoogle()}
                    className="login__button"
                    type="submit"
                >
                    Entrar com Google
                </button>
            </div>
        </div>
    );
};

export { Login };
