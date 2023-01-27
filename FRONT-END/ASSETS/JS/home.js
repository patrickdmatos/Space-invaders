const nav = document.getElementById('nav');
const points = document.getElementsByClassName('counter');
const grid = document.querySelector('.parent');

let gridRow = 10
let gridColumn = 6

document.addEventListener('keydown', function (event) {
    const key = event.code;


    function changeDirectionRight() {
        gridColumn = gridColumn + 1;
        nav.style.gridColumn = gridColumn;
    }
    function changeDirectionLeft() {
        gridColumn = gridColumn - 1;
        nav.style.gridColumn = gridColumn;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    async function movieShot() {
        const bullet = document.createElement('div');
        bullet.classList.add('shot');
        bullet.id = 'shot';

        grid.appendChild(bullet);

        bullet.style.gridColumn = gridColumn;
        for (let row = 1; row < 10; row++) {
            bullet.style.gridRow = gridRow - row;

            await sleep(400)
            
            if (bullet.style.gridRow == '1 / auto') {
                bullet.parentElement.removeChild(bullet)
            }
        }
    }
    switch (key) {
        case "ArrowLeft":
            changeDirectionLeft();
            break;
        case "KeyA":
            changeDirectionLeft()
            break;
        case "ArrowRight":
            changeDirectionRight()
            break;
        case "KeyD":
            changeDirectionRight()
            break;
        case "Space":
            movieShot()
            break;
        case "ArrowUp":
            movieShot()
            break;
        case "KeyW":
            movieShot()
            break;
    }

});

(setTimeout(function respawn(){
    const blockEnemies = document.createElement('div')
    const enemies = document.createElement('img');
    enemies.classList.add('enemies');
    blockEnemies.classList.add('blockEnemies');
    enemies.id = 'enemies';

    blockEnemies.appendChild(enemies);
    
    grid.appendChild(blockEnemies);
}, 10000))();
