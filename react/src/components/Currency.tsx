import { useDispatch } from "react-redux";
import { useCurrency } from "../context/CurrencyContext";
import { changeCurrency } from "../store/slices/currencySlices";

function Currency(){
    const code =["USD","INR","EUR","JPY"];
    const {update,currency} = useCurrency();
    const dispatch =useDispatch();
    return(
        <div>
            <select onChange={(e) => dispatch(changeCurrency(e.target.value))} id="currency">
                {code.map((c) => (
                    <option key={c} value={c} selected={c===currency}   >{c}</option>
                ))}
            </select>
        </div>
    );
}
export default Currency;