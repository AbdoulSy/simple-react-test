import Head from 'next/head'
import { useState, useEffect } from 'react'
import Modal from '../components/Modal'
import InvestmentForm from '../components/InvestmentForm'
import TotalAvailable from '../components/TotalAvailable'
import CurrentLoanList from '../components/CurrentLoanList'

import CURRENT_LOANS_DATA from './api/current-loans.json'

VERSION = "0.0.1"

export async function getServerSideProps() {
  return {
    loanData: CURRENT_LOANS_DATA
  }
}

export default function Home({loanData}) {
  const [selectedLoan, setSelectedLoan] = useState({})
  const [totalInvestmentAvailable, setTotalInvestmentAvailable] = useState(0.0) 

  return (
    <div className={""}>
      <Head>
        <title>LendInvest Test</title>
        <meta name="description" content="LendInvest test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal>
        <InvestmentForm selectedLoan={selectedLoan} setTotalInvestmentAvailable={setTotalInvestmentAvailable} />
      </Modal>
      <div>
        <main className={""}>
          <h1>Current Loans</h1>
          <CurrentLoanList loanList={loanData} setSelectedLoan={setSelectedLoan} />
          <TotalAvailable totalInvestmentAvailable={totalInvestmentAvailable}  />
        </main>

        <footer className={""}>
          written by abdoul sy - version {VERSION}
        </footer>
      </div>
    </div>
  )
}
