import { useState } from "react";

import { Header } from "../Header/Header";

import "./Incomes.scss";

const Incomes = () => {
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");

    const handleSubmitData = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();

        console.log(value);
        console.log(date);

        setValue("");
        setDate("");
    };

    return (
        <>
            <Header />
            <div className="incomes">
                <h2 className="incomes__title">Receitas</h2>

                <form className="incomes__form" onSubmit={handleSubmitData}>
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
