import { Header } from "../Header/Header";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <h2 className="home__title">
                    Seja bem vindo ao <span>Controle</span> !
                </h2>

                <ul className="home__description">
                    <li>
                        Acesse o menu Receitas para consultar as suas Receitas,
                    </li>
                    <li>o menu Gastos para acessar os Gastos,</li>
                    <li>o menu Lucros para consultar os seus Lucros,</li>
                    <li>e o item Sair para sair da sua conta!</li>
                </ul>
            </div>
        </>
    );
};

export { Home };
