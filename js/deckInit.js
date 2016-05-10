var deckInit = (function () {

    var i,
        p,
        deck = [],
        key = 0,
        numberOfKingsInHouses = 0;

    for( i = 1; i <= 4; i+=1 ) {        // suit
        for (p = 2; p <= 14; p += 1) {  // 2, 3, 4, 5, 6, 7, 8, 9, 10, 11(J), 12(Q), 13(K), 14(A)

            switch (i) {
                case 1:
                    deck[key++] = 'h' + p;  // hearts
                    break;
                case 2:
                    deck[key++] = 'd' + p;  // diamonds
                    break;
                case 3:
                    deck[key++] = 'c' + p;  // clubs
                    break;
                case 4:
                    deck[key++] = 's' + p;  // spades
                    break;
                default :
                    throw new Error('oops');
            }
        }
    }

    return {
        deck: deck,
        numbOfKInHouse: numberOfKingsInHouses // for checking win, usable in founds.js (_checkTheWin)
    };

})();