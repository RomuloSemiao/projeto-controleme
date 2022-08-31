import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Components/Home/Home";
import { Incomes } from "../Components/Incomes/Incomes";
import { Login } from "../Components/Login/Login";
import { Profit } from "../Components/Profit/Profit";
import { Spends } from "../Components/Spends/Spends";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/incomes" element={<Incomes />} />
                <Route path="/profit" element={<Profit />} />
                <Route path="/spends" element={<Spends />} />
            </Routes>
        </BrowserRouter>
    );
};
