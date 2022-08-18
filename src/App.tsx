import { useRoutes } from "react-router-dom";

import { Header } from "./Components/Header/Header";
import { Incomes } from "./Components/Incomes/Incomes";
import { Login } from "./Components/Login/Login";
import { SiginUp } from "./Components/SiginUp/SiginUp";
import { Profit } from "./Components/Profit/Profit";
import { Spends } from "./Components/Spends/Spends";
import { Home } from "./Components/Home/Home";
import { Configs } from "./Components/Configs/Configs";

import "./App.scss";

function App() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/siginup",
            element: <SiginUp />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/incomes",
            element: <Incomes />,
        },
        {
            path: "/profit",
            element: <Profit />,
        },
        {
            path: "/spends",
            element: <Spends />,
        },
        {
            path: "/configs",
            element: <Configs />,
        },
    ]);

    return (
        <div className="App">
            <Header />

            {routes}
        </div>
    );
}

export default App;
