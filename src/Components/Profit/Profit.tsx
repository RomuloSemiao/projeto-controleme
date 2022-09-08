import { useState, useEffect } from "react";

import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { app } from "../../services/firebaseConfig";

import Plot from "react-plotly.js";

import "./Profit.scss";

import { Header } from "../Header/Header";


const Profit = () => {
    const [dateSpends, setDateSpends] = useState(Array<any>);
    const [valueSpends, setValueSpends] = useState(Array<any>);
    const [dateIncomes, setDateIncomes] = useState(Array<any>);
    const [valueIncomes, setValueIncomes] = useState(Array<any>);
    const [loading, setLoading] = useState(false);

    const db = getFirestore(app);

    const fetchSpends = async () => {
        const response = collection(db, "spends");
        const qry = query(response, where("value", "!=", null));
        const querySnapshot: any = await getDocs(qry);

        querySnapshot.docs.map((item: any) => {

            setDateSpends((prevState: any) => [
                ...prevState,
                item._document.data.value.mapValue.fields.date.stringValue,
            ]);

            setValueSpends((prevState: any) => [
                ...prevState,
                item._document.data.value.mapValue.fields.value.stringValue,
            ]);


        });
    };

    const fetchIncomes = async () => {
        const response = collection(db, "incomes");
        const qry = query(response, where("value", "!=", null));
        const querySnapshot: any = await getDocs(qry);

        querySnapshot.docs.map((item: any) => {

            setDateIncomes((prevState: any) => [
                ...prevState,
                item._document.data.value.mapValue.fields.date.stringValue,
            ]);

            setValueIncomes((prevState: any) => [
                ...prevState,
                item._document.data.value.mapValue.fields.value.stringValue,
            ]);
        });
    };


    useEffect(() => {
        return () => {
            setLoading(true);
            fetchSpends();
            fetchIncomes();
            setLoading(false);
        };
    }, []);
    
    const trace1 = {
        x: [...dateIncomes], // DATAS
        y: [...valueIncomes], // VALOR
        type: "bar",
        name: "Receitas",
        marker: { color: "black" },
    };

    const trace2 = {
        x: [...dateSpends], // DATAS
        y: [...valueSpends], // VALOR
        type: "bar",
        name: "Gastos",
        marker: { color: "gray" },
    };

    const data: any = [trace1, trace2];

    const layout: any = {
        barmode: "group",
    };

    return (
        <>
            <Header />
            {loading ? (
                <>...Carregando</>
            ) : (
                <div>
                    <h2 className="profit__title">Comparativo</h2>
                    <Plot data={data} layout={layout} />
                </div>
            )}
        </>
    );
};

export { Profit };
