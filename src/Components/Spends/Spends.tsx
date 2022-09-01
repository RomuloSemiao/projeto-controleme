import { useState } from "react";

import { Header } from "../Header/Header";

import "./Spends.scss";

const Spends = () => {
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");

    const handleSubmitDataSpends = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();

        console.log(value);
        console.log(date);

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
        </>
    );
};

export { Spends };
