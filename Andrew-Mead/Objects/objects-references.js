const myAccount = {
    name: "Albert Divine",
    expenses: 0,
    income: 0
}




const getAccount = function (account, amount) {
    var incrementAccount = account.expenses + amount
    account.name = "Albert Ukaegbu Divine"

    const arrangeAccount = {
        callOuts: account,
        arrangeName: account.name,
        arrangeExpenses: incrementAccount,
        arrangeIncome: account.income
    }
    return arrangeAccount
}


function callStack() {
    var totalAddAccount = getAccount(myAccount, 2.50)

    console.log(`Expenses: ${totalAddAccount.arrangeExpenses}`)
    console.log(`Name: ${totalAddAccount.arrangeName}`)
    console.log(`Income: ${totalAddAccount.arrangeIncome}`)
    console.log("General:" + " ", totalAddAccount.callOuts)
}

callStack()


// Andrew mead

const addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)


// Challenge area




// for Andrew mead
console.log("---------------------------------------For Andrew mead")
const relevantAccount = {
    name: "Albert Divine",
    income: 0,
    expenses: 0,


}

const addIncome = function (account, amount) {
    account.income = account.income + amount

}


const addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount



}

const resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return (`Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`)
}


addIncome(relevantAccount, 1000)
addExpenses(relevantAccount, 100)
console.log(getAccountSummary(relevantAccount))
resetAccount(relevantAccount)

// console.log(callSummaryAccount)


console.log("---------------------------Challenge area")
//addIncome
// resetAccount
// getAccountSummary

//Account for AlbertDivine has $900. $1000 in income. $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

let accessAccount = {
    addIncome: 700,
    resetAccount: 1000,
    getAccountSummary: 100
}

let incrementAccessAccount = function (access, add) {
    var addAccount = access.addIncome + add

    let oraganizeAccount = {
        GeneralAccount: access,
        getIncome: addAccount,
        getresetAccount: access.resetAccount,
        getAccountSummary: access.getAccountSummary
    }

    return oraganizeAccount
}



let newCallStack = function () {
    var viewAccount = incrementAccessAccount(accessAccount, 200)
    console.log(`Account for Albert Divine has $${viewAccount.getIncome}. $${viewAccount.getresetAccount} in income. $${viewAccount.getAccountSummary}`)
    console.log(viewAccount.GeneralAccount)
}

newCallStack()






