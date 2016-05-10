var settings = (function () {

    var cc1 = document.getElementById('cc1').addEventListener('change', changeStyleOfCards),
        cc2 = document.getElementById('cc2').addEventListener('change', changeStyleOfCards),
        cc3 = document.getElementById('cc3').addEventListener('change', changeStyleOfCards),
        gameTable = document.getElementById('game_table'),
        contrast = document.getElementById('contrast'),
        background = document.getElementById('background'),
        radio = document.getElementById('radio'),
        body = document.querySelector('body');

    contrast.addEventListener('input', setImage);
    background.addEventListener('input', setBackGround);

    contrast.defaultValue = 0;
    background.defaultValue = 0;

    function setImage() {
        var a = contrast.value; // value of range
        switch (a) {
            case "1":
                gameTable.setAttribute("style", "background-image: url('images/table1.jpg');background-repeat:none");
                break;
            case "2":
                gameTable.setAttribute("style", "background-image: url('images/table2.jpg');background-repeat:none");
                break;
            case "3":
                gameTable.setAttribute("style", "background-image: url('images/table3.jpg');background-repeat:none");
                break;
            case "4":
                gameTable.setAttribute("style", "background-image: url('images/table4.jpg');background-repeat:none");
                break;
            case "5":
                gameTable.setAttribute("style", "background-image: url('images/table5.jpg');background-repeat:none");
                break;
            case "6":
                gameTable.setAttribute("style", "background-image: url('images/table6.jpg');background-repeat:none");
                break;
            case "7":
                gameTable.setAttribute("style", "background-image: url('images/table7.jpg');background-repeat:none");
                break;
            case "8":
                gameTable.setAttribute("style", "background-image: url('images/table8.jpg');background-repeat:none");
                break;
            case "9":
                gameTable.setAttribute("style", "background-image: url('images/table9.jpg');background-repeat:none");
                break;
            case "10":
                gameTable.style.backgroundImage = "none";
                break;
            default :
                throw new Error('oops');
        }
    }

    function setBackGround() {
        var a = background.value; // value of range
        switch (a) {
            case "1":
                body.setAttribute("style", "background-image: url('images/bg1.jpg');background-repeat:none");
                break;
            case "2":
                body.setAttribute("style", "background-image: url('images/bg2.jpg');background-repeat:none");
                break;
            case "3":
                body.setAttribute("style", "background-image: url('images/bg3.jpg');background-repeat:none");
                break;
            case "4":
                body.setAttribute("style", "background-image: url('images/bg4.jpg');background-repeat:none");
                break;
            case "5":
                body.setAttribute("style", "background-image: url('images/bg5.jpg');background-repeat:none");
                break;
            case "6":
                body.setAttribute("style", "background-image: url('images/bg6.jpg');background-repeat:none");
                break;
            case "7":
                body.setAttribute("style", "background-image: url('images/bg7.jpg');background-repeat:none");
                break;
            case "8":
                body.setAttribute("style", "background-image: url('images/bg8.jpg');background-repeat:none");
                break;
            case "9":
                body.setAttribute("style", "background-image: url('images/bg9.jpg');background-repeat:none");
                break;
            case "10":
                body.style.backgroundImage = "none";
                break;
            default :
                throw new Error('oops');
        }
    }

    function changeStyleOfCards(){

        switch (this.id) {
            case 'cc1':
                body.removeAttribute('class');
                break;
            case 'cc2':
                if(body.classList[0]) {
                    body.removeAttribute('class');
                }
                body.classList.add('white');
                break;
            case 'cc3':
                if(body.classList[0]) {
                    body.removeAttribute('class');
                }
                body.classList.add('black');
                break;
            default :
                throw new Error('oops');
        }
    }

})();