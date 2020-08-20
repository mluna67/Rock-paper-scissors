btn_paper = document.getElementById("paper");
btn_scissors = document.getElementById("scissors");
btn_rock = document.getElementById("rock");

btn_paper.onclick = ()=>{
    jugar("paper");
}
btn_scissors.onclick = ()=>{
    jugar("scissors");
}
btn_rock.onclick = ()=>{
    jugar("rock");
}

function jugar(election){
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "block";
    console.log(election);
}