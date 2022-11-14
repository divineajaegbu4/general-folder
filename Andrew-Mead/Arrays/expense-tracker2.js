const account = {
    name: "Albert Divine",
    expenses: [],
    income: [],
    addNum: 300,
    // addExpense: function (description, amount) {
    //     this.expenses.push(
    //         {
    //             description: description,
    //             amount: amount
    //         }
    //     )
    // },

    // addIncome: function (description, amount) {
    //     this.income.push({
    //         description: description,
    //         amount: amount
    //     })
    // },

    // getAccountSummary: function () {
    //     let totalExpense = this.addNum
    //     let totalIncome = 0
    //     let balance = 0
    //     let expenses = 0
    //     let addNums = 10

    //     this.expenses.forEach(function (item) {
    //         totalExpense = totalExpense + item.amount
    //     })


    //     this.income.forEach(function (item2) {
    //         totalIncome = totalIncome + item2.amount
    //     })

    //     expenses = totalIncome - addNums
    //     balance = totalIncome - expenses


    //     return `\n ${this.name} has $${totalExpense} in expenses.\n ${this.name} has a balance of $${balance}. $${totalIncome} in income. $${expenses} in expenses.`
    // }

}





// account.addExpense('Rent', 950)
// account.addIncome("Live", 100)
// console.log(account.getAccountSummary())



function addExpenses(callBack, description, amount) {
    callBack.expenses.push({
        description: description,
        amount: amount
    })

    let totalExpenses = callBack.addNum

    callBack.expenses.forEach(function (item) {
        totalExpenses = totalExpenses + item.amount
    })

    // console.log(`${callBack.name} has $${totalExpenses} in expenses.`)

    function addIncome(callBack2, description2, amount2) {
        callBack2.income.push({
            description: description2,
            amount: amount2
        })

        let totalIncome = 0
        let addNums = 10
        let expenses = 0
        let balance = 0

        callBack2.income.forEach(function (item2) {
            totalIncome = totalIncome + item2.amount
        })

        expenses = totalIncome - addNums
        balance = totalIncome - expenses

        console.log(`\n ${callBack.name} has $${totalExpenses} in expenses. \n ${callBack2.name} has a balance of $${balance}. $${totalIncome} in income. $${expenses} in expenses.`)


    }
    let callInnerFn = {
        addIncome: addIncome
    }

    return callInnerFn
}



const callFn = addExpenses(account, "Jen", 950)

callFn
callFn.addIncome(account, "vipe", 100)