const account = {
    names: "Albert Divine",
    expenses: [],
    income: [],
    expensesAmount: 300,
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
        // return `\n Description: ${description} \n Amount: ${amount}`
    },

    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummaries: function () {
        let totalExpense = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpense = totalExpense + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpense

        return `${this.names} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpense} in expenses.`
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let totalBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (item2) {
            totalIncome = totalIncome + item2.amount
        })

        totalBalance = totalBalance - totalExpenses

        return `\n ${this.names} has $${totalExpenses} in expenses.\n ${this.names} has a balance of $${totalIncome} in income. $${totalBalance} in expenses`
    },



}


function giveOut(view) {
    let checkOut = view.expenses
    checkOut.push("woman", "success", "prosperity", "honesty", 100)

    for (let i = 0; i <= checkOut.length; i++) {
        console.log(checkOut[i])
    }

}

giveOut(account)

account.addExpense("Rent", 950)
account.addIncome("Rent", 1000)

console.log(account.getAccountSummary())
console.log(account.getAccountSummaries())



