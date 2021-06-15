/**
 * @jest-environment jsdom
 */

import TotalAvailable from "./"
import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe("Given <TotalAvailable />", () => {
    describe("When rendered by a User", () => {
        it("should show the total amount available for investments", async () => {
            const expectedTotalAmount = "1000000"

            render(<TotalAvailable totalAvailable={expectedTotalAmount} />)
          
            await waitFor(() => screen.getByRole('contentinfo'))
          
            expect(screen.getByRole('contentinfo')).toHaveTextContent(expectedTotalAmount)
        })
        it("should show the expected given label", async () => {
            const expectedTotalAmount = "1000000"
            const expectedLabel = "Total available for investments"

            render(<TotalAvailable totalAvailable={expectedTotalAmount} label={expectedLabel} />)
          
            await waitFor(() => screen.getByRole('heading'))
          
            expect(screen.getByRole('heading')).toHaveTextContent(expectedLabel)
        })
    })
})