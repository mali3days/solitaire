var cardReturnAnimation = (function () {

    function animationOfCardReturn(avatar, dragObject, old) {

        avatar.classList.remove('draggable');
        avatar.classList.remove('droppable');

        var oldLeft =  parseFloat(dragObject.downX -  dragObject.shiftX),
            oldTop = parseFloat(dragObject.downY -  dragObject.shiftY),
            currentLeft = parseFloat(avatar.style.left),
            currentTop = parseFloat(avatar.style.top),
            shiftLeft = (currentLeft - oldLeft),
            shiftTop = (currentTop - oldTop),
            cardStayBack = false, // flag to stopping drow animation
            incT,                 // increment for Top for each step
            incL;                 // increment for Left for each step

        var animationCardBack = setInterval(function() {
            if (cardStayBack) {
                clearInterval(animationCardBack);
                return;
            }
            draw();
        }, 0 );

        (function _determGrowthRateForDraw() {
            if( Math.abs(+shiftTop) >  Math.abs(+shiftLeft) ) {
                incT = Math.abs(shiftTop/shiftLeft)*2;  // 2 - factor to accelerate (the more - the faster)
                incL = Math.abs(shiftLeft/shiftLeft)*2;
            } else {
                incT = Math.abs(shiftTop/shiftTop)*2;
                incL = Math.abs(shiftLeft/shiftTop)*2;
            }
        })();

        function draw() {

            // 5 is threshold for determining shift directions card
            if(shiftLeft >= 5 && shiftTop >= 5) {                       //BOTTOM-RIGHT => TOP-LEFT

                avatar.style.left =  parseFloat(currentLeft) - parseFloat(incL) + 'px';
                avatar.style.top =  parseFloat(currentTop) - parseFloat(incT)   + 'px';

                currentLeft = parseFloat(currentLeft) - parseFloat(incL) ;
                currentTop = parseFloat(currentTop) - parseFloat(incT);

                shiftLeft = parseFloat(shiftLeft) - parseFloat(incL);
                shiftTop = parseFloat(shiftTop) - parseFloat(incT);

            } else if (shiftLeft <= -5 && shiftTop <= -5) {             //TOP-LEFT => BOTTOM-RIGHT

                avatar.style.left =  parseFloat(currentLeft) + parseFloat(incL) + 'px';
                avatar.style.top =  parseFloat(currentTop) + parseFloat(incT)   + 'px';

                currentLeft = parseFloat(currentLeft) + parseFloat(incL) ;
                currentTop = parseFloat(currentTop) + parseFloat(incT);

                shiftLeft = parseFloat(shiftLeft) + parseFloat(incL);
                shiftTop = parseFloat(shiftTop) + parseFloat(incT);

            } else if (shiftLeft <= -5 && shiftTop >= 5) {              //BOTTOM-LEFT => TOP-RIGHT

                avatar.style.left =  parseFloat(currentLeft) + parseFloat(incL) + 'px';
                avatar.style.top =  parseFloat(currentTop) - parseFloat(incT)   + 'px';

                currentLeft = parseFloat(currentLeft) + parseFloat(incL) ;
                currentTop = parseFloat(currentTop) - parseFloat(incT);

                shiftLeft = parseFloat(shiftLeft) + parseFloat(incL);
                shiftTop = parseFloat(shiftTop) - parseFloat(incT);

            } else if (shiftLeft >= 5 && shiftTop <= -5) {              //TOP-RIGHT => BOTTOM-LEFT

                avatar.style.left =  parseFloat(currentLeft) - parseFloat(incL) + 'px';
                avatar.style.top =  parseFloat(currentTop) + parseFloat(incT)   + 'px';


                currentLeft = parseFloat(currentLeft) - parseFloat(incL) ;
                currentTop = parseFloat(currentTop) + parseFloat(incT);

                shiftLeft = parseFloat(shiftLeft) - parseFloat(incL);
                shiftTop = parseFloat(shiftTop) + parseFloat(incT);


            } else {

                avatar.style.position = old.position;
                avatar.style.left = old.left;
                avatar.style.top = old.top;
                avatar.style.zIndex = old.zIndex;

                avatar.classList.add('draggable');
                avatar.classList.add('droppable');
                avatar.classList.remove('border_bad');

                old.parent.insertBefore(avatar, old.nextSibling);

                cardStayBack = true;

            }
        }

    }

    return {
        animationOfCardReturn: animationOfCardReturn
    };

})();