const clockTitle = document.querySelector(".timer");

function getTime() {
  const end = new Date("2021-12-31:00:00:00+0900");
  const now = new Date();
  const countedMS = end.getTime() - now.getTime();
  const day = Math.floor(countedMS / (1000*60*60*24));
  const hours = Math.floor((countedMS % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((countedMS % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((countedMS % (1000*60)) / 1000);
  clockTitle.innerText = `${day < 10 ? `0${day}` : day}일
  ${hours < 10 ? `0${hours}` : hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${seconds < 10 ? `0${seconds}` : seconds}초 남았습니다!`
}

function doit() {
  getTime();
  setInterval(getTime, 1000);
}

doit();
