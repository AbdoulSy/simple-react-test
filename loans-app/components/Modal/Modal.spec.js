/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { render, waitFor, screen } from '@testing-library/react'
 import '@testing-library/jest-dom/extend-expect'
 import Modal from '.'

describe("Given <Modal /> and `_children`", () => {
    describe("When rendered by a User", () => {
        it("should show a modal on top of the current content with `_children` content inside", async () => {
            render(<Modal isOpen={true}><p>Hello</p></Modal>)
              
            await waitFor(() => screen.getByText('Hello'))
          
            expect(screen.getByText('Hello')).toHaveTextContent("Hello")
            expect(screen.getByRole('button')).toHaveTextContent("close")

        })
    })
})