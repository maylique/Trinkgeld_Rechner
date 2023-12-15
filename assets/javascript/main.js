

const calc = () => {
    const rechnerInput = document.getElementById('rechnerInput').value
    const teilenDurch = document.getElementById('inputWieViele').value
    const superService = document.getElementById('Super').value.toString()
    const okayService = document.getElementById('Okay').value.toString()
    const badService = document.getElementById('bad').value.toString()
    const resultTrinkgeld = document.getElementById('resultTrinkgeld')
    const resultGesamt = document.getElementById('resultGesamt')
    const pricePerPerson = document.getElementById('pricePerPerson')

    const calcTrinkgeld = rechnerInput * service - rechnerInput
    const calcGesamt = rechnerInput * service
    const calcPricePerPerson = rechnerInput * service / teilenDurch
    

    const serviceFunc = () => {

        switch (service) {
            case superService:
                service = superService
                break
            case okayService:
                service = okayService
                break
            case badService:
                service = badService
                break
        }
    }

    if (superService) {
        resultTrinkgeld.innerHTML = `Das Trinkgeld ist: ${calcTrinkgeld.toFixed(2)} €`
        resultGesamt.innerHTML = `Die Gesamtsumme beträgt: ${calcGesamt.toFixed(2)}`
        pricePerPerson.innerHTML = `Der Preis pro Person ist: ${calcPricePerPerson.toFixed(2)}`
    }
    
}



