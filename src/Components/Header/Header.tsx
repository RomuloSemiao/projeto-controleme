import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__logo">
                <Link to="/home" className="header__logoLink">
                    Controle
                </Link>
            </h1>
            <nav className="header__navigation">
                <Link to="/incomes" className="header__navigationLink">
                    Receitas
                </Link>
                <Link to="/spends" className="header__navigationLink">
                    Gastos
                </Link>
                <Link to="/profit" className="header__navigationLink">
                    Lucros
                </Link>
                <Link to="/configs" className="header__navigationLink">
                    Configurações
                </Link>
            </nav>
        </div>
    );
};

export { Header };
