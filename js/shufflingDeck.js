var shufflingDeck = (function () {

    var deckForTop = [].concat(deckInit.deck),
        deckForTable,
        j, x, i;

    for (i = deckForTop.length; i; i--) {
        j = Math.floor( Math.random() * i );
        x = deckForTop[i - 1];
        deckForTop[i - 1] = deckForTop[j];
        deckForTop[j] = x;
    }

    deckForTable = deckForTop.splice(0, 28);

    return {
        deckForTop: deckForTop,
        deckForTable: deckForTable
    }

})();