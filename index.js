const title= document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
title.classList.toggle(CLICKED_CLASS);}
/*const hasClass = title.classList.contains(CLICKED_CLASS);
if(hasClass)
title.classList.remove(CLICKED_CLASS);
else {
title.classList.add(CLICKED_CLASS);
}*/


title.addEventListener("click",handleClick);


/*const BASE_COLOR="rgb(0, 0, 0)";
const OTHER_COLOR="rgb(200, 200, 200)";

function handleClick(){
  const check = title.style.color;
  if(check===BASE_COLOR)
      title.style.color=OTHER_COLOR;
      else {
        title.style.color=BASE_COLOR;
      }

}
function init(){
  title.style.color=BASE_COLOR;
  title.addEventListener("mouseenter",handleClick);
  title.addEventListener("mouseleave",handleClick);


}
init();
function handleOnline(){
  console.log("this is online");
}
window.addEventListener("online",handleOnline);
//const age = prompt("How old are you");
*/



/*
const monday="Mon";
const tuesday="Tue";
const wednesday ="Wed";
const thursday="Thu";
const friday="Fri";

const nicoInfo = {name:"Nico",age:33,
gender:"Male",isHandsome:true,
favMovies:["Along the gods","Oldboy"],
favFood:[
   {
      name:"Kimchi",
      fatty:false
    },
    {
      name:"Cheese Burger",
      fatty:true
    }
  ]
};
//object : {}
//array : []
// const / let

function sayHello(potato,chicken){
  return `Hello ${potato} you are ${chicken} years old`;
}
const greetNicolas = sayHello("Nicolas",15);
//console.log(greetNicolas);
// function funname(parametername){}


const calculator={
  plus:function(a,b){
    return a+b;
   },
  minus:function(a,b){
    return a-b;
  },
  mul:function(a,b){
    return a*b;
  },
  div:function(a,b){
    return a/b;
  }
}

const p = calculator.plus(5,5);
const m = calculator.minus(5,5);
console.log(p,m);
*/
