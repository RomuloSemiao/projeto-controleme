import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../context/authGoogle";

import "./Login.scss";

const Login = () => {
    const { signInGoogle, signed }: any = useContext(AuthGoogleContext);

    const siginInUser = async () => {
        await signInGoogle();
    };

    if (!signed) {
        return (
            <div className="login">
                <div className="login__container">
                    <h3 className="login__title">
                        Seja bem vindo(a) ao <span>Controle</span>!
                    </h3>

                    <button
                        onClick={siginInUser}
                        className="login__button"
                        type="submit"
                    >
                        Entrar com Google
                    </button>
                </div>
            </div>
        );
    } else {
        return <Navigate to="/home" />;
    }
};

export { Login };
