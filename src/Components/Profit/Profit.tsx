import { Header } from "../Header/Header";
import { IncomesChart } from "../Incomes/IncomesChart";
import { SpendsChart } from "../Spends/SpendsChart";

const Profit = () => {
    return (
        <>
            <Header />

            <div>
                <IncomesChart />
                <SpendsChart />
            </div>
        </>
    );
};

export { Profit };
