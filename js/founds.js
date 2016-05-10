var founds = (function () {

    function aceCaught(dragElem, dropElem) {

        var drop = dropElem,
            drag = dragElem.elem.id,
            found = drop.id.slice(0, 5), //'found' for found1(2,3,4)
            idDrop =  +drop.id.slice(1),
            parentOfDropPlace = document.getElementById(drop.id).parentNode;

        if (found === 'found') {         //ace stand into found1(2,3,4)

            _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, 0, 0);

        } else if (idDrop === 2
            && _checkForSublingColorAndParent(drop, drag, parentOfDropPlace) )  {   //Ace gets two

            _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, 20, 0);

        } else {
            DragManager.onDragCancel(dragElem);         //return the card to its place
        }

    }

    function kingCaught(dragElem, dropElem) {

        var drop = dropElem,
            drag = dragElem.elem.id,
            parentOfDropPlace = document.getElementById(drop.id).parentNode,
            found = drop.id.slice(0, 3), // 'col' for col1(2,3,4,5,6,7)
            idDrop =  +drop.id.slice(1),
            idDrag =  +drag.slice(1);

        if (found === 'col' && !drop.firstElementChild) {   //add King stand into col1(2,3,4,5,6,7)

            _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, 0, 0);

        } else if (idDrop === idDrag - 1
            &&  _checkForSameColorFirstChildAndParent(parentOfDropPlace, drop, dragElem) ) {   //King stay at Q at home

            _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, 0, 0);

            _checkTheWin();

        } else {
            DragManager.onDragCancel(dragElem);         //return the card to its place
        }
    }


    function twoCatch(dragElem, dropElem) {

        var drop = dropElem,
            drag = dragElem.elem.id,
            parentOfDropPlace = document.getElementById(drop.id).parentNode,
            idDrop =  +drop.id.slice(1),
            idDrag =  +drag.slice(1);

        if (idDrop === idDrag + 1
            &&  _checkForSublingColorAndParent(drop, drag, parentOfDropPlace) ) { // if 2 stay on 3

            _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, 20, 0);

        } else if ( idDrop === 14
            && _checkForSameColorFirstChildAndParent(parentOfDropPlace, drop, dragElem) ) {

            _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, 0, 0);

        } else {
            DragManager.onDragCancel(dragElem);         //return the card to its place
        }

    }

    function cardGot(dragElem, dropElem) {

        var drop = dropElem,             //place
            drag = dragElem.elem.id,     //card
            parentOfDropPlace = document.getElementById(drop.id).parentNode,
            idDrop =  +drop.id.slice(1),
            idDrag =  +drag.slice(1);


        if (idDrop === idDrag + 1
            && _checkForSublingColorAndParent(drop, drag, parentOfDropPlace)) { // n stay on n+1 opposite color at deck

            _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, 20, 0);

        } else if ( idDrop === idDrag - 1
            && _checkForSameColorFirstChildAndParent(parentOfDropPlace, drop, dragElem) ) { //n stay on n-1 same color at home

            _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, 0, 0);

        } else {
            DragManager.onDragCancel(dragElem);     //return the card to its place
        }

    }

    function _utilFuncToCreateAppendAndRemoval(dragElem, dropElem, drag, top, left) {

        var card = dragElem.elem;

        card.id = drag;
        card.classList.add('draggable');
        card.classList.add('droppable');
        card.style.top = top + 'px';
        card.style.left = left + 'px';

        dropElem.appendChild(card);

        topDeck.deleteСardsFromTopDeck(dragElem);

        deckForTableInit.showingFacePlayingCard();
    }

    function _checkForSublingColorAndParent(drop, drag, parentOfDropPlace) {
        return !!(!drop.firstChild
        && _oppositeColorCard(drop, drag)
        && !_commonParentIsFound(parentOfDropPlace));
    }

    function _checkForSameColorFirstChildAndParent(parentOfDropPlace, drop, dragElem) {
        return !!(_commonParentIsFound(parentOfDropPlace)
        && drop.id[0] === dragElem.elem.id[0]
        && !dragElem.elem.firstChild);
    }

    function _oppositeColorCard(drop, drag) {
        var suit = drop.id[0];
        switch (suit) {
            case 'c':   // clubs
            case 's':   // spades
                return !!(drag[0] === 'd' || drag[0] === 'h');
                break;
            case 'd':   // diamonds
            case 'h':   // hearts
                return !!(drag[0] === 'c' || drag[0] === 's');
                break;
            default :
                throw new Error('oops');
        }
    }

    function _commonParentIsFound(parentOfDropPlace) { //общий родитель - found# функция для СБРОСА КАРТ В ДОМА

        var found1 = document.getElementById('found1'),
            found2 = document.getElementById('found2'),
            found3 = document.getElementById('found3'),
            found4 = document.getElementById('found4');


        return !!(found1.contains(parentOfDropPlace) ||
        found2.contains(parentOfDropPlace) ||
        found3.contains(parentOfDropPlace) ||
        found4.contains(parentOfDropPlace));
    }

    function _checkTheWin() {

        deckInit.numbOfKInHouse++;

        if (deckInit.numbOfKInHouse === 4) {

            alert('Congratulations!!! YOU WIN THIS GAME!!!');

            deckInit.numbOfKInHouse = 0;
        }

    }

    return {
        aceCaught:  aceCaught,
        kingCaught: kingCaught,
        twoCatch: twoCatch,
        cardGot: cardGot
    }

})();