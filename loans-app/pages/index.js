import Head from 'next/head'

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
  return (
    <div className={""}>
      <Head>
        <title>LendInvest Test</title>
        <meta name="description" content="LendInvest test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal>
        <InvestmentForm />
      </Modal>
      <div>
        <main className={""}>
          <h1>Current Loans</h1>
          <CurrentLoanList loanList={loanData} />
          <TotalAvailable InitialLoanData={loanData} />
        </main>

        <footer className={""}>
          written by abdoul sy - version {VERSION}
        </footer>
      </div>
    </div>
  )
}
