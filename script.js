console.log("Welcome to tic tac toe game");
let music = new Audio("music.mp3");
let audioturn = new Audio("tang.wav");
let gameover = new Audio("gameover.mp3");
let turn = "X"
let isgameover = false

// function to change the players turn
function changeturn() {
  return turn === "X" ? "0" : "X";

} 

// music.play()

// function to check win 
// const checkwin = ()=>{
//   let boxtext = document.getElementsByClassName('boxtext');
//   let wins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   wins.forEach(e =>{
//     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[e]].innerText !== "")){
//       Element.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + "won"
//       isgameover = true;

//     }

    

//   })

// }
const checkwin = ()=>{
let bt = document.getElementsByClassName('boxtext');
let wins = [
  [0, 1, 2, 9, 3, 0],
  [3, 4, 5, 9, 10, 0],
  [6, 7, 8, 9, 18, 0],
  [0, 3, 6, -3, 10, 90],
  [1, 4, 7, 10, 10, 90],
  [2, 5, 8, 21, 10, 90],
  [0, 4, 8, 9.5, 10.5, 30],
  [2, 4, 6, 9.5, 10.5, 150],
]
wins.forEach(e =>{
  if((bt[e[0]].innerText === bt[e[1]].innerText) && (bt[e[2]].innerText === bt[e[1]].innerText) && (bt[e[0]].innerText !== "")){
    document.querySelector('.info').innerText = bt[e[0]].innerText  + "  won"
    isgameover = true;
    // document.querySelector('.img').getElementsByTagName('img')[0].style.width = '30vw'
    document.querySelector(".line").style.width = '20vw';
    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
  }
}

)



}
// logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
let boxtext = Element.querySelector('.boxtext');
  Element.addEventListener('click', ()=>{
    if(boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn = changeturn();
        audioturn.play();
        checkwin();
        if(!isgameover){
         
          document.getElementsByClassName("info")[0].innerText = 'turn for ' +  turn;

        }

    }
  })
})

// listner when reset is clicked
button.addEventListener('click', ()=>{
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(Element =>{
    Element.innerText = '';
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = '0vw';
  document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
})


