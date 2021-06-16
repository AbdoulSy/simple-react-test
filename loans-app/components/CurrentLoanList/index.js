import LineItem from "../LineItem";

export default function CurrentLoanList({
  loanData,
  setSelectedLoan,
  totalAvailable,
}) {
  return (
    <ul className="w-4/6 mx-auto">
      {loanData.length &&
        loanData.map((item) => {
          return (
            <LineItem
              key={item.id}
              item={item}
              onClick={() => setSelectedLoan(item)}
              totalAvailable={totalAvailable}
            />
          );
        })}
    </ul>
  );
}
