import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <h2 className="home__title">Seja bem vindo ao Controle!</h2>
            <p className="home__paragraph">
                Acesse o menu Receitas para consultar as suas Receitas, o menu
                Gastos para acessar os Gastos, o menu Lucros para consultar os
                seus Lucros e o menu Configurações para sair e para alterar
                especificações da sua conta!
            </p>
        </div>
    );
};

export { Home };
