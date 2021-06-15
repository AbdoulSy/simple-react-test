import Head from 'next/head'
import { useState } from 'react'
import InvestmentForm from '../components/InvestmentForm'
import TotalAvailable from '../components/TotalAvailable'
import CurrentLoanList from '../components/CurrentLoanList'

import CURRENT_LOANS_DATA from './api/current-loans.json'

const VERSION = "0.0.1"
const CURRENT_USER = {
  name: "Abdoul Sy",
  id: "2121",
  CURRENT_CURRENCY : { name:  "GBP", symbol: "£" },
  TOTAL_AVAILABLE: 10000000.0, //should come from a user service
  email: "<dreescan+lendinvest@gmail.com>",
  investments: []
}

export async function getServerSideProps() {
  return {
    props: {
      loanData: CURRENT_LOANS_DATA,
      nonce: 123,
      currentUser:  CURRENT_USER,
    }
  }
}

export default function Home({loanData, currentUser, nonce}) {
  const [selectedLoan, setSelectedLoan] = useState({})
  //would synchronise with a server for data integrity
  const [pendingTx, setPendingTx] = useState([])
  const [currentLoanData, setCurrentLoanData] = useState(loanData.loans)
  const [totalInvestmentAvailable, setTotalInvestmentAvailable] = useState(currentUser.TOTAL_AVAILABLE)
  const investInLoan = (loan, user, amount) => { 
    // add amount to loan.amount
    // add amount to loan.avalaible
    // substract amount to totalInvestmentAvailable
    // update currentLoanData
    const loanId = loan.id;
    const userId = user.id;
    const pendingNewLoan = { ...loan };
    try {
      const amt = BigInt(amount)
      const newTotalInvestmentAvailable = (BigInt(totalInvestmentAvailable) - amt).toString();
      const tx =  {
        id: `${loanId}-${userId}-${nonce}`,
        amount: amount,
        loanId: loanId,
        userId: userId,
        newTotalInvestmentAvailable
      }
      //go send the transaction validation query somewhere
      setPendingTx([ ...pendingTx, tx])
      //await fetch(/api/validation, {tx})...
      
      pendingNewLoan.amount = (BigInt(pendingNewLoan.amount.replace(",", "")) + amt).toString();
      pendingNewLoan.available = (BigInt(pendingNewLoan.available.replace(",", "")) + amt).toString();
      pendingNewLoan.userInvested = true;

      const newLoanData = currentLoanData.map(item => {
        return item.id === loanId ? pendingNewLoan : item
      })

      setCurrentLoanData(newLoanData)
      setTotalInvestmentAvailable(newTotalInvestmentAvailable)
      setSelectedLoan({})
    } catch(e) {
      //abort unclean transaction steps
      console.error(e)
    }

  }

  return (
    <div className={""}>
      <Head>
        <title>LendInvest Test</title>
        <meta name="description" content="LendInvest test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-200 h-screen">
        <InvestmentForm 
          selectedLoan={selectedLoan}
          setSelectedLoan={setSelectedLoan}
          currentUser={CURRENT_USER}
          totalAvailable={totalInvestmentAvailable}
          investInLoan={investInLoan}
          setTotalInvestmentAvailable={setTotalInvestmentAvailable} />

        <main className={""}>
          <h1 className="text-3xl font-bold w-4/6 mx-auto mb-10">Current Loans</h1>
          <CurrentLoanList
            loanData={currentLoanData}
            totalAvailable={totalInvestmentAvailable}
            setSelectedLoan={setSelectedLoan} />
          <TotalAvailable
            totalAvailable={totalInvestmentAvailable}
            currentUser={CURRENT_USER}
            label="Total available for investments"  />
        </main>

        <footer className={""}>
          written by abdoul sy - version {VERSION}
        </footer>
      </div>
    </div>
  )
}
