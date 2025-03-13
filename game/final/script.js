(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', 
               '4die.png', '5die.png', '6die.png', '7die.png', '8die.png', '9die.png', '10die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 40
    };

    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2><h2>';
        gameControl.innerHTML += '<button id="quit">quit game</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();

    });

    function setUpTurn(){
        game.innerHTML = `<p>deal the cards for ${gameData.players[gameData.index]}</p>`
        actionArea.innerHTML = '<button id="roll">deal cards</button>';

        document.querySelector('#roll').addEventListener('click', function(){
            //console.log('roll the dice');
            throwDice()
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() *10) +1;
        console.log (gameData.roll1);
        gameData.roll2 = Math.floor(Math.random() *10) +1;
        console.log (gameData.roll2);
        game.innerHTML = `<p>deal the cards for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two ones are rolled
        if(gameData.rollSum === 2){
            game.innerHTML += '<p>on no! snake eyes!</p>';
            gameData.index ? (gameData.index = 0): (gameData.index =1);
            gameData.score[gameData.index] = 0;
            //show current score...
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        //if one one was rolled
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0): (gameData.index =1);
            game.innerHTML += `<p>one of your cards was a one, switching to player ${gameData.score[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        //if neither one was rolled
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">deal again</button> <button id="pass">pass</button>';
            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });
            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0): (gameData.index =1);
                setUpTurn();
            });
            //set the winning condition
            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
    
            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'start a new game?';
        } else {
            showCurrentScore();
        }
    }

    
    function showCurrentScore() {
        // score.innerHTML = `<p>the score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
    
        document.querySelector('.player-score1 .score').textContent = gameData.score[0];
        document.querySelector('.player-score2 .score').textContent = gameData.score[1];
    }
    


    const dealSound = new Audio('audio/shuffle.m4a');
    dealSound.preload = 'auto';

    const switchSound = new Audio('audio/glass2.m4a');
    switchSound.preload = 'auto';


    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'roll') {
            dealSound.currentTime = 0;
            dealSound.play().catch(error => console.log('Deal sound error:', error));
            throwDice();
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target && (e.target.id === 'pass' || e.target.id === 'quit')) {
            switchSound.currentTime = 0;
            switchSound.play().catch(error => console.log('Switch sound error:', error));
        }
    });


    const showRules = document.querySelector('#showRules');
    const infoBox = document.querySelector('#infoshow');
    const closeInfo = document.querySelector('#closeInfo');

    showRules.addEventListener('click', () => {
        infoBox.style.display = 'block';
    });

    closeInfo.addEventListener('click', () => {
        infoBox.style.display = 'none';
    });



})();