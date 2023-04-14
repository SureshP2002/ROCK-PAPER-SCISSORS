const playerText=document.getElementById("PT");
const computerText=document.getElementById("CT");
const resultText=document.getElementById("RT");
const button=document.querySelectorAll(".btn");

let player;
let comp;
let res;
button.forEach((element)=>{element.addEventListener("click",()=>{
    player=element.textContent
    findOpp();
    playerText.textContent=`PLAYER: ${player}`;
    computerText.textContent=`COMPUTER :${comp}`;

    resultText.textContent=check();
})})

function findOpp()
{
    const val=Math.floor(Math.random()*3)+1;
    switch(val)
    {
        case 1:
            comp="ROCK";
            break;
        case 2:
            comp="PAPER";
            break;
        case 3:
            comp="SCISSORS";
            break;
    }
}
function check(){
    if(comp==player)
    {
        return "DRAW!"
    }
    else if(player=="ROCK")
    {
        return (comp=="PAPER")?"YOU LOSE!":"YOU WIN";
    }
    else if(player=="PAPER")
    {
        return (comp=="SCISSORS")?"YOU LOSE!":"YOU WIN";
    }
    else if( player=="SCISSORS")
    {
        return (comp=="PAPER")?"YOU LOSE!":"YOU WIN";
    }
}