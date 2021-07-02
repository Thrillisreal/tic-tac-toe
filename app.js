//winning game condition
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
/*-------------------------------- Constants --------------------------------*/
const allBoxes = document.getElementsByClassName('board')
const sq0 = document.getElementById('sq0')
const sq1 = document.getElementById('sq1')
const sq2 = document.getElementById('sq2')
const sq3 = document.getElementById('sq3')
const sq4 = document.getElementById('sq4')
const sq5 = document.getElementById('sq5')
const sq6 = document.getElementById('sq6')
const sq7 = document.getElementById('sq7')
const sq8 = document.getElementById('sq8')
const status = document.getElementById('#message')


/*---------------------------- Variables (state) ----------------------------*/
let board = []
let whoseTurn = ''
let winner = null

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
// To create an event listener when individual square is clicked!
sq0.addeventlistener('click', handleClick );
sq1.addeventlistener('click', handleClick );
sq2.addeventlistener('click', handleClick );
sq3.addeventlistener('click', handleClick );
sq4.addeventlistener('click', handleClick );
sq5.addeventlistener('click', handleClick );
sq6.addeventlistener('click', handleClick );
sq7.addeventlistener('click', handleClick );
sq8.addeventlistener('click', handleClick );

/*-------------------------------- Functions --------------------------------*/
function init() {
  board = [null, null, null, null, null, null, null, null, null]
  whoseTurn = 1
  winner = null
  render()
}
// Write a function called handleClick and tell it what to do when it happens ex. x or o
player = 1

function handleClick(e){

}