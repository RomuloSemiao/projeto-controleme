import { Link } from "react-router-dom";

import style from "./Header.module.scss";

const Header = () => {
    return (
        <div className={style.header}>
            <h1 className={style.header__title}>ContoleMe</h1>
            <nav className={style.header__navigation}>
                <Link to="/Incomes" className={style.header__navigationLink}>
                    Incomes
                </Link>
                <Link to="/Spends" className={style.header__navigationLink}>
                    Spends
                </Link>
                <Link to="/Profit" className={style.header__navigationLink}>
                    Profit
                </Link>
            </nav>
        </div>
    );
};

export { Header };
