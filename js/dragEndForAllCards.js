var dragEndForAllCards = (function () {

    function dragEnding(dragObject, dropElem) {

        var rankCard = +dragObject.elem.id.slice(1), // 2,3...13,14 (Numb)
            two   = 2,
            three = 3,
            four  = 4,
            five  = 5,
            six   = 6,
            seven = 7,
            eight = 8,
            nine  = 9,
            ten   = 10,
            jack  = 11,
            lady  = 12,
            king  = 13,
            ace   = 14;

        switch(rankCard) {
            case   ace:
                founds.aceCaught(dragObject, dropElem);
                break;
            case  king:
                founds.kingCaught(dragObject, dropElem);
                break;
            case   two:
                founds.twoCatch(dragObject, dropElem);
                break;
            case three:
            case  four:
            case  five:
            case   six:
            case seven:
            case eight:
            case  nine:
            case   ten:
            case  jack:
            case  lady:
                founds.cardGot(dragObject, dropElem);
                break;
            default :
                DragManager.onDragCancel(dragObject);
        }
    }

    return {
        dragEnding: dragEnding
    }

})();