$(document).keypress(function(){
    start_game();
})

function button_animation(button){
    $("." + button).addClass("pressed");
    setTimeout(function(){
        $("." + button).removeClass("pressed");
    }, 100);
}

function gen_sequence(buttons){
    var idx = Math.floor(Math.random() * 4);
    return buttons[idx];
}

var sequence = [];
var userSequence = [];
var level = 0;

$(".btn").click(function(){
    var userColor = this.id;
    userSequence.push(userColor);
    var button_sound=new Audio("sounds/"+userColor+".mp3");
    button_sound.play();
    button_animation(userColor);
    if(!check_sequence()){
        var game_over=new Audio("sounds/wrong.mp3");
        game_over.play();
        $("#level-title").text("Game Over, Press Any Key to Restart");
        sequence = [];
        userSequence = [];
        level = 0;
    }
});

function check_sequence(){
    for(let i = 0; i < userSequence.length; i++){
        if(userSequence[i] != sequence[i]){
            return false;
        }
    }
    if(userSequence.length == sequence.length){
        userSequence = [];
        setTimeout(start_game, 1000);
    }
    return true;
}

function start_game(){
    level++;
    $("#level-title").text("Level " + level);
    var buttons = ["red", "green", "blue", "yellow"];
    sequence.push(gen_sequence(buttons));
    button_animation(sequence[sequence.length - 1]);
}