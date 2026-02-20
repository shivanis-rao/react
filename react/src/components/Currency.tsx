import { useCurrency } from "../context/CurrencyContext";

function Currency(){
    const code =["USD","INR","EUR","JPY"];
    const {update,currency} = useCurrency();
    return(
        <div>
            <select onChange={(e) => update(e.target.value)} id="currency">
                {code.map((c) => (
                    <option key={c} value={c} selected={c===currency}   >{c}</option>
                ))}
            </select>
        </div>
    );
}
export default Currency;