btn_paper = document.getElementById("paper");
btn_scissors = document.getElementById("scissors");
btn_rock = document.getElementById("rock");//play-again
btn_play = document.getElementById("play-again");

btn_paper.onclick = ()=>{
    jugar("paper");
}
btn_scissors.onclick = ()=>{
    jugar("scissors");
}
btn_rock.onclick = ()=>{
    jugar("rock");
}
btn_play.onclick = ()=>{
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-1").style.display = "block";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("casa").innerHTML = "";
}
var puntaje = recuperar_cookie();
document.getElementById("puntaje").innerText = puntaje;
var options = ["paper", "scissors", "rock"];
var str_puntaje;

function recuperar_cookie(){
    puntaje = 0;

    if(document.cookie.includes("puntaje")){
        var array = document.cookie.split(";");
        
        for (let index = 0; index < array.length; index++) {
            if (array[index].includes("puntaje")) {
              var array2 =array[index].split("=");
              puntaje = parseInt(array2[1]);  
            }
        }
    }else{
        document.cookie = "puntaje=0; max-age=86400;";
    }
    return puntaje;
}

function jugar(election){
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "block";
    document.getElementById("jugador").innerHTML= document.getElementById(election).outerHTML;
    var gana = 2; //O->Jugador 1->Casa 2->empate

    var home_election = Math.floor(Math.random() * (3 - 0) + 0);
    if (election == "paper" && options[home_election]=="scissors") {
        puntaje--;
        gana = 1; 
    }else if (election == "paper" && options[home_election]=="rock") {
        puntaje++;
        gana = 0;
    }else if (election == "rock" && options[home_election]=="scissors") {
        puntaje++;
        gana = 0;
    }else if (election == "rock" && options[home_election]=="paper") {
        puntaje--;
        gana = 1;
    }else if (election == "scissors" && options[home_election]=="paper") {
        puntaje++;
        gana = 0;
    }else if (election == "scissors" && options[home_election]=="rock") {
        puntaje--;
        gana = 1;
    }else{
        gana = 2;
    }
    actualizar(gana, election, home_election);
}

function actualizar(gana, election, home_election) {
    var contenedor;
    var mensaje = document.getElementById("msj-res");


    setTimeout(function(){
        document.getElementById("casa").innerHTML = document.getElementById(options[home_election]).outerHTML;;
    }, 1000);

    setTimeout(function(){
        if (gana ==0) {//gana jugador
            console.log("gana jugador")
            contenedor = document.getElementById("jugador");
            contenedor.innerHTML = "<div style='background-image: radial-gradient(#2a3352af,#2a3352ce); width: 300px; height:300px; border-radius: 50%;display: flex; justify-content: center; align-items:center;'>"+document.getElementById(election).outerHTML+"</div>";
            mensaje.innerText = "YOU WIN";
        }else if(gana ==1){//gana la casa
            console.log("gana la casa")
            contenedor = document.getElementById("casa");
            contenedor.innerHTML = "<div style='background-image: radial-gradient(#2a3352af,#2a3352ce); width: 300px; height:300px; border-radius: 50%;display: flex; justify-content: center; align-items:center;'>"+document.getElementById(options[home_election]).outerHTML+"</div>";
            mensaje.innerText = "YOU LOSE";
        }else{
            mensaje.innerText = "TIE"
        }
        if (puntaje<0) {
            puntaje = 0;
            mensaje.innerText ="SHAMEFUL"
        }else{
            document.getElementById("puntaje").innerText = puntaje;
        }
        document.getElementById("resultado").style.display = "block";
        document.cookie = "puntaje="+puntaje+"; max-age=86400;"
    }, 1500);
}