import LineItem from "../LineItem";

export default function CurrentLoanList({ loanData = [] }) {
    return <ul>
        {
            loanData.length && loanData.map(item => {
                return <LineItem key={item.id} item={item} />
            })
        }
    </ul>
}