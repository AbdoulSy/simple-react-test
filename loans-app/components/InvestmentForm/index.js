import { useState, useEffect } from "react"
import Modal from "../Modal"
import Input from "../Input"
import {Button} from "../Button"

export default function InvestmentForm({loanData, totalAvailable}) {
    //using useState/useEffect to prove the use case
    const [autoOpen, setModalOpen] = useState(true)
    const [amountPendingToBeInvested, setPending] = useState(0)
    const [amountInvested, setAmountInvested] = useState(0)
    const setInvestedValue = (e) => {
        e.preventDefault()
        const val = e.target.value
        setAmountInvested(val)
    }

    return <Modal setOpenState={setModalOpen} isOpen={autoOpen}>
            <div>
                <h3>Invest In Loan</h3>
                <h5>{loanData.title}</h5>
                <p>Amount Available <small>{totalAvailable}</small></p>
                <p>Loan ends in {loanData.expiry}</p>
                <form role="form">
                    <label htmlFor="investValue">
                        Investment Amount: {loanData.currency}
                    </label>
                    <Input name="investValue" id="investValue" type="number" onChange={setInvestedValue} />
                    <Button label="Invest" />
                </form>
            </div>
        </Modal>
}