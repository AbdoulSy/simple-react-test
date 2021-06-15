import {Button} from "../Button"

export default function LineItem ({ item }) {
    return <li className="flex flex-column">
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
            <p>term remaining : <span>{item.term_remaining}</span></p>
        </div>
        <div className="w-32">
            {item.userInvested && <p>Invested</p>}
            <Button label="INVEST" />
        </div>
    </li>
}