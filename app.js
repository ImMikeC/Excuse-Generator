/* 
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
} */

let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];


const whoAleatorio = () => {
  return Math.floor(Math.random() * who.length)
}
const actionAleatorio = () => {
  return Math.floor(Math.random() * action.length)
}
const whatAleatorio = () => {
  return Math.floor(Math.random() * what.length)
}
const whenAleatorio = () => {
  return Math.floor(Math.random() * when.length)
}

const fraseAleatoria = () => {
  return who[whoAleatorio()] + ' ' + action[actionAleatorio()] + ' ' + what[whatAleatorio()] + ' ' + when[whenAleatorio()]
}
