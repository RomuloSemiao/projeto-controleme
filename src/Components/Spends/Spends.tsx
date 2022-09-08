import { useState } from "react";
import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { app } from "../../services/firebaseConfig";

import { Header } from "../Header/Header";

import "./Spends.scss";
import { SpendsChart } from "./SpendsChart";

const Spends = () => {
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");

    const db = getFirestore(app);

    const returnSpendsData = async () => {
        const spendsRef = collection(db, "spends");

        const q = query(spendsRef, where("value", "!=", null));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    };

    const handleSubmitDataSpends = async (
        e: React.SyntheticEvent<EventTarget>
    ) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db, "spends"), {
            value: value,
            date: date,
        });

        returnSpendsData();
        setValue("");
        setDate("");
    };

    return (
        <>
            <Header />

            <div className="spends">
                <h2 className="spends__title">Gastos</h2>

                <form
                    className="spends__form"
                    onSubmit={handleSubmitDataSpends}
                >
                    <input
                        id="value"
                        type="number"
                        placeholder="Valor"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        required
                    />

                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                        required
                    />

                    <button type="submit" onClick={() => {}}>
                        enviar
                    </button>
                </form>
            </div>
            <SpendsChart />
        </>
    );
};

export { Spends };
