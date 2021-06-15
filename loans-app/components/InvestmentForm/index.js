import { useState, useEffect } from "react"
import Modal from "../Modal"
import Input from "../Input"
import {Button} from "../Button"

export default function InvestmentForm({selectedLoan, setSelectedLoan, totalAvailable}) {
    //using useState/useEffect to prove the use case
    const [autoOpen, setModalOpen] = useState(true)
    const [amountPendingToBeInvested, setPending] = useState(0)
    const [amountInvested, setAmountInvested] = useState(0)
    const setInvestedValue = (e) => {
        e.preventDefault()
        const val = e.target.value
        setAmountInvested(val)
    }

    return selectedLoan.id && <Modal isOpen={!!selectedLoan.id} setOpenState={setSelectedLoan}>
            <div>
                <h3>Invest In Loan</h3>
                <h5>{selectedLoan.title}</h5>
                <p>Amount Available <small>{totalAvailable}</small></p>
                <p>Loan ends in {selectedLoan.expiry}</p>
                <form role="form">
                    <label htmlFor="investValue">
                        Investment Amount: {selectedLoan.currency}
                    </label>
                    <Input name="investValue" id="investValue" type="number" onChange={setInvestedValue} />
                    <Button label="Invest" />
                </form>
            </div>
        </Modal>
}