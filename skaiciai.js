const skaiciuSkaicius = 10;
const min = -20;
const max = 50;
const skaiciai = Array.from(Array(skaiciuSkaicius)).map(() =>
  Math.floor(Math.random() * max + min)
);

el1.innerText += ` ${skaiciai}`;
let sum = 0;

for (let i = 0; i < skaiciai.length; i++) {
  sum += skaiciai[i];
}

el2.innerText += ` ${sum}`;

let avg = sum / skaiciai.length;

el3.innerText += ` ${avg}`;

const greaterThanTen = skaiciai.find((element) => element > 10);
if (greaterThanTen > 0) {
  el4.innerText += ` Jop, pvz ${skaiciai.find((element) => element > 10)}`;
} else {
  el4.innerText += " Nope";
}

let mf = 1;
let m = 0;
let item = skaiciai[1];
for (let i = 0; i < skaiciai.length; i++) {
  for (let j = i; j < skaiciai.length; j++) {
    if (skaiciai[i] == skaiciai[j]) m++;
    if (mf < m) {
      mf = m;
      item = skaiciai[i];
    }
  }
  m = 0;
}

if (mf == 1) {
  el5.innerText += " Nėra, visi po kartą";
} else {
  el5.innerText += ` Jop, ${item} (${mf} kartus)`;
}
