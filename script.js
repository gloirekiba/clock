const container = document.createElement("div");
container.classList.add("container");

const span = document.createElement("span");
span.classList.add("time");

container.appendChild(span);
document.body.appendChild(container);

function getTime(date) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()];
}

setInterval(() => {
  const [hour, minute, second] = getTime(new Date());

  span.innerText = `${hour.toString().padStart(2, "0")} : ${minute
    .toString()
    .padStart(2, "0")} : ${second.toString().padStart(2, "0")}`;
}, 1000);
