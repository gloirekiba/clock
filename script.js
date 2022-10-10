const container = document.createElement("div");
container.classList.add("container");

const span = document.createElement("span");

container.appendChild(span);
document.body.appendChild(container);

function getTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

setInterval(() => {
  const { hour, minute, second } = getTime(new Date());

  const time = `${hour.toString().padStart(2, "0")} : ${minute
    .toString()
    .padStart(2, "0")} : ${second.toString().padStart(2, "0")}`;

  span.innerText = time;
}, 1000);
