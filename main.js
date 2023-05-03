inputStart = 20

const input = document.querySelector("#input")
const convert = document.querySelector("#convert")

const metersToFeetMeter= document.querySelector("#meters-to-feet-meter")
const metersToFeetFeet= document.querySelector("#meters-to-feet-feet")
const feetToMeterFeet = document.querySelector("#feet-to-meter-feet")
const feetToMeterMeters = document.querySelector("#feet-to-meter-meters")

const litersToGallonsLiters = document.querySelector("#liters-to-gallons-liters")
const litersToGallonsGallons = document.querySelector("#liters-to-gallons-gallons")
const gallonsToLitersGalons = document.querySelector("#gallons-to-liters-galons")
const gallonsToLitersLiters = document.querySelector("#gallons-to-liters-liters")

const kilosToPoundsKilos = document.querySelector("#kilos-to-pounds-kilos")
const kilosToPoundsPounds = document.querySelector("#kilos-to-pounds-pounds")
const poundsToKilosPounds = document.querySelector("#pounds-to-kilos-pounds")
const poundsToKilosKilos = document.querySelector("#pounds-to-kilos-kilos")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// setting calculation  functions

function meterToFeet(meter) {
    return (meter * 3.281).toFixed(3)
}

function feetToMeter(feet) {
    return (feet / 3.281).toFixed(3)
}

function literToGallon(liter) {
    return (liter * 0.264).toFixed(3)
}

function gallonToLiter(gallon) {
    return (gallon / 0.264).toFixed(3)
}

function kiloToPound(kilo) {
    return (kilo * 2.204).toFixed(3)
}

function poundToKilo(pound) {
    return (pound / 2.204).toFixed(3)
}

//setting starting values
input.value = inputStart
metersToFeetMeter.textContent = input.value
feetToMeterFeet.textContent = input.value

litersToGallonsLiters.textContent = input.value
gallonsToLitersGalons.textContent = input.value

kilosToPoundsKilos.textContent = input.value
poundsToKilosPounds.textContent = input.value


//calculating after pressing convert button
convert.addEventListener("click", ()=>{
    metersToFeetMeter.textContent = input.value
    metersToFeetFeet.textContent = meterToFeet(input.value)
    feetToMeterFeet.textContent = input.value
    feetToMeterMeters.textContent = feetToMeter(input.value)

    litersToGallonsLiters.textContent = input.value
    litersToGallonsGallons.textContent = literToGallon(input.value)
    gallonsToLitersGalons.textContent = input.value
    gallonsToLitersLiters.textContent = gallonToLiter(input.value)

    kilosToPoundsKilos.textContent = input.value
    kilosToPoundsPounds.textContent = kiloToPound(input.value)
    poundsToKilosPounds.textContent = input.value
    poundsToKilosKilos.textContent = poundToKilo(input.value)
})

