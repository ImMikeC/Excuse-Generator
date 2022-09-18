//arreglos con frases y palabras
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

//extracción aleatoria de elementos dedl arreglo "quién"
const whoAleatorio = () => {
  return Math.floor(Math.random() * who.length)
}
//extracción aleatoria de elementos dedl arreglo "accion"
const actionAleatorio = () => {
  return Math.floor(Math.random() * action.length)
}
//extracción aleatoria de elementos dedl arreglo "qué"
const whatAleatorio = () => {
  return Math.floor(Math.random() * what.length)
}
//extracción aleatoria de elementos dedl arreglo "cuándo"
const whenAleatorio = () => {
  return Math.floor(Math.random() * when.length)
}

//unión de frases aleatorias para generar una oración completa aleatoriamente
const fraseAleatoria = () => {
  return who[whoAleatorio()] + ' ' + action[actionAleatorio()] + ' ' + what[whatAleatorio()] + ' ' + when[whenAleatorio()] + '.'
}
