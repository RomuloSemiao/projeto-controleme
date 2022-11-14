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
                        Acesse o item <b>Receitas</b> para consultar as suas Receitas,
                    </li>
                    <li>o item <b>Gastos</b> para acessar os Gastos,</li>
                    <li>o item <b>Comparativo</b> para consultar a comparação dos dados,</li>
                    <li>e o item <b>Sair</b> para sair da sua conta!</li>
                </ul>
            </div>
        </>
    );
};

export { Home };
