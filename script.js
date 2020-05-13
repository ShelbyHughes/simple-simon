var game = {
    score: 0,
    possibilities: ['#green','#blue', '#red', '#yellow'],
    currentGame: [],
    player: []
};

function newGame() {
    clearGame();
}

function clearGame() {
    game.currentGame = [];
    game.score = 0;
    $('#score').html('Score: ' + game.score);
    generateMove();
}

function generateMove(){
    game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
    showMoves();
}

function showMoves() {
    var i = 0;
    var moves = setInterval(function(){
        playGame(game.currentGame[i]);
        i++;
        if (i >= game.currentGame.length) {
            clearInterval(moves);
        }
    }, 600);

    clearPlayer();
}

function playGame(field) {
    $(field).addClass('hover');
    setTimeout(function(){
        $(field).removeClass('hover');
    }, 300);
}

function clearPlayer() {
    game.player = [];
}

function addToPlayer(id) {
    var field = "#"+id;
    game.player.push(field);
    playerTurn(field);
}

function playerTurn(x) {
    if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
        alert('Wrong move! Try again!');
        showMoves();
    } else {
        console.log('Good Move!');
        var check = game.player.length === game.currentGame.length;
        if (check) {
            if(game.score == 20){
                alert('You won! Congrats.');
            } else {
                alert('Next round!');
                nextLevel();
            }
        }
    }
}

function nextLevel() {
    addScore();
}

function addScore() {
    game.score++;
    $('#score').html('Score: ' + game.score);
    generateMove();
}
