

const calc = () => {
    const rechnerInput = document.getElementById('rechnerInput').value
    const teilenDurch = document.getElementById('inputWieViele').value
    const superService = document.getElementById('Super').value
    const okayService = document.getElementById('Okay').value
    const badService = document.getElementById('bad').value
    const resultTrinkgeld = document.getElementById('resultTrinkgeld')
    const resultGesamt = document.getElementById('resultGesamt')
    const pricePerPerson = document.getElementById('pricePerPerson')
    const switcher = document.getElementById('selectme').value
    
    switch (switcher) {
        case 1.20: 
            return rechnerInput * superService 
            break
        case 1.1: 
            return rechnerInput * okayService
            break
        case 1.02:
            return rechnerInput * badService
            break
        }

    resultTrinkgeld.innerHTML = `Das Trinkgeld ist: ${(rechnerInput * switcher - rechnerInput).toFixed(2)} €`

    resultGesamt.innerHTML = `Die Gesamtsumme beträgt: ${(rechnerInput * switcher).toFixed(2)} €`

    pricePerPerson.innerHTML = `Der Preis pro Person ist: ${(rechnerInput * switcher / teilenDurch).toFixed(2)} €`


}
//     const calcSuperTrinkgeld = rechnerInput * superService - rechnerInput
//     const calcSuperGesamt = rechnerInput * superService
//     const calcSuperPricePerPerson = rechnerInput * superService / teilenDurch

//     const calcOkayTrinkgeld = rechnerInput * okayService - rechnerInput
//     const calcOkayGesamt = rechnerInput * okayService
//     const calcOkayPricePerPerson = rechnerInput * okayService / teilenDurch

//     const calcBadTrinkgeld = rechnerInput * badService - rechnerInput
//     const calcBadGesamt = rechnerInput * badService
//     const calcBadPricePerPerson = rechnerInput * badService / teilenDurch
    

//     if (superService) {
//         resultTrinkgeld.innerHTML = `Das Trinkgeld ist: ${calcSuperTrinkgeld.toFixed(2)} €`
//         resultGesamt.innerHTML = `Die Gesamtsumme beträgt: ${calcSuperGesamt.toFixed(2)}`
//         pricePerPerson.innerHTML = `Der Preis pro Person ist: ${calcSuperPricePerPerson.toFixed(2)}`
//     }
//     else if (okayService) {
//         resultTrinkgeld.innerHTML = `Das Trinkgeld ist: ${calcOkayTrinkgeld.toFixed(2)} €`
//         resultGesamt.innerHTML = `Die Gesamtsumme beträgt: ${calcOkayGesamt.toFixed(2)}`
//         pricePerPerson.innerHTML = `Der Preis pro Person ist: ${calcOkayPricePerPerson.toFixed(2)}`
//     }
//     else if (badServiceSelect) {
//         resultTrinkgeld.innerHTML = `Das Trinkgeld ist: ${calcBadTrinkgeld.toFixed(2)} €`
//         resultGesamt.innerHTML = `Die Gesamtsumme beträgt: ${calcBadGesamt.toFixed(2)}`
//         pricePerPerson.innerHTML = `Der Preis pro Person ist kacke:  ${calcBadPricePerPerson.toFixed(2)}`
//     }
    
// }

