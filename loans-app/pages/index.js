import Head from 'next/head'
import { useState, useEffect } from 'react'
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
      currentUser:  CURRENT_USER,
    }
  }
}

export default function Home({loanData, currentUser}) {
  const [selectedLoan, setSelectedLoan] = useState({})
  //would synchronise with a server for data integrity

  const [totalInvestmentAvailable, setTotalInvestmentAvailable] = useState(currentUser.TOTAL_AVAILABLE)
  const investInLoan = (loan, user, amount) => { console.log("invest in loan", { loan, user, amount })}

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
            loanData={loanData.loans}
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
