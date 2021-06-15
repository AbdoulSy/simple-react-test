import LineItem from "../LineItem";

export default function CurrentLoanList({ loanData = [], setSelectedLoan }) {
    return <ul>
        {
            loanData.length && loanData.map(item => {
                return <LineItem key={item.id} item={item} onClick={() => setSelectedLoan(item)} />
            })
        }
    </ul>
}