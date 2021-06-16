/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CurrentLoanList from "./";

describe("Given <CurrentLoanList /> and _LoanData", () => {
  const _LoanData = [
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
      id: "5",
      title: "Consectetur ipsam qui magnam minus dolore ut fugit.",
      tranche: "B",
      available: "31,405",
      annualised_return: "7.10",
      term_remaining: "1620000",
      ltv: "48.80",
      amount: "85,754",
    },
    {
      id: "12",
      title:
        "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
      tranche: "C",
      available: "12,359",
      annualised_return: "4.80",
      term_remaining: "879000",
      ltv: "48.80",
      amount: "85,754",
    },
  ];
  const setSelectedLoan = jest.fn();

  describe("And the total available to invest is too low", () => {
    beforeEach(async () => {
      render(
        <CurrentLoanList
          loanData={_LoanData}
          setSelectedLoan={setSelectedLoan}
          totalAvailable={100}
        />
      );

      await waitFor(() => screen.getByRole("list"));
    });
    it("should list all current loans", () => {
      expect(
        screen.getByText("Voluptate et sed tempora qui quisquam.")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Consectetur ipsam qui magnam minus dolore ut fugit.")
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente."
        )
      ).toBeInTheDocument();
    });
    describe("And a user clicks on a loan in the list", () => {
      it("should NOT allow to invest", () => {
        fireEvent.click(screen.getAllByText("INVEST")[0]);
        expect(screen.getAllByText("INVEST")[0]).toBeDisabled();
        expect(setSelectedLoan).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe("And the user can invest", () => {
    beforeEach(async () => {
      render(
        <CurrentLoanList
          loanData={_LoanData}
          setSelectedLoan={setSelectedLoan}
          totalAvailable={10000000}
        />
      );

      await waitFor(() => screen.getByRole("list"));
    });
    it("should list all current loans", () => {
      expect(
        screen.getByText("Voluptate et sed tempora qui quisquam.")
      ).toBeInTheDocument();
    });
    describe("And a user clicks on a loan in the list", () => {
      it("should execute the custon `setSelectedLoan` function", () => {
        fireEvent.click(screen.getAllByText("INVEST")[0]);

        expect(setSelectedLoan).toHaveBeenCalledTimes(1);
        expect(setSelectedLoan).toHaveBeenCalledWith({
          id: "1",
          title: "Voluptate et sed tempora qui quisquam.",
          tranche: "A",
          available: "11,959",
          annualised_return: "8.60",
          term_remaining: "864000",
          ltv: "48.80",
          amount: "85,754",
        });
      });
    });
  });

  describe("And no _loanData", () => {
    beforeEach(async () => {
      render(
        <CurrentLoanList
          loanData={[]}
          setSelectedLoan={setSelectedLoan}
          totalAvailable={10000000}
        />
      );

      await waitFor(() => screen.getByRole("list"));
    });
    it("should list no current loans", () => {
      expect(screen.queryByText("INVEST")).not.toBeInTheDocument();
    });
  });
});
