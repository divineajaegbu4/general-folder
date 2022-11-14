let data = {
    locations: [],
    get location() {
        return `${this._viewLocation.toUpperCase()}`
    },
    set location(value) {
        this._viewLocation = value.trim()
        this.locations.push(this._viewLocation)
    }
}

data.location = 'Divine and Albert'
data.locations = "Albert Ukaegbu and Ajaegbu Divine"

console.log(data.location)
console.log(data.locations)
console.log(data)



console.log('------------------------------------Constructor')


class GetSet {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = 19
        this.gender = 'female'
        this.complete
    }

    get fullForms() {
        return this.complete
    }

    set fullForms(middleName) {
        if ((this.firstName === 'victor')) {
            this.complete = `${this.firstName} and ${this.age = 20}`
        } else if ((this.firstName === 'Ajaegbu' && this.age === 19)) {
            this.complete = `My name is ${this.firstName} ${middleName} ${this.lastName}. I am ${this.age} years old and my gender is ${this.gender}.`
        }

        return this.complete
    }

}


const getSet = new GetSet('Ajaegbu', 'Ezinwanne')

getSet.fullForms = 'Divine'

console.log(getSet.fullForms)

