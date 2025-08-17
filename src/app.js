import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird']; 
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car', 'the soup'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let excusa=""
  let randomNumber = Math.floor(Math.random() * 4) + 1;
  randomNumber=randomNumber-1

function generarExcusa(nro){
  excusa=""
  excusa=who[nro]+' '+action[nro]+' '+what[nro]+' '+when[nro]
  return excusa

}

let cadena=generarExcusa(randomNumber)
document.getElementById("excuse").innerHTML = cadena;
  //write your code here
  console.log("Hello Rigo from the console!");
};
