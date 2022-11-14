


const createArr = [
    {
        name: "Albert",
        completed: true
    },

    {
        name: "Divine",
        completed: false
    },

    {
        name: "Prestige",
        completed: true
    },
]

const filterText = document.querySelector('.empty-str')
const input = document.getElementById('text-input')


const filters = {
    showText: ""
}


function renderTexts(view, check) {
    let evaluateFilter = view.filter(function (note) {
        return note.name.toLowerCase().includes(check.showText.toLowerCase())
    })



    filterText.innerHTML = ""
    evaluateFilter.forEach(function (item) {
        let createEl = document.createElement('p')
        createEl.innerText = item.name
        filterText.appendChild(createEl)
    })

}

renderTexts(createArr, filters)

function renderValues() {
    input.addEventListener('input', function (e) {
        filters.showText = e.target.value
        renderTexts(createArr, filters)
    })
}

renderValues()