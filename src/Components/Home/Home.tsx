import { Header } from "../Header/Header";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <h2 className="home__title">
                    Você está logado no <span>Controle</span> !
                </h2>

                <ul className="home__description">
                    <li>
                        Acesse o item Receitas para consultar as suas Receitas,
                    </li>
                    <li>o item Gastos para acessar os Gastos,</li>
                    <li>o item Lucros para consultar os seus Lucros,</li>
                    <li>e o item Sair para sair da sua conta!</li>
                </ul>
            </div>
        </>
    );
};

export { Home };
