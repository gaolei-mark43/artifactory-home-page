import * as XLSX from 'xlsx';

export function exportTableToExcel(tableId, filename) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.table_to_sheet(document.querySelector(`#${tableId}`));
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, `${filename}.xlsx`);
}
