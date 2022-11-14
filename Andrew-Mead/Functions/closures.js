function myFunction() {
    const message = 'This is my brand new message'

    function inheritFn() {
        console.log('Message:', message)
    }

    return inheritFn

    // let low = {
    //     first: inheritFn
    // }
    // return low
}

const view = myFunction()

view()


const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            console.log(count)
        }
    }
}


const callCounter = createCounter()

callCounter.increment()
callCounter.decrement()

callCounter.get()

//Adder

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}


const callStackFn = createAdder(10)

console.log(callStackFn(5))


console.log("---------------------------Challenge area")

function createTipper(amount) {
    let amounts = amount

    function amountBill(bill) {
        return `Amount: ${amounts + bill}% tip`
    }

    return amountBill
}


const callAmount = createTipper(10)

console.log(callAmount(5))