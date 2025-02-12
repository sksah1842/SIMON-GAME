let gamesqn = [];
let usersqn = [];
let colors = ["red","green","yellow","purple"];
let level = 0;
started = false;
let h2 = document.querySelector("h2");
let highestScore = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started")
        started = true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    
}
function levelup(){
    usersqn = [];
    level++;
    h2.innerHTML=`Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = colors[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randcolor);
    // console.log(randbtn);
    gamesqn.push(randcolor);
    console.log(gamesqn);
    btnflash(randbtn);
}

function checksqn(idx){
    // let idx = level-1;
    
    if(gamesqn[idx] == usersqn[idx]){
        if(usersqn.length==gamesqn.length){
            // console.log("correct");
        setTimeout(levelup(),1000);
        }
        else{

        }
        
    }
    else{
        highestScore = Math.max(highestScore,level);
        h2.innerHTML = `Game over! :your score is <b>${level}</b> <br> highest score is ${highestScore} <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        gamesqn=[];
        usersqn=[];
        started=false;
        level = 0;
    }

}

function btnPress(){
    // console.log(this);
    let btn = this;
    btnflash(btn);

    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    usersqn.push(usercolor);
    // console.log(usersqn);
    checksqn(usersqn.length-1);

}

let allbtns = document.querySelectorAll(".box");

for(btn of allbtns){
    btn.addEventListener("click", btnPress);

}