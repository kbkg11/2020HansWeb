const num = "1";
const currentUser = localStorage.getItem(num); //currentUser에 localStorage값 넣어주기
function GoEx() {
  //currentUser(선택된 옵션값)을 찾아 selected로 값 정하기
  var sel = document.getElementById("exam");
  for (var i = 0; i < sel.length; i++) {
    if (sel[i].value == currentUser) {
      sel[i].selected = true;
    }
  }
}
var alert_select_value = function (select_obj) {
  var selected_index = select_obj.selectedIndex;
  var selected_value = select_obj.options[selected_index].value; //selected_value에 select옵션값 넣어주기
  localStorage.setItem(num, selected_value); //selected_value을 로컬에 넣어주기
};
GoEx();
