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

import "./Incomes.scss";

const Incomes = () => {
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");

    const db = getFirestore(app);

    const returnIncomesData = async () => {
        const spendsRef = collection(db, "incomes");

        const q = query(spendsRef, where("value", "!=", null));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    };

    const handleSubmitDataIncomes = async (
        e: React.SyntheticEvent<EventTarget>
    ) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db, "incomes"), {
            value: value,
            date: date,
        });

        returnIncomesData();
        setValue("");
        setDate("");
    };

    return (
        <>
            <Header />
            <div className="incomes">
                <h2 className="incomes__title">Receitas</h2>

                <form
                    className="incomes__form"
                    onSubmit={handleSubmitDataIncomes}
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
        </>
    );
};

export { Incomes };
