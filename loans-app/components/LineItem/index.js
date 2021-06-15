import {Button} from "../Button"
import moment from "moment"

const canInvest = (totalAvailable, amount) => {
    try {
        const available = BigInt(totalAvailable)
        const amt = BigInt(amount.replace(",", ""))
        return available > 0n && available > amt
    } catch (e) {
        console.error(e)
        return false
    }
}

export default function LineItem ({ item, totalAvailable, onClick }) {
    return <li className="flex flex-column bg-white p-10 mb-10">
        <div className="flex-grow">
            <div className="flex flex-column">
                <p className="bg-gray-200 text-xl rounded w-10 text-center mx-2 align-center">{item.id}</p>
                <h6 className="font-bold text-xl flex-grow">
                    {item.title}
                </h6>
            </div>
            <p>tranche: <span className="font-bold text-2xl">{item.tranche}</span></p>
            <div className="flex flex-wrap flex-column justify-around">
                <p>Amount : <span>{item.amount}</span></p>
                <p>Available : <span>{item.available}</span></p>
            </div>
            <div className="flex  flex-wrap flex-column justify-around">
                <p>LTV : <span>{item.ltv}</span></p>
                <p>Annualised Return : <span>{item.annualised_return}</span></p>
            </div>
            <hr />
            <p>term remaining : <span>{moment().add(item.term_remaining, 's').fromNow()}</span></p>
        </div>
        <div className="w-32">
            {item.userInvested && <p className="bg-blue-100 text-green-600 font-bold">Invested</p>}
            <Button label="INVEST" onClick={onClick} disabled={!canInvest(totalAvailable, item.amount)} />
        </div>
    </li>
}