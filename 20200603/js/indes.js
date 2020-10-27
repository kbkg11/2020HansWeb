const openBtn = document.getElementById("open");
const modal = document.querySelector(".modal");
const closeBtn = modal.querySelector("#modalWriteSubmitBtn");
const modalCloseBtn = modal.querySelector("#modalWriteCloseBtn");
const overlay = modal.querySelector(".modalBox_write_body");
const modifyBtn = document.getElementById("modifyBtn");
const delBtn = document.querySelectorAll(".delBtn");
const checkDelBtn =  document.getElementById("checkDelBtn");
var tableData = document.getElementById("boardTable");

console.dir(delBtn);
function delRowOne(event) {
  var thisTd = event.target.parentNode;
  var thisTr = thisTd.parentNode;
  var thisThead = thisTr.parentNode;
  thisThead.removeChild(thisTr);
} //부모, 형제 값 찾아서 removeChild로 객체 삭제


//제목값 가져오기

const closeModal = () => {
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

  var target = document.getElementById("write-category");
  //select값 받아오기
  cell2.innerHTML = target.options[target.selectedIndex].text;

  var temp;
  var inputTitle = document.getElementById("write-title").value;
  temp = inputTitle;
  //input 입력값 받아오기(제목)
  cell3.innerHTML = temp;

  var temp2;
  var inputWriter = document.getElementById("write-writer").value;
  temp2 = inputWriter;
  //input 입력값 받아오기(이름)
  cell4.innerHTML = temp2;

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = today.getDay();
  //날짜받아오기
  cell5.innerHTML = year + "-" + month + "-" + date;

  cell6.innerHTML =
    "<input type='button' value='수정' class='modifyBtn' id='modifyBtn' onclick='modify()' />";
  var inputBtn = document.createElement("input");
  inputBtn.setAttribute("type", "button");
  inputBtn.classList.add("delBtn");
  inputBtn.value = "삭제";
  inputBtn.addEventListener("click", delRowOne);
  cell6.appendChild(inputBtn); // 추가 된 버튼에 이벤트 추가
};
//모델닫으면서 게시글 등록

const openModal = () => {
  modal.classList.remove("hidden");
};
//모델열기

const modalClose = () => {
  modal.classList.add("hidden");
};
//모델닫기

function delRow() {

  for (var i = 1; i < tableData.rows.length; i++) {
    var chkbox = tableData.rows[i].cells[0].childNodes[0].checked;

    if (chkbox) {
      tableData.deleteRow(i);
      i--;
    }
  }
  //선택된 테이블 삭제
}

function modify() {
  alert(`${modifyBtn.Value}`);
  modal.classList.remove("hidden");

  (this).parent().parent().remove();

}

const Btn = document.getElementById("button");
function f1() {
  alert("확인");
  alert(`${Btn.Value}`);
 

}


delBtn.forEach(function (data) {
  data.addEventListener("click", delRowOne);
}); //forEach로 선택된 삭제버튼 찾기


openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", modalClose);
modalCloseBtn.addEventListener("click", modalClose);
checkDelBtn.addEventListener("click", delRow);

