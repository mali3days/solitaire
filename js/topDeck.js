var topDeck = (function () {

    var deckElem = document.getElementById('deck'),
        wastePile = document.getElementById('waste_pile'),
        foundation = document.getElementById('foundation'),
        deck = [].concat(shufflingDeck.deckForTop),
        i = 0;

    deckElem.addEventListener('click', _showTheCardsByClicking);

    function _showTheCardsByClicking() {

        if (i < deck.length) {  // [0...23] at start for top deck

            if (i === deck.length - 1) {    //the last card removed from the deck
                deckElem.id = 'reload';
            }

            _addCardWithClassDraggableToWastePile();

        } else {    //all the cards are on the left

            _returnCardBackAndClearTheWastePile();

        }
    }


    function _addCardWithClassDraggableToWastePile() {

        var animBackSliceRight = document.createElement('div');

        animBackSliceRight.classList.add('forAnimateSliceTopDeck');
        foundation.appendChild(animBackSliceRight);

        setTimeout(function() {
            animBackSliceRight.classList.add('sliceToLeftTopDeck');

        }, 30); // add class of animation to element after 30 msec


        setTimeout(function() {

            var theDiv = document.createElement('div'),
                card = deck[i];

            foundation.removeChild(animBackSliceRight);

            theDiv.classList.add('draggable');
            theDiv.classList.add('flip');
            theDiv.id = card;

            theDiv.classList.remove('flip');

            wastePile.insertBefore(theDiv, wastePile.firstChild);

            i+=1;

        }, 500); //remove class of animation and add card to wastePile after 500 msec


    }

    function _returnCardBackAndClearTheWastePile() {

        if (deck.length > 0) {
            deckElem.id = 'deck';

            while(wastePile.firstChild) {
                wastePile.removeChild(wastePile.firstChild);
                i = 0;
            }
        }

    }

    function deleteСardsFromTopDeck(dragObject) {

        var id = dragObject.elem.id;

        _inArray(id, deck);

    }

    function _inArray(what, where) {
        var i = 0;

        for(i; i < where.length; i++) {

            if (what === where[i]) {

                _deleteTheCardFromDeck(i, where);

            }
        }
    }

    function _deleteTheCardFromDeck(what, from) {

        if (from.length === 1) { //if the array remains the number one change reload id

            var reload = document.getElementById('reload');

            reload.parentNode.removeChild(reload);
            wastePile.parentNode.removeChild(wastePile);
        }

        from.splice(what, 1);   // delete 1 card

        i-=1;

    }

    return {

        deleteСardsFromTopDeck: deleteСardsFromTopDeck

    }

})();