var clockTarget = document.getElementById("clock");
function clock() {
  var date = new Date("2020-12-24 00:00:00");
  var date1 = new Date();
  var time = date - date1; //크리스마스 날짜에서 현재 날짜 빼기

  var day_division = 1000 * 60 * 60 * 24; //일을 구하기 위해 나눌 숫자
  var hours_division = 1000 * 60 * 60; //시간을 구하기 위해 나눌 숫자
  var minute_division = 1000 * 60; //분을 구하기 위해 나눌 숫자
  var second_division = 1000; // 초를 구하기 위해 나눌 숫자

  var day_D = time - day * day_division; //구해진 날짜에 일수빼기
  var hours_D = day_D - hours * hours_division; //구해진 일수에 시간빼기
  var second_D = hours_D - minute * minute_division; //구해진 시간에 분빼기

  var day_Time = time / day_division; //일 구하기
  var hours_Time = day_D / hours_division; //시간 구하기
  var minute_Time = hours_D / minute_division; //분 구하기
  var second_Time = second_D / second_division; //초 구하기

  var day = Math.floor(day_Time); //소수점 버림
  var hours = Math.floor(hours_Time);
  var minute = Math.floor(minute_Time);
  var second = Math.floor(second_Time);
  clockTarget.innerText =
    day +
    "일 " +
    `${hours < 10 ? `0${hours}` : hours}시 ${
      minute < 10 ? `0${minute}` : minute
    }분 ${second < 10 ? `0${second}` : second}` +
    "초";
}

function init() {
  clock();
  setInterval(clock, 1000);
}
init();
