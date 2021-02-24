function Mode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
function Greeting(){
    var greeting=document.getElementById("Greeting");
    if(greeting.innerHTML === "GOOD MORNING!"){
        greeting.innerHTML ="GOOD NIGHT!";
    }else{
        greeting.innerHTML="GOOD MORNING!"
    }
}
function DayorNight(){
    var DayorNight=document.getElementById("DayorNight");
    if(DayorNight.innerHTML === "This is Day time!"){
        DayorNight.innerHTML ="This is Night time!";
    }else{
        DayorNight.innerHTML="This is Day time!"
    }
}
function Word(){
    var word = document.getElementById("word");
    if(document.getElementById("word").style.color === "red"){
       document.getElementById("word").style.color = "blue"
    }else{
        document.getElementById("word").style.color = "red";
    }
}
function DayorNight2(){
    var DayorNight2=document.getElementById("DayorNight2");
    if(DayorNight2.innerHTML === "day"){
        DayorNight2.innerHTML ="night";
    }else{
        DayorNight2.innerHTML="day";
    }
}   
function DayorNight3(){
    var DayorNight2=document.getElementById("DayorNight3");
    if(DayorNight2.innerHTML === "day"){
        DayorNight2.innerHTML ="night";
    }else{
        DayorNight2.innerHTML="day";
    }
}  



var button = document.getElementById("button");
button.addEventListener("click",Mode);
button.addEventListener("click",Greeting);
button.addEventListener("click",DayorNight);
button.addEventListener("click",Word);
button.addEventListener("click",DayorNight2);
button.addEventListener("click",DayorNight3);