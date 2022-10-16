
//var chanceAry = ['good', 'bad']
var gradesAry = ['A','B','C','D','F']

window.addEventListener('load', function(){
    //this.alert("Hola")
})


document.getElementById("dice").addEventListener("click", rollDie);


function rollDie(){
    //console.log("roll!") // Used for testing
    roll = Math.ceil(Math.random() * 12);
    console.log(roll);
    var display = document.getElementById("die-sum");
    display.innerHTML = roll;
    //classGrade()


}

function classGrade(){
    console.log("grade func");
    document.getElementById('grade').addEventListener('click', function(){
        var g = gradesAry[Math.floor(Math.random() * gradesAry.length)];
        document.getElementById('g-display').innerHTML = g;
        //console.log(g)
    })
    
}

