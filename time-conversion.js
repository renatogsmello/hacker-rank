let s = "12:40:22AM";
let date = s.split(":");

for (let i = 0; i < date.length; i++) {
  if (i == 0 && date[2].includes("PM") && date[0] !== "12") {
    date[0] = Number(date[0]) + 12;
  }
  if (i == 0 && date[0] == "12" && date[2].includes("AM")) {
    date[0] = Number(date[0]) - 12;
    date[0] = date[0].toString() + 0;
  }
}
let stringDate = date.toString();

let replaceDate = stringDate.replaceAll(",", ":");

let newDate = replaceDate.slice(0, 8);
console.log(newDate);
