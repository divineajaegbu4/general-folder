

const processData = async () => {

    const response = await fetch("https://ipinfo.io/json?token=df246ede231298")

    if ((response.status === 200)) {
        const res = await response.json()
        return res
    }

}

processData().then((data) => {
    console.log(`You are currently in ${data.city} ${data.country} and ${data.ip}`)
})


const challengeAreaFetch = async () => {
    const insertFetch = await fetch('http://puzzle.mead.io/puzzle')

    if ((insertFetch.status === 200)) {
        return insertFetch.json()

    } else {
        throw new Error("Error occured")
    }
}

challengeAreaFetch().then((insert) => {
    console.log(insert.puzzle)
}).catch((err) => {
    console.log(err)
})



const getCurrentCountry = async (resolves) => {

    const resolveCountry = await fetch("https://ipinfo.io/json?token=df246ede231298")

    if ((resolveCountry.status === 200)) {
        return resolves(resolveCountry.json())
    } else {
        throw new Error("Unable to fetch ipinfo")
    }
}


function resolvement(view) {
    if ((!!view)) {
        return view
    }
}

getCurrentCountry(resolvement).then((resolvement) => {
    console.log(`My country name is ${resolvement.country}`)
}).catch((err) => {
    console.log(err)
})


const startPuzzle = async () => {
    const resetPuzzle = await fetch("http://puzzle.mead.io/puzzle")

    if ((resetPuzzle.status === 200)) {
        return resetPuzzle.json()
    } else {
        throw new Error("Something went wrong!")
    }
}


const resetBtn = document.querySelector("#reset")
const renderPuzzle = document.querySelector(".puzzle")

resetBtn.addEventListener("click", () => {
    startPuzzle().then((info) => {
        renderPuzzle.textContent = info.puzzle
    }).catch((err) => {
        return err
    })
})