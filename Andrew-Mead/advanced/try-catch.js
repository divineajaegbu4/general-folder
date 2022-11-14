function getTip(amount) {
    if ((typeof (amount) === 'boolean')) {
        return amount * 23
    }

    else {
        throw Error("This is not a number")
    }
}


try {
    console.log(getTip(1))
} catch (e) {
    console.log(`Is not executing and ${e.message}`)
}