import Head from 'next/head'
import { useState, useEffect } from 'react'
import InvestmentForm from '../components/InvestmentForm'
import TotalAvailable from '../components/TotalAvailable'
import CurrentLoanList from '../components/CurrentLoanList'

import CURRENT_LOANS_DATA from './api/current-loans.json'

const VERSION = "0.0.1"

export async function getServerSideProps() {
  return {
    props: {
      loanData: CURRENT_LOANS_DATA
    }
  }
}

export default function Home({loanData}) {
  const [selectedLoan, setSelectedLoan] = useState({})
  //would synchronise with a server for data integrity

  const [totalInvestmentAvailable, setTotalInvestmentAvailable] = useState(0.0) 

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
          setTotalInvestmentAvailable={setTotalInvestmentAvailable} />

        <main className={""}>
          <h1 className="text-3xl font-bold w-4/6 mx-auto mb-10">Current Loans</h1>
          <CurrentLoanList
            loanData={loanData.loans}
            setSelectedLoan={setSelectedLoan} />
          <TotalAvailable
            totalAvailable={totalInvestmentAvailable}
            label="Total available for investments"  />
        </main>

        <footer className={""}>
          written by abdoul sy - version {VERSION}
        </footer>
      </div>
    </div>
  )
}
