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

export const SpendsChart = () => {
    const [dateSpends, setDateSpends] = useState(Array<any>);
    const [valueSpends, setValueSpends] = useState(Array<any>);
    const [loading, setLoading] = useState(false);

    const db = getFirestore(app);

    const fetchSpends = async () => {
        const response = collection(db, "spends");
        const qry = query(response, where("value", "!=", null));
        const querySnapshot: any = await getDocs(qry);

        querySnapshot.docs.map((item: any) => {
            console.log("Item", item);

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

    useEffect(() => {
        return () => {
            setLoading(true);
            fetchSpends();
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
                            x: [...dateSpends], // DATAS
                            y: [...valueSpends], // VALOR
                            type: "bar",
                            marker: { color: "gray" },
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
