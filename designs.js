// designs.js
//
// Author: blinklv <blinklv@icloud.com>
// Create Time: 2017-11-09
// Maintainer: blinklv <blinklv@icloud.com>
// Last Change: 2017-11-09

(function() {
  function color() {
    $(this).css('background-color', $('#colorPicker').val());
  }

  function makeGrid() {
    var table = $('#pixel_canvas');
    var [row, col] = [$('#input_width').val(), $('#input_height').val()];

    table.empty();
    for (let i = 0; i < row; ++i) {
      table.append('<tr></tr>');
      for (let j = 0; j < col; ++j) {
        table.children().last().append('<td></td>');
      }
    } 
    $('td').click(color);
  }

  $('#submit').click(makeGrid);
  makeGrid();
}) ();
