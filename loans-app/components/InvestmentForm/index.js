import { useState, useEffect } from "react"
import moment from "moment"

import canInvest from "../_utils/CanInvest"

import Modal from "../Modal"
import Input from "../Input"
import {Button} from "../Button"

export default function InvestmentForm({selectedLoan,
    setSelectedLoan,
    currentUser,
    investInLoan}) {
    //using useState/useEffect to prove the use case
    const [amountPendingToBeInvested, setPending] = useState(0)
    const setInvestedValue = (e) => {
        e.preventDefault()
        const val = e.target.value
        setPending(val)
    }

    return selectedLoan.id ? <Modal isOpen={!!selectedLoan.id} setOpenState={setSelectedLoan}>
            <div>
                <h3 className="text-xl font-bold">Invest In Loan</h3>
                <h5>{selectedLoan.title}</h5>
                <p>Amount Available : <span>({currentUser.CURRENT_CURRENCY.symbol}) {selectedLoan.available}</span></p>
                <p>Loan ends in {moment().add(selectedLoan.term_remaining, 's').fromNow()}</p>
                <form role="form">
                    <label htmlFor="investValue">
                        Investment Amount: ({currentUser.CURRENT_CURRENCY.symbol})
                    </label>
                    <div className="flex flex-wrap flex-column">
                        <Input name="investValue" id="investValue" type="number" onChange={setInvestedValue} />
                        <Button label="Invest" role="button"
                            disabled={amountPendingToBeInvested < 100}
                            onClick={() => investInLoan(selectedLoan, currentUser, amountPendingToBeInvested)}
                         />
                    </div>
                </form>
            </div>
        </Modal> : null
}