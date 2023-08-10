const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
    toggled = !toggled;

    document.body.classList.toggle("toggled");
};

const handleOnClick = (index) => {
    toggle();

    anime({
        targets: ".tile",
        opacity: [
            { value: 0, easing: "linear", duration: 150 },

            { value: 1, easing: "linear", duration: 150 },
        ],
        delay: anime.stagger(80, {
            grid: [columns, rows],
            from: index,
        }),
    });
};

const createTile = (index) => {
    const tile = document.createElement("div");

    tile.classList.add("tile");
    tile.classList.add("-z-50");

    tile.style.opacity = toggled ? 0 : 1;

    tile.onclick = (e) => handleOnClick(index);

    return tile;
};

const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
};

const createGrid = () => {
    wrapper.innerHTML = "";

    const size = 100;

    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(window.innerHeight / size);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
};

createGrid();

window.onresize = () => createGrid();
var X, Y;
document.addEventListener(
    "mousemove",
    (e) => {
        X = e.clientX;
        Y = e.clientY;
    }, { passive: true }
);

const inputFocus = (e) => {
    console.log(X, Y);
    console.log(document.elementsFromPoint(X, Y));
}
document.getElementById('email').addEventListener("blur", validateInput);
document.getElementById('password').addEventListener("blur", validateInput);

function validateInput(event) {
    const input = event.target;
    if (!input.checkValidity() && input.value.trim() === "") {
        // Input is required but not filled
        input.classList.add("invalid");
        invalidForm();
    } else {
        vaildForm();
        input.classList.remove("invalid");
    }
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
async function invalidForm() {
    document.getElementById("normal-bg").classList.add("!opacity-0");
    await sleep(100);
    document.elementsFromPoint(X, Y).forEach((element) => {
        let stop = false;
        if (stop) {
            return;
        }
        if (element.classList.contains("tile")) {
            stop = true;
        }
    });
    await sleep(1000);
    document.getElementById("normal-bg").classList.remove("!opacity-0");

}

async function vaildForm() {
    document.getElementById("normal-bg").classList.add("!opacity-0");
    document.getElementById("error-bg").classList.add("!opacity-0");
    await sleep(100);
    document.elementsFromPoint(X, Y).forEach((element) => {
        let stop = false;
        if (stop) {
            return;
        }
        if (element.classList.contains("tile")) {
            stop = true;
        }
    });
    await sleep(1000);
    document.getElementById("normal-bg").classList.remove("!opacity-0");
    document.getElementById("error-bg").classList.remove("!opacity-0");

}

document.getElementById("form").addEventListener("submit", function(event) {
    if (!event.target.checkValidity()) {
        event.preventDefault(); // Prevent form submission
        invalidForm();
    }
});