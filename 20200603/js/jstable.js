function add_row() {
  var my_tbody = document.getElementById("my-tbody");
  var row = my_tbody.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "항목";
  cell2.innerHTML = new Date().toUTCString();
  cell3.innerHTML = "세번째 항목";
}

function delete_row() {
  var my_tbody = document.getElementById("my-tbody");
  if (my_tbody.rows.length < 1) return;
  // my_tbody.deleteRow(0); // 상단부터 삭제
  my_tbody.deleteRow(my_tbody.rows.length - 1); // 하단부터 삭제
}
