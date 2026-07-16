let music = new Audio("hee hee.mp3");
let Audioturn = new Audio("hee hee.mp3");
let gameover = new Audio("hee hee.mp3");
let turn = "X";
let fin = false;

const changeturn = () => {
    return turn === "X" ? "0" :"X";
}

const Checkwinner = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [[0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],]
        win.forEach(e =>{
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
                fin = true;
                //displaying the gif
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "16vw"
                alert (boxtext[e[0]].innerText + " has won" );

            }
            })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn =changeturn();
            Audioturn.play();
            Checkwinner();
            //game over function
        if( !fin){
            document.getElementsByClassName("info")[0].innerText ="turn for " + turn;
        }
        }
    })
}) 



// reset function
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    // game over function
    fin= false;
            document.getElementsByClassName("info")[0].innerText ="turn for " + turn;
            // removing gif for after reset
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "0vw"

        

})