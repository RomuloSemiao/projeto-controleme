import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthGoogleContext } from "../../context/authGoogle";

import "./Header.scss";

const Header = () => {
    const { signOut }: any = useContext(AuthGoogleContext);

    return (
        <div className="header">
            <h1 className="header__logo">
                <Link to="/home" className="header__logoLink">
                    Controle
                </Link>
            </h1>
            <nav className="header__navigation">
                <Link to="/home/incomes" className="header__navigationLink">
                    Receitas
                </Link>
                <Link to="/home/spends" className="header__navigationLink">
                    Gastos
                </Link>
                <Link to="/home/profit" className="header__navigationLink">
                    Comparativo
                </Link>
                <span
                    onClick={() => signOut()}
                    className="header__navigationLink"
                >
                    Sair
                </span>
            </nav>
        </div>
    );
};

export { Header };
