/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InvestmentForm from "./"

describe("Given <InvestmentForm />", () => {
    describe("And `_LoanData` and `_TotalInvestmentAvailable and _currentUser`", () => {
        const _LoanData = {
            "id": "1",
            "title": "Voluptate et sed tempora qui quisquam.",
            "tranche": "A",
            "available": "11,959",
            "annualised_return": "8.60",
            "term_remaining": "864000",
            "ltv": "48.80",
            "amount": "85,754"
        }
        const _currentUser = {
            name: "Abdoul Sy",
            id: "2121",
            CURRENT_CURRENCY : { name:  "GBP", symbol: "£" },
            TOTAL_AVAILABLE: 10000000.0, //should come from a user service
            email: "<dreescan+lendinvest@gmail.com>",
            investments: []
        }
        const _TotalInvestmentAvailable = 1000000;

        describe("When rendered by a User", () => {
            beforeEach(async () => {
                render(<InvestmentForm selectedLoan={_LoanData} setSelectedLoan={jest.fn()} totalAvailable={_TotalInvestmentAvailable} currentUser={_currentUser} />)
              
                await waitFor(() => screen.getByRole('form'))
            })
            it("should show an <Input />", () => {
                expect(screen.getByRole('input')).toBeInTheDocument()
            })
            it.todo("should show the correct `_LoanData`")
            it.todo("should show a <CloseButton />")
    
            describe("And a user has clicked on the <CloseButton />", () => {
                it.todo("should remove the <InvestmentForm />")
            })
            describe("And a user has entered valid numeric value in the <Input />", () => {
                it.todo("should update the status of the <Button /> to active")
    
                describe("And a user has pressed on the invest <Button />", () => {
                    it.todo("should remove the <InvestmentForm />")
                    it.todo("should decrease the amount of `_LoanData.loanAmount`")
                    it.todo("should decrease the amount of `_TotalInvestmentAvailable`")
                    it.todo("should update `_LoanData` to reflect that an investment has been made")
                })
            })
            describe("And a user has entered INVALID value in the <Input />", () => {
                it.todo("should NOT update the status of the <Button /> to active")
            })
        })
    })
})