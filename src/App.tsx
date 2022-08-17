import { Route, Routes } from "react-router-dom";

import { Header } from "./Components/Header/Header";
import { Incomes } from "./Components/Incomes/Incomes";
import { Profit } from "./Components/Profit/Profit";
import { Spends } from "./Components/Spends/Spends";
import { Home } from "./Components/Home/Home";
import { Configs } from "./Components/Configs/Configs";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Incomes" element={<Incomes />} />
                <Route path="/Profit" element={<Profit />} />
                <Route path="/Spends" element={<Spends />} />
                <Route path="/Configs" element={<Configs />} />
            </Routes>
        </div>
    );
}

export default App;
