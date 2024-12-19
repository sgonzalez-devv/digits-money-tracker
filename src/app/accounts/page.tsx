import AppAccountCard from "@/components/app-account-card";
import { CurrencyCode } from "@/enums/currencies";

export default function Accounts() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Accounts</h1>
            <p>Check your different accounts, and manage their balances.</p>

            <div className="mt-5 flex flex-wrap gap-5">
                <AppAccountCard cardTitle={"Savings Account #1"} accountGrowth={"+20.1 from last month"} accountBalance={15231.89} accountCurrency={CurrencyCode.USD} />
                <AppAccountCard cardTitle={"Savings Account #1"} accountGrowth={"+20.1 from last month"} accountBalance={15231.89} accountCurrency={CurrencyCode.USD} />
                <AppAccountCard cardTitle={"Savings Account #1"} accountGrowth={"+20.1 from last month"} accountBalance={15231.89} accountCurrency={CurrencyCode.USD} />
                <AppAccountCard cardTitle={"Savings Account #1"} accountGrowth={"+20.1 from last month"} accountBalance={15231.89} accountCurrency={CurrencyCode.USD} />
            </div>
        </div>
    )
}