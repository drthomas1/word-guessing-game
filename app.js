const fruitArr = ['apple', 'orange', 'watermelon', 'pomegranate', 'banana', 'plum', 'apricot',
'lemon', 'kiwifruit', 'strawberry', 'blackberry', 'peach', 'raspberry', 'grapefruit', 'pear',
'lime', 'papaya', 'mango', 'nectarine', 'passionfruit', 'avocado', 'tomato', 'cherry', 'blackcurrant',
'blueberry', 'clementine', 'cantaloupe', 'cranberry', 'durian', 'guava', 'grapes', 'kumquat',
'lychee', 'pineapple', 'plantain', 'tangerine'];
const citiesArr = ['amsterdam', 'athens', 'belfast', 'belgrade', 'bern', 'bratislava',
'brussels', 'bucharest', 'budapest', 'cardiff', 'copenhagen', 'dublin', 'edinburgh',
'helsinki', 'kiev', 'lisbon', 'london', 'luxembourg', 'madrid', 'minsk', 'monaco', 'moscow', 'nicosia',
'oslo', 'paris', 'prague', 'reykjavik', 'riga', 'rome', 'sarajevo', 'sofia', 'stockholm', 'tirana',
'vaduz', 'valletta', 'vienna', 'vilnius', 'warsaw', 'zagreb'];
const animalArr = ['elephant', 'ostrich', 'cheetah', 'rhinoceros', 'rabbit', 'albatross', 'aardvark',
'badger', 'terrapin', 'walrus', 'raccoon', 'meerkat', 'parrot', 'jaguar', 'giraffe', 'flamingo',
'orangutan', 'crocodile', 'aligator', 'iguana', 'squirrel', 'skunk', 'penguin', 'donkey', 'moose',
'reindeer', 'platypus', 'lion', 'tiger', 'gorilla', 'chimpanzee', 'buffalo', 'whale', 'dolphin',
'porcupine', 'hedgehog', 'mouse', 'zebra', 'ox'];
const countriesArr = ['china', 'india', 'usa', 'indonesia', 'pakistan', 'nigeria', 'brazil',
'bangladesh', 'russia', 'mexico', 'japan', 'ethiopia', 'philippines', 'egypt', 'vietnam', 'iran',
'turkey', 'germany', 'france', 'britain', 'thailand', 'italy', 'myanmar', 'colombia', 'kenya',
'argentina', 'algeria', 'ukraine', 'canada', 'poland', 'morocco', 'peru', 'spain', 'venezuala', 'taiwan',
'australia', 'norway', 'sweden', 'finland', 'denmark', 'netherlands', 'portugal', 'ecuador', 'greece'];

let categorryArr = [fruitArr, citiesArr, animalArr, countriesArr];
let wordArr = categorryArr[0];


const q = document.getElementById('q');
const w = document.getElementById('w');
const e = document.getElementById('e');
const r = document.getElementById('r');
const t = document.getElementById('t');
const y = document.getElementById('y');
const u = document.getElementById('u');
const i = document.getElementById('i');
const o = document.getElementById('o');
const p = document.getElementById('p');
const a = document.getElementById('a');
const s = document.getElementById('s');
const d = document.getElementById('d');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');
const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');
const z = document.getElementById('z');
const x = document.getElementById('x');
const c = document.getElementById('c');
const v = document.getElementById('v');
const b = document.getElementById('b');
const n = document.getElementById('n');
const m = document.getElementById('m');

const playButton = document.getElementById('play');

let livesMessage = document.getElementById('lives');
let message = document.getElementById('message');
const dropDownMenu = document.getElementById('dm-select');
let categoryName = document.getElementById('cat-name');

const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const cat3 = document.getElementById('cat3');
const cat4 = document.getElementById('cat4');

cat1.onclick = () => {
  categoryName.innerHTML = 'FRUIT';
  wordArr = categorryArr[0];
  reset();
}

cat2.onclick = () => {
  categoryName.innerHTML = 'CAPITAL CITIES';
  wordArr = categorryArr[1];
  reset();
}

cat3.onclick = () => {
  categoryName.innerHTML = 'ANIMALS';
  wordArr = categorryArr[2];
  reset();
}

cat4.onclick = () => {
  categoryName.innerHTML = 'COUNTRIES';
  wordArr = categorryArr[3];
  reset();
}

let parent = document.getElementById('table1');
let random;
let randomWord;

let lives;
let playing;
let master = [];
let pgArr = [];

function turnIntoArr(str) {
    for (let i = 0; i < str.length; i++){
        master.push(str[i]);
    }
}

function calcLives(letter){
  if(master.indexOf(letter) < 0){
    lives--
  }
}

