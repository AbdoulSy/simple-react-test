describe("Given <InvestmentForm />", () => {
    describe("And `_LoanData` and `_TotalInvestmentAvailable`", () => {
        describe("When rendered by a User", () => {
            it("should show an <Input />")
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