let score=JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    ties: 0,
    loses: 0,
};
document.querySelector('.userscore').innerHTML=` Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.ties}.`

let isAutoPlay=false;
let IntervalID;
function autoplay()
{
    if (isAutoPlay!=true){
        IntervalID=setInterval(function(){
            const playerchoice=computerMove();
            calcmove(playerchoice);
        },1000);
        isAutoPlay=true;
    }
    else{
        clearInterval(IntervalID);
        isAutoPlay=false;
    }
}
   
function calcmove(playerchoice){
    let computermove=computerMove();
    let result='';
    if(playerchoice==='rock')
    {
        if(computermove==='rock')
        result='You Tie';
        else if(computermove==='scissor')
        result='You Win';
        else
        result='You Lose';
    }
    if(playerchoice==='paper')
    {
        if(computermove==='rock')
        result='You Win';
        else if(computermove==='scissor')
        result='You Lose';
        else
        result='You Tie';
    }
    if(playerchoice==='scissor')
    {
        if(computermove==='rock')
        result='You Lose';
        else if(computermove==='scissor')
        result='You Tie';
        else
        result='You Win';
    }
    if(result==='You Win')
    score.wins++;
    else if(result==='You Lose')
    score.loses++;
    else
    score.ties++;

    localStorage.setItem('score',JSON.stringify(score))

    document.querySelector('.userresult').innerHTML= `${result}`
    document.querySelector('.usermoves').innerHTML= 
    `You chose 
     <img src="${playerchoice}.png" class=" ml-1 mr-5 relative bottom-3 w-20 h-14"></img>
      Computer chose
      <img src="${computermove}.png" class=" w-20 h-14 relative bottom-4 right-1"></img></p>`
    document.querySelector('.userscore').innerHTML=` Wins: ${score.wins}. Loses: ${score.loses}. Ties: ${score.ties}.`
}

function computerMove(){
    let gen=Math.random();
    let computermove=(gen>=0&& gen<1/3)?'rock':(gen>=1/3 && gen<2/3)?'paper':'scissor';
    return computermove;
}