const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

let currentCookie = ""
for (let i = 0; i < cookies.length; i++) {
     currentCookie = cookies[i]
     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
console.log(cookies[3])



let conjoinedWord = ""
const conjunction = function (firstWord, secondWord) {
   conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)


// {
//     const ModSquad = {
//         members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         series: {
//         start: "1968",
//         end: "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }

// document.querySelector(".show-info").innerHTML = HTMLRepresentation



const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocation = ""
for (let i = 0; i < locations.length; i++) {
    const currentLocation = locations[i]

    if (currentLocation[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation[0] < 2) {
        console.log("This location is invalid")
    }
    console.log(`There were ${i} locations displayed`)
}





const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    const suffix = " the Llama"
    const name = possibleNames[randomizer]
    return name + suffix
}

    
let nameMaker = llamaNamer()
console.log(nameMaker)
let name2 = llamaNamer()
console.log(name2)
let name3 = llamaNamer()
console.log(name3)


