import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Components/Home/Home";
import { Incomes } from "../Components/Incomes/Incomes";
import { Login } from "../Components/Login/Login";
import { Profit } from "../Components/Profit/Profit";
import { Spends } from "../Components/Spends/Spends";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<PrivateRoutes />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/incomes" element={<Incomes />} />
                    <Route path="/home/spends" element={<Spends />} />
                    <Route path="/home/profit" element={<Profit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
