// designs.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-11-09
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-11-09

(function() {

  /*
   *  @description Create a new grid to replace the old grid, the size of 
   *  the new grid depends on two input tags (input_height and input_width).
   */
  function makeGrid() {
    let table = document.getElementById('pixel_canvas');
    const colorPicker = $('#colorPicker');
    const [colNum, rowNum] = [$('#input_width').val(), $('#input_height').val()];

    if (rowNum < 1 || rowNum > 48) {
      alert("The range of Grid Height between 1 and 48");
      return;
    }

    if (colNum < 1 || colNum > 48) {
      alert("The range of Grid Width between 1 and 48");
      return;
    }

    table.innerHTML = '';
    for (let i = 0; i < rowNum; ++i) {
      const row = table.insertRow(i);
      for (let j = 0; j < colNum; ++j) {
        const cell = row.insertCell(j);
        cell.onclick = () => {
          cell.style.backgroundColor = colorPicker.val();
        }
      }
    } 
  }

  $('#submit').click(makeGrid);
  makeGrid();
}) ();
