/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Button} from './'

describe("Given <Button />", () => {
    describe("And with `label` and `onClick`", () => {
        const label = "Invest !"
        const onClick = jest.fn()
    
        describe("When rendered by a User", () => {
            it("should show the expected `label`", async () => {
                render(<Button onClick={onClick} label={label} />)
              
                await waitFor(() => screen.getByRole('button'))
              
                expect(screen.getByRole('button')).toHaveTextContent(label)
            })
        })
    })
})