// Select width and height input
function outputGrid() {
    let inputHeight = document.getElementById('input_height').value
    let inputWidth = document.getElementById('input_width').value
    let table = document.getElementById('pixel_canvas');
    let colorPicker = document.getElementById("colorPicker");
    constructGrid(inputHeight, inputWidth, table, colorPicker);
}

//outputting grid on submit
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    outputGrid();
});

//return grid
function constructGrid(rows, columns, table, colorPicker) {
    table.innerHTML = "";
    for (let i = 0; i < rows; i++){
      //insert n-th rows into the table_id
      const row = table.insertRow(i)
      for (let j = 0; j < columns; j++){
        const cell = row.insertCell(j)
        cell.onclick = () => {
          cell.style.backgroundColor = colorPicker.value
        }
      }
    }
    return table
  }
