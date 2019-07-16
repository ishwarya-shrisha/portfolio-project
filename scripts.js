let fname = prompt('What is your first Name?');

let lname = prompt('What is your last Name?');

while (!fname || !lname) {
  
  fname = prompt('What is your first Name?');
  lname = prompt('What is your last Name?');
}

document.querySelector('#greeting').innerHTML = `<p>Hello , ${fname} ${lname}</p>`;

/*const myFakebool = true;

console.log; */




/*if(!name) {
  name  = prompt('what is your Name?');
}

document.querySelector('h1').textContent = `Hello , ${name}`; */

