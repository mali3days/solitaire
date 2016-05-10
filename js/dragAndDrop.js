var DragManager = new function() {

    var dragObject = {};

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    function onMouseDown(e) {
        if (e.which != 1) {
            return;
        }

        var elem = e.target.closest('.draggable');

        if (!elem) {
            return;
        }

        dragObject.elem = elem;

        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;


        return false;
    }

    function onMouseMove(e) {

        var threshold = 15;

        if (!dragObject.elem) {
            return;
        }

        if (!dragObject.avatar) {

            var moveX = e.pageX - dragObject.downX;
            var moveY = e.pageY - dragObject.downY;

            if (Math.abs(moveX) < threshold && Math.abs(moveY) < threshold) {
                return;
            }

            dragObject.avatar = createAvatar(e);

            if (!dragObject.avatar) {
                dragObject = {};
                return;
            }

            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e);
        }

        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        return false;
    }

    function onMouseUp(e) {

        if (dragObject.avatar) {

            finishDrag(e);

        }

        dragObject = {};
    }

    function finishDrag(e) {

        var dropElem = findDroppable(e);

        if (!dropElem) {

            onDragCancel(dragObject);

        } else {

            onDragEnd(dragObject, dropElem);

        }

    }

    function createAvatar() {
        var avatar = dragObject.elem;

        var old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.style.position || '',
            left: avatar.style.left || '',
            top: avatar.style.top || '',
            zIndex: avatar.style.zIndex || ''
        };

        avatar.rollBack = function() {
            avatar.classList.add('border_bad');
            cardReturnAnimation.animationOfCardReturn(avatar, dragObject, old);
            avatar.classList.remove('border_good');
        };

        return avatar;
    }

    function startDrag() {
        var avatar = dragObject.elem;

        document.body.appendChild(avatar);
        avatar.style.zIndex = 2;
        avatar.style.position = 'absolute';
        avatar.style.cursor = 'pointer';

        avatar.classList.add('border_good');

    }

    function findDroppable(event) {

        dragObject.avatar.hidden = true;

        var elem = document.elementFromPoint(event.clientX, event.clientY);

        dragObject.avatar.hidden = false;

        if (elem == null) {
            return null;
        }

        return elem.closest('.droppable');

    }

    function onDragCancel(dragObject) {
        dragObject.avatar.rollBack();
    }

    function onDragEnd(dragObject, dropElem) {
        dragEndForAllCards.dragEnding(dragObject, dropElem);
        dragObject.elem.classList.remove('border_good');
    }

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        }
    }

    return {
        onDragCancel: onDragCancel
    }

};