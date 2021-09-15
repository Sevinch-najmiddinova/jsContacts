let members = [
  new Person('Antionette Martinez', 'UI Designer', 'img/rasm.jpg', '3 Boards','24 Tasks'),
  new Person('Chris Harris', 'Front End', 'img/rasm.jpg', '3 Boards','24 Tasks '),
  new Person('Dana Sims', 'C# Developer', 'img/rasm.jpg', '3 Boards',' 24 Tasks'),
  new Person('Nick Robins', '.Net Developer', 'img/rasm.jpg', '3 Boards', '24 Tasks'),
  new Person('Sandra Osborne', 'Team Leader', 'img/sandra.jpg', '3 Boards','24 Tasks'),
  new Person('Tim Johnson', 'Product Owner', 'img/rasm.jpg', '3 Boards','24 Tasks'),
  new Person('Helen Coppola', 'UI Designer', 'img/helen.jpg', '3 Boards','24 Tasks'),
  new Person('Victor Parker', 'Full Stack', 'img/victor.jpg', '3 Boards',' 24 Tasks'),

];

// let type = ['Menbers', 'Teams', 'Pending'];
function Person(name, job, photo, type,type2) {
  this.name = name;
  this.job = job;
  this.photo = photo;
  this.type = type;
  this.type2 = type2;
}
// card yaratish
const tableEl = document.getElementById('table');

function createMembersDiv(el) {
  let person = document.createElement('div');
  person.className = 'card'; // div

  let image = document.createElement('img'); // rasmi
  image.className = 'card__img'
  image.src = el.photo;

  let name = document.createElement('p'); // ism
  name.className = 'text';
  name.innerText = el.name;

  let job = document.createElement('p'); // job 
  job.className = 'text__opacity';
  job.innerText = el.job;

  let div1 = document.createElement('div');
  div1.className = 'content_col'
  let span = document.createElement('span'); 
  span.className = 'text__tasks'; // 3 board 
  span.innerText = el.type;
  
  let spanSec = document.createElement('span');
  spanSec.className = 'text__tasks1'; //  24 tasks 
  spanSec.innerText = el.type2;

div1.appendChild(span);
div1.appendChild(spanSec)
  person.appendChild(image); // nomi + narxi + rasm = div
  person.appendChild(name);
  person.appendChild(job);
  // person.appendChild(span);
  // person.appendChild(spanSec);
  person.appendChild(div1)

  tableEl.appendChild(person);
}

function funksiya(arr) {
  tableEl.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    createMembersDiv(arr[i]);
  }
}

funksiya(members)
////
const closeSidebarEL = document.getElementsByClassName('close-sidebar')[0];
const openSidebarEL = document.getElementsByClassName('open-sidebar')[0];
const wrapperEl = document.getElementsByClassName('wrapper')[0];
const accessedEl = document.getElementsByClassName('accessed')[0];
const accessed__p = document.getElementsByClassName('accessed')[0];

closeSidebarEL.addEventListener('click', function(){
    wrapperEl.classList.remove('open');
});


openSidebarEL.addEventListener('click', function(){
    wrapperEl.classList.add('open');
});


const inputEl = document.getElementById('input');
const cards = document.getElementsByClassName('card');

function search(){
    for(el of cards){
        
        if(el.innerText.includes(inputEl.value)){
          el.style.display = 'block';  
        }
        
        else {
            el.style.display = 'none'; 
        }

    }
}
inputEl.addEventListener('keyup', search)

