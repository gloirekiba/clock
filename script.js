const clock = document.getElementById("clock");

function getTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function formatNumber(number) {
  return number.toString().padStart(2, "0");
}

setInterval(() => {
  const { hour, minute, second } = getTime(new Date());

  clock.innerText = `${formatNumber(hour)}:${formatNumber(
    minute
  )}:${formatNumber(second)}`;
}, 1000);
