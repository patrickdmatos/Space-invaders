const nav = document.getElementById('nav');
const points = document.getElementsByClassName('counter');
const bullet = document.getElementById('shot');
let row = 15
let gridColumn = 6
bullet.style.gridColumn = 6

document.addEventListener('keydown', function (event) {
    const key = event.code;


    function changeDirectionRight() {
        gridColumn = gridColumn + 1;
        nav.style.gridColumn = gridColumn;
        bullet.style.gridColumn = gridColumn;
    }
    function changeDirectionLeft() {
        gridColumn = gridColumn - 1;
        nav.style.gridColumn = gridColumn;
        bullet.style.gridColumn = gridColumn;
    }
    function respawn() {
        const enemie = new enemie1();
    }
    function shotColumn() {
        bullet.style.gridRow 
    }
    switch (key) {
        case "ArrowLeft":
            changeDirectionLeft();
            shotColumn();
            break;
        case "KeyA":
            changeDirectionLeft()
            shotColumn();
            break;
        case "ArrowRight":
            changeDirectionRight()
            break;
        case "KeyD":
            changeDirectionRight()
            shotColumn();
            break;
        case "Space":
            shot()
            break;
        case "ArrowUp":
            shot()
            break;
        case "KeyW":
            shot()
            break;
    }
});

