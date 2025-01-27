let input = document.getElementById("input");
let t = document.querySelector(".change");
let sub = document.querySelector(".submit");
sub.addEventListener("click", function(){
    let value = input.value;
    if(value == 1){
        t.style.color = "white";
    }
    else if (value == 2){
        t.style.color = "rgb(0, 247, 255)";
    }
    else if (value == 3){
        t.style.color = "greenyellow";
    }
    else if (value == 4){
        t.style.color = "red"; 
    }
    else if (value == 5){
        t.style.color = "hotpink";
    }
    else if (value == 6){
        t.style.color = "chocolate";
    }
    else if (value == 7){
        t.style.color = "gold";
    }
    else if (value == 8){
        t.style.color = "green";
    }
    else if (value == 9){
        t.style.color = "blue";
    }
    else if (value == 10){
        t.style.color = "royalblue";
    }
    else {
        t.style.color = "black";
    }
    if(value>10 || value<1){
        alert("Input Must Be color code only")
    }
})

