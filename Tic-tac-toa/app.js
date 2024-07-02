let boxes=document.querySelectorAll(".box");
let resetbtn=document.getElementById("reset");
let newgamebtn=document.querySelector("#newbtn");
let message=document.querySelector("#msg");
let msg_container=document.querySelector(".msg-winner")

let playerX=true;

const winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetgame=()=>{
    playerX=true;
    enable_box();
    msg_container.classList.add("hide");
}


const disable_box=()=>{
    boxes.forEach((box)=>{  
        box.disabled=true;
    });
}

const displaywin=(winner)=>{
    message.innerText=`Congratulation, winner is ${winner}`;
    msg_container.classList.remove("hide");
    disable_box();
}



const enable_box=()=>{
    boxes.forEach((box)=>{  
        box.disabled=false;
        box.innerText="";
    });
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was click")
        if(playerX){
            box.innerText="X";
            playerX=false;
        }else{
            box.innerText="O";
            playerX=true;
        }
        box.disabled=true;
        checkwinner();
    })
    
})

const checkwinner = ()=>{
    for (let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;


        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos3===pos2){
                // console.log("winner",pos1)
                displaywin(pos1);
            }
        }
    }
}

resetbtn.addEventListener("click",()=>{
    console.log("reset was click")
})

resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);