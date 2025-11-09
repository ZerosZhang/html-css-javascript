console.log("Hello World form Script");

function AddRow() {
  var table = document.getElementById("table");

  // 获取插入的位置
  var length = table.rows.length;

  // 插入行节点
  var new_row = table.insertRow(length);
  var col_name = new_row.insertCell(0);
  var col_phone = new_row.insertCell(1);
  var col_operation = new_row.insertCell(2);

  col_name.innerHTML = "未命名";
  col_phone.innerHTML = "无联系方式";
  col_operation.innerHTML =
    '<button onclick="EditRow(this)">编辑</button><button onclick="DeleteRow(this)">删除</button>';
}

function DeleteRow(params) {
  var row = params.parentNode.parentNode;
  console.log(row);
  row.parentNode.removeChild(row);
}

function EditRow(params) {
  var row = params.parentNode.parentNode;
  console.log(row);
  var name = row.cells[0];
  var phone = row.cells[1];

  var input_name = prompt("输入名字");
  var input_phone = prompt("输入联系方式");

  name.innerHTML = input_name;
  phone.innerHTML = input_phone;
}
