/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InvestmentForm from "./";

describe("Given <InvestmentForm />", () => {
  describe("And `_LoanData` and `_TotalInvestmentAvailable and _currentUser`", () => {
    const _LoanData = {
      id: "1",
      title: "Voluptate et sed tempora qui quisquam.",
      tranche: "A",
      available: "11,959",
      annualised_return: "8.60",
      term_remaining: "864000",
      ltv: "48.80",
      amount: "85,754",
    };
    const _currentUser = {
      name: "Abdoul Sy",
      id: "2121",
      CURRENT_CURRENCY: { name: "GBP", symbol: "£" },
      TOTAL_AVAILABLE: 10000000.0, //should come from a user service
      email: "<dreescan+lendinvest@gmail.com>",
      investments: [],
    };
    const _TotalInvestmentAvailable = 1000000;
    const investInLoan = jest.fn();
    const setSelectedLoan = jest.fn();

    describe("When rendered without a loan data", () => {
      it("should not render a form", () => {
        render(
          <InvestmentForm
            selectedLoan={{}}
            setSelectedLoan={setSelectedLoan}
            totalAvailable={_TotalInvestmentAvailable}
            currentUser={_currentUser}
            investInLoan={investInLoan}
          />
        );

        expect(screen.getByRole("form")).not.toBeInTheDocument();
      });
    });

    describe("When rendered by a User", () => {
      beforeEach(async () => {
        render(
          <InvestmentForm
            selectedLoan={_LoanData}
            setSelectedLoan={setSelectedLoan}
            totalAvailable={_TotalInvestmentAvailable}
            currentUser={_currentUser}
            investInLoan={investInLoan}
          />
        );

        await waitFor(() => screen.getByRole("form"));
      });
      it("should show an <Input />", () => {
        expect(screen.getByRole("input")).toBeInTheDocument();
      });
      it("should show the correct `_LoanData`", () => {
        expect(
          screen.getByText("Voluptate et sed tempora qui quisquam.")
        ).toBeInTheDocument();
      });
      it("should show a <CloseButton />", () => {
        expect(screen.getByText("❌")).toBeInTheDocument();
      });
      it("should show a INVEST button disabled", () => {
        expect(screen.getByText("Invest")).toBeInTheDocument();
        expect(screen.getByText("Invest")).toBeDisabled();
      });
      const expectedInvestment = "200";
      describe("And a user has entered valid numeric value in the <Input />", () => {
        it("should update the status of the <Button /> to active", () => {
          fireEvent.change(screen.getByRole("input"), {
            target: { value: expectedInvestment },
          });

          expect(screen.getByText("Invest")).not.toBeDisabled();
        });

        describe("And a user has pressed on the invest <Button />", () => {
          it("should call the special `investInLoan` with the payload of the form", () => {
            fireEvent.change(screen.getByRole("input"), {
              target: { value: expectedInvestment },
            });

            fireEvent.click(screen.getByText("Invest"));

            expect(investInLoan).toHaveBeenCalledWith(
              {
                id: "1",
                title: "Voluptate et sed tempora qui quisquam.",
                tranche: "A",
                available: "11,959",
                annualised_return: "8.60",
                term_remaining: "864000",
                ltv: "48.80",
                amount: "85,754",
              },
              {
                name: "Abdoul Sy",
                id: "2121",
                CURRENT_CURRENCY: { name: "GBP", symbol: "£" },
                TOTAL_AVAILABLE: 10000000.0, //should come from a user service
                email: "<dreescan+lendinvest@gmail.com>",
                investments: [],
              },
              expectedInvestment
            );
          });
        });
      });

      describe("And a user has clicked on the <CloseButton />", () => {
        it("should remove the <InvestmentForm />", () => {
          fireEvent.click(screen.getByText("❌"));

          expect(setSelectedLoan).toHaveBeenCalledWith({});
        });
      });

      describe("And a user has entered INVALID value in the <Input />", () => {
        it.todo("should NOT update the status of the <Button /> to active");
      });
    });
  });
});