function pushIntoP(letter){
  for (let i = 0; i < master.length; i++){
      if(letter === master[i]){
        pgArr.push(master[i])
      }
  }
}

function victory(){
  if(pgArr.length === master.length){
    message.style.fontSize = '1.6em';
    message.innerHTML = 'You WIN!';
    playing = false;
    showIt3();
  }
  if(lives < 1){
    playing = false;
    message.style.fontSize = '1.6em';
    message.innerHTML = 'You LOSE!';
    showIt2();
  }
}

function wordToHtml(word){
  for (let i = 0; i < word.length; i++){
    let newLetter = document.createElement('td');
        newLetter.setAttribute('class', 'generated-word');
        newLetter.innerHTML = word[i];
        parent.appendChild(newLetter);
  }
}

const answerTds = parent.children;

function showIt(letter) {
    for (let i = 0; i < answerTds.length; i++) {
      if(letter === answerTds[i].innerHTML){
    answerTds[i].style.color = 'black';
  }
  }
}

function showIt2() {
  for (let i = 0; i < answerTds.length; i++) {
    answerTds[i].style.color = 'red';
}
}

function showIt3() {
  for (let i = 0; i < answerTds.length; i++) {
    answerTds[i].style.color = 'blue';
}
}

function playerInput(letter) {
  if(playing === true){
    showIt(letter);
    blankOut(letter);
    pushIntoP(letter);
    calcLives(letter);
    livesMessage.innerHTML = `${lives} lives remaining`
    victory();
    }
}

function blankOut(letter) {
  if(letter === 'q'){
  q.style.display = 'none';
}else if(letter === 'w'){
  w.style.display = 'none';
}else if(letter === 'e'){
  e.style.display = 'none';
}else if(letter === 'r'){
  r.style.display = 'none';
}else if(letter === 't'){
  t.style.display = 'none';
}else if(letter === 'y'){
  y.style.display = 'none';
}else if(letter === 'u'){
  u.style.display = 'none';
}else if(letter === 'i'){
  i.style.display = 'none';
}else if(letter === 'o'){
  o.style.display = 'none';
}else if(letter === 'p'){
  p.style.display = 'none';
}else if(letter === 'a'){
  a.style.display = 'none';
}else if(letter === 's'){
  s.style.display = 'none';
}else if(letter === 'd'){
  d.style.display = 'none';
}else if(letter === 'f'){
  f.style.display = 'none';
}else if(letter === 'g'){
  g.style.display = 'none';
}else if(letter === 'h'){
  h.style.display = 'none';
}else if(letter === 'j'){
  j.style.display = 'none';
}else if(letter === 'k'){
  k.style.display = 'none';
}else if(letter === 'l'){
  l.style.display = 'none';
}else if(letter === 'z'){
  z.style.display = 'none';
}else if(letter === 'x'){
  x.style.display = 'none';
}else if(letter === 'c'){
  c.style.display = 'none';
}else if(letter === 'v'){
  v.style.display = 'none';
}else if(letter === 'b'){
  b.style.display = 'none';
}else if(letter === 'n'){
  n.style.display = 'none';
}else if(letter === 'm'){
  m.style.display = 'none';
}
}


const playGame = () => {
  lives = 5;
  livesMessage.innerHTML = `${lives} lives remaining`;
  message.style.fontSize = '1.2em';
  message.innerHTML = 'Try to guess the word using the letters below';
  playing = true;
  master = [];
  pgArr = [];
  random = Math.floor(Math.random() * wordArr.length);
  randomWord = wordArr[random];
  turnIntoArr(randomWord);
  wordToHtml(randomWord);
  q.style.display = 'inline-block';
  w.style.display = 'inline-block';
  e.style.display = 'inline-block';
  r.style.display = 'inline-block';
  t.style.display = 'inline-block';
  y.style.display = 'inline-block';
  u.style.display = 'inline-block';
  i.style.display = 'inline-block';
  o.style.display = 'inline-block';
  p.style.display = 'inline-block';
  a.style.display = 'inline-block';
  s.style.display = 'inline-block';
  d.style.display = 'inline-block';
  f.style.display = 'inline-block';
  g.style.display = 'inline-block';
  h.style.display = 'inline-block';
  j.style.display = 'inline-block';
  k.style.display = 'inline-block';
  l.style.display = 'inline-block';
  z.style.display = 'inline-block';
  x.style.display = 'inline-block';
  c.style.display = 'inline-block';
  v.style.display = 'inline-block';
  b.style.display = 'inline-block';
  n.style.display = 'inline-block';
  m.style.display = 'inline-block';
}

playGame();

function reset () {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
playGame();
}

playButton.onclick = () => {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
playGame();
}
