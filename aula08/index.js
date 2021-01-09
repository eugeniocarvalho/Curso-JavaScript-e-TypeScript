const firstName = 'Eugênio'
const lastName = 'Carvalho'
const age = 1997
const date = new Date().getFullYear()
const weight = 67
const height = 1.75
const imc = 65 / Math.pow(height, 2)

const text = `${firstName} ${lastName} tem ${date - age} anos, pesa ${weight}Kg\ntem ${height} de altura e seu IMC é ${imc}`
console.log(text)