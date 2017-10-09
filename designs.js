// Select width and height input
function getHeightWidth() {
    let inputHeight = document.getElementById('input_height').value
    let inputWidth = document.getElementById('input_width').value
    let canvas = document.getElementById('pixel_canvas')
    canvas.innerHTML = makeGrid(inputWidth, inputHeight);
}
//add click listeners to submit button, colour picked and colour approver
let input = document.getElementById('subButton');
input.addEventListener('click', getHeightWidth, false)
let pixel_canvas = document.getElementById('pixel_canvas');
pixel_canvas.addEventListener('click', applyColor, false)
let approver = document.getElementById('approver');
approver.addEventListener('click', applyColor, false)

//apply chosen color
function applyColor() {
    let color = getColour();
    let trs = document.getElementsByTagName("td")
    let trsCount = trs.length - 1;
    let cell;
    for (let i = 0; i <= trsCount; i++) {
        trs[i].onclick = function(e) {
            cell = ("this is", document.getElementById(this.id));
            cell.style.backgroundColor = color;
        }
    }
}

// return colour value
function getColour() {
    let color = document.getElementById('colorPicker').value
    return color
}

//return grid
function makeGrid(row, column) {
    let id = row * column - 1;
    let grid = '';
    for (let r = 0; r < row; r++) {
        grid += '<tr>'
        for (let c = 0; c < column; c++) {
            grid += `<td id=${id--}></td>`;
        }
        grid += '</tr>'
    }
    return grid
}
