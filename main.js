// WE WILL ROCK YOU
const queens = []
const tributeChest = []


const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, 'Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains.')
createQueen(2, 'Sue')
createQueen(3, 'Bobby')
createQueen(4, 'Bobby-Sue')


const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  
}

for (const queenObject of queens) {

    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)

}

const athena = hailTheQueen("Kelie")
console.log(athena)

const charisse = hailTheQueen("Charisse Ford") 
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis")
console.log(jenna)

const ramona = hailTheQueen("Romona Flowers")
console.log(ramona)

const monica = hailTheQueen("Monica Dinglehopper")
console.log(monica)

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tribute = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }

    tributeChest.push(tribute)
}


payTribute(1, "Barrel of wine", 2)
payTribute(2, "Silk", 1)
payTribute(3, "Bushel of oranges", 3)
payTribute(4, "Ten gold coins", 1)

// iterate the queenObject to show tribute for each one
for (const queenObject of queens) {

    //each queenObject will look at every tributeObject to see if it is hers
    for (const tributeObject of tributeChest) {
     //console.log(tributeObject)
    
     if (tributeObject.queenId === queenObject.id) {
     console.log(`${queenObject.name} has tribute ${tributeObject.description}`)
     }
    }
    }