var deckForTableInit = (function () {

    var _deck = shufflingDeck.deckForTable,
        _LASTINDEXOFCOL7 = 6,
        _LASTINDEXOFCOL6 = 12,
        _LASTINDEXOFCOL5 = 17,
        _LASTINDEXOFCOL4 = 21,
        _LASTINDEXOFCOL3 = 24,
        _LASTINDEXOFCOL2 = 26,
        _LASTINDEXOFCOL1 = 27,
        i = 0;

    while(i < _deck.length) {

        var card = _deck[i];
        var cellCard = document.getElementById('tab' + i );

        if( i === _LASTINDEXOFCOL7 ||
            i === _LASTINDEXOFCOL6 ||
            i === _LASTINDEXOFCOL5 ||
            i === _LASTINDEXOFCOL4 ||
            i === _LASTINDEXOFCOL3 ||
            i === _LASTINDEXOFCOL2 ||
            i === _LASTINDEXOFCOL1) {

            cellCard.classList.add('draggable');
            cellCard.classList.add('droppable');
            cellCard.id = card;

            i+=1;

        } else {    // face down card

            cellCard.classList.add('full_back');

            i+=1;
        }

    }

    function showingFacePlayingCard() {

        var numbOfColumns = 7,
            m = 1;  //index of first colon

        for (m; m <= numbOfColumns; m +=1) {
            var col = 'col' + m,
                lstChildOfcol = document.getElementById(col).lastElementChild;

            if (lstChildOfcol) {
                if (lstChildOfcol.id.substring(0,3) === 'tab') {

                    var id = lstChildOfcol.id.slice(3);

                    lstChildOfcol.classList.add('draggable');
                    lstChildOfcol.classList.add('droppable');
                    lstChildOfcol.id = _deck[id];
                }
            }
        }
    }

    return {
        showingFacePlayingCard: showingFacePlayingCard
    }

})();