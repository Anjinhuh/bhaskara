let a = 3

let b = -2

let c = 10

console.log()

let delta = b*b - 4*a*c


let raiz = Math.sqrt(delta)
console.log(raiz)

let numdiv = 2*a
console.log(numdiv)

let bhaskaraxneg = (-b) - raiz
let resultxneg = bhaskaraxneg/numdiv

let bhaskaraxpos= (-b) + raiz
let resultxpos = bhaskaraxpos/numdiv

let resultado = console.log('RESULTADO 1:' + ' ' +  resultxpos.toFixed(5) + ' ' + ' \n \n RESULTADO 2:' + ' ' + resultxneg + ' ')