const openBtn = document.getElementById("open");
const modal = document.querySelector(".modal");
const closeBtn = modal.querySelector("#modalWriteSubmitBtn");
const modalCloseBtn = modal.querySelector("#modalWriteCloseBtn");
const overlay = modal.querySelector(".modalBox_write_body");
const delBtn = document.querySelectorAll(".delBtn");
const modifyBtn = document.querySelectorAll(".modifyBtn");
const checkDelBtn =  document.getElementById("checkDelBtn");
const writeTitle = document.getElementById("write-title");
const writeWriter = document.getElementById("write-writer");
const writeCategory = document.getElementById("write-category");
var modifyCell1, modifyCell2, modifyCell3; //수정할 때 이용할 변수
var sw; //스위치로 사용 할 변수

function delRowOne(event) { //부모, 형제 값 찾아서 removeChild로 객체 삭제
  var thisTd = event.target.parentNode;
  var thisTr = thisTd.parentNode;
  var thisThead = thisTr.parentNode;
  thisThead.removeChild(thisTr);
}

function delRow() { //선택된 테이블 삭제
  var tableData = document.getElementById("boardTable");
  for (var i = 1; i < tableData.rows.length; i++) {
    var chkbox = tableData.rows[i].cells[0].childNodes[0].checked;
    if (chkbox) {
      tableData.deleteRow(i);
      i--;
    }
  }
}

function modifyOne(event) { //수정버튼을 눌렀을 경우 
  var thisTd = event.target.parentNode;
  var thisTr = thisTd.parentNode;
  modifyCell1 = thisTr.cells[1];
  modifyCell2 = thisTr.cells[2];
  modifyCell3 = thisTr.cells[3];
Array.from(writeCategory.options).forEach(function (date){ //선택박스값을 배열로 바꾼후 forEach로 값 선택
if(date.innerText == modifyCell1.innerText)
  date.selected = true;
})
  writeTitle.value = modifyCell2.innerText;
  writeWriter.value = modifyCell3.innerText;
  sw = 1;
  modal.classList.remove("hidden");
  
} 

const closeModal = () => {
  if(sw == 1){ //수정버튼을 눌렀다면  
    modal.classList.add("hidden");
    
    modifyCell1.innerHTML =  writeCategory.options[writeCategory.selectedIndex].text;;
  
    modifyCell2.innerHTML = writeTitle.value;
    
    modifyCell3.innerHTML = writeWriter.value;
    
  }else{ //글쓰기 버튼을 눌렀다면
    modal.classList.add("hidden");

    var my_tbody = document.getElementById("my-tbody");
    var row = my_tbody.insertRow(my_tbody.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
  
    cell1.innerHTML = "<input type='checkbox'/>";

    cell2.innerHTML = writeCategory.options[writeCategory.selectedIndex].text;

    cell3.innerHTML = writeTitle.value;
  
    cell4.innerHTML = writeWriter.value;

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    cell5.innerHTML = year + "-" + month + "-" + date;


  }
};//모델닫으면서 게시글 등록

const openModal = () => {
  writeCategory.value = 'humor';
  writeTitle.value = '';
  writeWriter.value = ''; //입력한 값 초기화
  sw = 0;
  modal.classList.remove("hidden");
};//모델열기

const modalClose = () => {
  modal.classList.add("hidden");
};//모델닫기

delBtn.forEach(function (data) {
  data.addEventListener("click", delRowOne);
}); //forEach로 선택된 삭제버튼 찾기

modifyBtn.forEach(function (data) {
  data.addEventListener("click", modifyOne);
}); //forEach로 선택된 수정버튼 찾기

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", modalClose);
modalCloseBtn.addEventListener("click", modalClose);
checkDelBtn.addEventListener("click", delRow);


