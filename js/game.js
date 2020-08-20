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
var puntaje = 0;
var options = ["paper", "scissors", "rock"];

function jugar(election){
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "block";
    document.getElementById("jugador").innerHTML= document.getElementById(election).outerHTML;
    var gana = false;

    var home_election = Math.floor(Math.random() * (4 - 0) + 0);
    if (election == "paper" && options[home_election]=="scissors") {
        puntaje--; 
    }else if (election == "paper" && options[home_election]=="rock") {
        puntaje++;
        gana = true;
    }else if (election == "rock" && options[home_election]=="scissors") {
        puntaje++;
        gana = true;
    }else if (election == "rock" && options[home_election]=="paper") {
        puntaje--;
    }else if (election == "scissors" && options[home_election]=="paper") {
        puntaje++;
        gana = true;
    }else if (election == "scissors" && options[home_election]=="rock") {
        puntaje--;
    }
    actualizar(gana, home_election);
}

function actualizar(gana, home_election) {
    setTimeout(function(){
        document.getElementById("casa").innerHTML = document.getElementById(options[home_election]).outerHTML;;

    }, 1000);
    if (puntaje<0) {
        console.log("El juego termina");
    }else{
        document.getElementById("puntaje").innerText = puntaje;
    }
}