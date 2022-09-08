import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

import { app } from "../../services/firebaseConfig";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";

export const IncomesChart = () => {
    const [dateIncomes, setDateIncomes] = useState(Array<any>);
    const [valueIncomes, setValueIncomes] = useState(Array<any>);
    const [loading, setLoading] = useState(false);

    const db = getFirestore(app);

    const fetchIncomes = async () => {
        const response = collection(db, "incomes");
        const qry = query(response, where("value", "!=", null));
        const querySnapshot: any = await getDocs(qry);

        querySnapshot.docs.map((item: any) => {
            console.log("Item", item);

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

    console.log("Date", dateIncomes);
    console.log("Value", valueIncomes);

    useEffect(() => {
        return () => {
            setLoading(true);
            fetchIncomes();
            setLoading(false);
        };
    }, []);

    return (
        <>
            {loading ? (
                <>...Carregando</>
            ) : (
                <Plot
                    data={[
                        {
                            x: [...dateIncomes], // DATAS
                            y: [...valueIncomes], // VALOR
                            type: "bar",
                            marker: { color: "black" },
                        },
                    ]}
                    layout={{
                        title: "Suas Receitas",
                    }}
                />
            )}
        </>
    );
};
