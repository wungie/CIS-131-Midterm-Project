
//chanceAry = ['good', 'bad']

window.addEventListener('load', function(){
    //this.alert("Hola")
})


document.getElementById("dice").addEventListener("click", rollDie);


function rollDie(){
    //console.log("roll!") // Used for testing
    roll = Math.ceil(Math.random() * 12);
    console.log(roll);
    var display = document.getElementById("die-sum");
    display.innerHTML = roll
    

}

function classGrade(){
    console.log("grade func");

}