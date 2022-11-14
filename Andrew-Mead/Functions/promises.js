// callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        // callback(undefined, "This is the new data")
        if ((typeof num === 'number')) {
            callback(undefined, num * 2)
        } else {
            console.log("nothing")
        }

    }, 2000)
}


function generalFn(error, data) {
    if ((error)) {
        console.log("Error:", error)
    } else {
        console.log("Data:", data)
    }
}

function viewNum(nums = 4) {
    return nums
}

getDataCallback(viewNum(), generalFn)

//promise

const myPromise = new Promise((resolve, reject) => {
    if ((!resolve)) {
        setTimeout(() => {
            resolve("This is promise", "My favorite promises")
        }, 2000)
    } else {
        setTimeout(() => {
            reject("An error occured", null)
        }, 2000)
    }




})


function createCallFn(data, favorite) {
    if (data) {
        console.log(data)
    } else {
        console.log(favorite)
    }
}

function createCallFns(datas, favorites) {
    if (datas) {
        console.log(datas)
    } else {
        console.log(favorites)
    }
}


myPromise.then((createCallFn), (createCallFns))

// OR

// myPromise.then((data) => {
//     console.log(data)
// }), (err) => {
//     console.log(err)
// }

// myPromise.then((data) => {
//     console.log(data)
// }), (err) => {
//     console.log(err)
// }


//promise chaining

const promiseChaining = (num) => new Promise((resolve, reject) => {
    return typeof num === 'number' ? resolve(num * 2) : reject("Number ought to be provided")
})


promiseChaining(2).then((data) => {
    // console.log(`promise data: ${data}`)
    promiseChaining(data).then((data) => {
        console.log(`promise data: ${data}`)
    }), (err) => {
        console.log("Error:", err)
    }, (err) => {
        console.log("Error:", err)
    }
})

//OR

promiseChaining(10).then((data) => {
    console.log(data)
    return promiseChaining(data)
}).then((data) => {
    console.log("PromiseChaining:", data)
}).then(() => {
    return "Albert and Divine  are heading towards market right now!"
}).then((data) => {
    console.log("Text:", data)
}).catch((err) => {
    console.log(err)
})


console.log("-------------------------------Challenge area")

// const getLocation = () => {
//     return fetch("https://ipinfo.io/json?token=df246ede231298").then((response) => {
//         return response.json()
//     })
// }

// getLocation().then((data) => {
//     console.log(data.city)
// })



const getLocation = () => new Promise((resolve) => {
    const resolveLocation = resolve(fetch("https://ipinfo.io/json?token=df246ede231298").then((response) => {
        if ((response.status === 200)) {
            return response.json()
        } else {
            throw new Error("Unable to fetch data")

        }
    }))

    return resolveLocation

})

getLocation().then((data) => {
    console.log("City:", data.city)
    console.log("Ip:", data.ip)
    return getLocation()
}).then((data) => {
    console.log("Country:", data.country)
    return getLocation()
}).then((data) => {
    console.log("TimeZone:", data.timezone)
    return getLocation()
}).then((data) => {
    console.log("Location:", data.loc)
    return getLocation()
}).then((data) => {
    console.log("Ip:", data.ip)
    return getLocation()
}).then((data) => {
    console.log("Region:", data.region)
})



console.log("---------------------------Andrew Mead")

const getLocations = () => {
    return fetch("https://ipinfo.io/json?token=df246ede231298").then((res) => {
        if ((res.status === 200)) {
            return res.json()
        } else {
            throw new Error("An error!")
        }
    })
}


getLocations().then((location) => {
    console.log(`NewLocations: You are currently in ${location.city} ${location.country} and ${location.ip}`)
    return promiseChaining(20)
}).then((promise) => {
    console.log("PromsieChaining:", promise)
})