/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { render, waitFor, fireEvent,  screen } from '@testing-library/react'
 import '@testing-library/jest-dom/extend-expect'
 import Modal from '.'

describe("Given <Modal /> and `_children`", () => {
    const setOpenState = jest.fn()

    describe("When rendered by a User", () => {

        beforeEach(async () => {
            render(<Modal isOpen={true} setOpenState={setOpenState}><p>Hello</p></Modal>)
              
            await waitFor(() => screen.getByText('Hello'))
        })

        it("should show a modal on top of the current content with `_children` content inside", async () => {
            expect(screen.getByText('Hello')).toHaveTextContent("Hello")
            expect(screen.getByRole('button')).toHaveTextContent("❌")
        })

        it("should trigger a custom event by clicking the close button", async () => {
            expect(screen.getByText('Hello')).toHaveTextContent("Hello")

            fireEvent.click(screen.getByText('❌'))

            expect(setOpenState).toHaveBeenCalledTimes(1)
        })


    })
})