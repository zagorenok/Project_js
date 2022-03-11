const userString = prompt("Введите произвольную строку", "How much is the fish?");
const integerID = Number(prompt("Укажите ID в виде целого числа"));
const indexString = prompt("Укажите значение индекса из строки");

if (integerID ===1) {
  console.log(userString.charCodeAt(indexString));
}

if (integerID === 2) {
  const newString = userString.slice(0, indexString - 1) + userString.slice(indexString);
  console.log(newString);
}

if (integerID ===3) {
  const randomInt = getRandomIntInclusive(0, 10);
  let smile;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * 11);
}

  if (randomInt === 0) {
    smile = "😂";
} else if (randomInt === 1) {
  smile = "😍";
} else if (randomInt === 2) {
  smile = "🤣";
} else if (randomInt === 3) {
  smile = "😘";
} else if (randomInt === 4) {
  smile = "🥰";
} else if (randomInt === 5) {
  smile = "😎";
} else if (randomInt === 6) {
  smile = "😁";
} else if (randomInt === 7) {
  smile = "😇";
} else if (randomInt === 8) {
  smile = "😌";
} else if (randomInt === 9) {
  smile = "😋";
} else if (randomInt === 10) {
  smile = "😷";
}

let result =  userString.slice(0, indexString - 1) + smile + userString.slice(indexString);

  console.log(result);
}

if (integerID ===4) {
    console.log(`Длина строки: ${userString.replace(/ /g, "").length}`);
} 


