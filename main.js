var rock = 0;
var paper = 1;
var scissors = 2;
var spock = 3;
var lizzard = 4;

var me = 1;
var computer = 3;

var winner = me == computer ? "Tie" : (computer > me ? (5 -(computer - me)) : (me - computer)) % 2 == 1 ? "Win" : "Lose"; 

console.log(check());

function check(me, computer) {
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            var me = i;
            var computer = j;
            var winner = me == computer ? "Tie" : (computer > me ? (5 -(computer - me)) : (me - computer)) % 2 == 1 ? "Win" : "Lose";

            console.log(`You Chose: ${i}, Computer Chose: ${j}, Winner: ${winner}`)
        }
    }
}