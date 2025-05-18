'use strict';

// write your code here

const table = document.querySelector('table');
const indexCopyColumn = 1;

for (const row of table.rows) {
  const cells = row.cells;
  const ourCell = cells[indexCopyColumn];

  const newCell = ourCell.cloneNode(true);

  const indexPasteColumn = cells.length - 1;

  row.insertBefore(newCell, cells[indexPasteColumn]);
}
