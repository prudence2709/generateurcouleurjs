const rouge = Math.floor(Math.random() * 255);
const verte = Math.floor(Math.random() * 255);
const bleu = Math.floor(Math.random() * 255);

 let color =`rgb(${rouge}, ${verte}, ${bleu})`;
 console.log(color);

 document.body.style.background = color;
 document.body.innerHTML = `<h2> ${color} </h2>`;
  document.body.style.minHeight = "100vh";
  document.body.classList.add("oneChild")
//  let body = document.querySelector("body");
//  body.style.background = color;
//  body.style.height = "100vh";
//  body.classList.add("oneChild");

//  let pcontain = document.createElement("p");
//  console.log(pcontain);
//  body.appendChild(pcontain);
//  console.log(body);
//  pcontain.textContent = "bonjour";