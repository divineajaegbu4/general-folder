
const totalSection = {
    removeCharacter: document.querySelector('.remove-character'),
    addCharacter: document.querySelector('.add-character'),
    emptyStr: document.querySelector('.emptyStr'),
    fruits: [
        {
            name: "Taco",
            image: "🌮"
        },
        {
            name: "Pineapple",
            image: "🍍"
        },
        {
            name: "Lemon",
            image: "🍋"
        },
        {
            name: "Hamburger",
            image: "🍔"
        },
        {
            name: "Peach",
            image: "🍑"
        },

    ],

    name: function () {
        const p = document.querySelector('p')
        p.innerHTML = this.fruits.image
        this.emptyStr.appendChild(p)
    },


}


// totalSection.renderTexts(totalSection.fruits)
totalSection.name()
