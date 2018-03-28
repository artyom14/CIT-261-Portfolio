// Memory Game JavaScript
var memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
var memory_values = [];
var memory_card_ids = [];
var cards_flipped = 0;

//Shuffle memory_array values
Array.prototype.memory_card_shuffle = function () {
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//Create new board within div
function newBoard() {
    cards_flipped = 0;
    var output = '';
    memory_array.memory_card_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div id="card_' + i + '" ontouchend="memoryFlipcard(this,\'' + memory_array[i] + '\')" " onclick="memoryFlipcard(this,\'' + memory_array[i] + '\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipcard(card, val) {
    if (card.innerHTML == "" && memory_values.length < 2) {
        card.style.background = 'yellow center';
        card.innerHTML = val;
        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_card_ids.push(card.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_card_ids.push(card.id);
            if (memory_values[0] == memory_values[1]) {
                cards_flipped += 2;
                //Clear both arrays
                memory_values = [];
                memory_card_ids = [];
                //Check for board complete
                if (cards_flipped == memory_array.length) {
                    alert("You did it! Congratulations!");
                    document.getElementById('memory_board').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back() {
                    //Flip the 2 cards back over
                    var card_1 = document.getElementById(memory_card_ids[0]);
                    var card_2 = document.getElementById(memory_card_ids[1]);
                    card_1.style.background = 'url(./CSS/Paper_Mario_Cards.png) no-repeat center';
                    card_1.style.backgroundSize = '71px';
                    card_1.style.backgroundColor = 'royalblue';
                    card_1.innerHTML = "";
                    card_2.style.background = 'url(./CSS/Paper_Mario_Cards.png) no-repeat center';
                    card_2.style.backgroundSize = '71px';
                    card_2.style.backgroundColor = 'royalblue';
                    card_2.innerHTML = "";
                    //Clear both arrays
                    memory_values = [];
                    memory_card_ids = [];
                }
                setTimeout(flip2Back, 500);
            }
        }
    }
}