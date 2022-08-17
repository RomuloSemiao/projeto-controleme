import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__logo">
                <Link to="/Home" className="header__logoLink">
                    Controle
                </Link>
            </h1>
            <nav className="header__navigation">
                <Link to="/Incomes" className="header__navigationLink">
                    Receitas
                </Link>
                <Link to="/Spends" className="header__navigationLink">
                    Gastos
                </Link>
                <Link to="/Profit" className="header__navigationLink">
                    Lucros
                </Link>
                <Link to="/Configs" className="header__navigationLink">
                    Configurações
                </Link>
            </nav>
        </div>
    );
};

export { Header };
