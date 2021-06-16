/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { render, waitFor, screen } from '@testing-library/react'
 import '@testing-library/jest-dom/extend-expect'
import LineItem from "."

describe("Given <LineItem /> and `_item`", () => {
    describe("When rendered by a User", () => {
        it("should show a card with `_item` and a <Button />", async () => {
            const _item = {
                "id": "1",
                "title": "Voluptate et sed tempora qui quisquam.",
                "tranche": "A",
                "available": "11,959",
                "annualised_return": "8.60",
                "term_remaining": "864000",
                "ltv": "48.80",
                "amount": "85,754"
            }
            render(<LineItem item={_item} />)
              
            await waitFor(() => screen.getByRole('listitem'))
          
            expect(screen.getByRole('listitem')).toHaveTextContent("Voluptate et sed tempora qui quisquam.")

            expect(screen.getByRole('button')).toHaveTextContent("INVEST")

        })

        describe("And a user has invested", () => {
            it("should show a card with `_item` and a <Button />", async () => {
                const _item = {
                    "id": "1",
                    "title": "Voluptate et sed tempora qui quisquam.",
                    "tranche": "A",
                    "available": "11,959",
                    "annualised_return": "8.60",
                    "term_remaining": "864000",
                    "ltv": "48.80",
                    "amount": "85,754",
                    userInvested: true
                }
                render(<LineItem item={_item} />)
                  
                await waitFor(() => screen.getByRole('listitem'))
              
                expect(screen.getByRole('listitem')).toHaveTextContent("Voluptate et sed tempora qui quisquam.")

                expect(screen.getByRole('complementary')).toHaveTextContent("Invested")
                
                expect(screen.getByRole('button')).toHaveTextContent("INVEST")
    
            })
        })
    })
})