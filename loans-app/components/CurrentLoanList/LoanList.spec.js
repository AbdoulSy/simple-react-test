/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { render, waitFor, screen } from '@testing-library/react'
 import '@testing-library/jest-dom/extend-expect'
 import CurrentLoanList from './'

describe("Given <CurrentLoanList /> and _LoanData", () => {
    const _LoanData = [
        {
            "id": "1",
            "title": "Voluptate et sed tempora qui quisquam.",
            "tranche": "A",
            "available": "11,959",
            "annualised_return": "8.60",
            "term_remaining": "864000",
            "ltv": "48.80",
            "amount": "85,754"
          },
          {
            "id": "5",
            "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
            "tranche": "B",
            "available": "31,405",
            "annualised_return": "7.10",
            "term_remaining": "1620000",
            "ltv": "48.80",
            "amount": "85,754"
          },
          {
            "id": "12",
            "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
            "tranche": "C",
            "available": "12,359",
            "annualised_return": "4.80",
            "term_remaining": "879000",
            "ltv": "48.80",
            "amount": "85,754"
          }
    ]
    describe("When rendered by a User", () => {
        beforeEach(async () => {
            render(<CurrentLoanList loanData={_LoanData} />)
              
            await waitFor(() => screen.getByRole('list'))
        })
        it("should list all current loans", () => {
            expect(screen.getByText("Voluptate et sed tempora qui quisquam.")).toBeInTheDocument()
            expect(screen.getByText("Consectetur ipsam qui magnam minus dolore ut fugit.")).toBeInTheDocument()
            expect(screen.getByText("Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.")).toBeInTheDocument()
        })
        describe("And a user clicks on a loan in the list", () => {
            it.todo("should render the <InvestmentForm /> in the document")
        })
    })
})