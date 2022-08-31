import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Configs } from "../Components/Configs/Configs";
import { Home } from "../Components/Home/Home";
import { Incomes } from "../Components/Incomes/Incomes";
import { Login } from "../Components/Login/Login";
import { Profit } from "../Components/Profit/Profit";
import { SiginUp } from "../Components/SiginUp/SiginUp";
import { Spends } from "../Components/Spends/Spends";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/siginup" element={<SiginUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/incomes" element={<Incomes />} />
                <Route path="/profit" element={<Profit />} />
                <Route path="/spends" element={<Spends />} />
                <Route path="/configs" element={<Configs />} />
            </Routes>
        </BrowserRouter>
    );
};
