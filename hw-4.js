let angka = [];
// PUSH NILAI KE ARRAY ANGKA
function arrayAngka(banyakAngka, batasAngka) {
  for (i = 0; i < banyakAngka; i++) {
    angka.push(Math.ceil(Math.random() * batasAngka));
  }
  return angka;
}
console.log(arrayAngka(100, 50));

let genap = [];
let ganjil = [];
// PUSH NILAI KE ARRAY GENAP GANJIL
function arrayGenapGanjil(banyakAngka) {
  for (i = 0; i < banyakAngka; i++) {
    if (i % 2 === 0) {
      genap.push(angka[i]);
    } else {
      ganjil.push(angka[i]);
    }
  }
  return { genap, ganjil };
}
console.log(arrayGenapGanjil(angka.length));

//       FUNCTION GENAP DAN GANJIL
function findMin(angka) {
  let min = angka[0];
  for (i = 0; i < angka.length; i++) {
    if (min > angka[i]) {
      min = angka[i];
    }
  }
  return min;
}

function findMax(angka) {
  let max = angka[0];
  for (i = 0; i < angka.length; i++) {
    if (max < angka[i]) {
      max = angka[i];
    }
  }
  return max;
}

function hitungTotal(angka) {
  let total = 0;
  for (i = 0; i < angka.length; i++) {
    total += angka[i];
  }
  return total;
}

// PERBANDINGAN GENAP GANJIL
function PerbandinganMin() {
  if (minArrayGenap > minArrayGanjil) {
    result = "Min Array Genap lebih besar ";
  } else if (minArrayGenap < minArrayGanjil) {
    result = "Min Array Ganjil lebih besar ";
  } else {
    result = "Min Array Ganjil dan Genap SAMA";
  }
  return result;
}

function PerbandinganMax() {
  if (maxArrayGenap > maxArrayGanjil) {
    result = "Max Array Genap lebih besar ";
  } else if (maxArrayGenap < maxArrayGanjil) {
    result = "Max Array Ganjil lebih besar ";
  } else {
    result = "Max Array Ganjil dan Genap SAMA";
  }
  return result;
}

function PerbandinganTotal() {
  if (totalArrayGenap > totalArrayGanjil) {
    result = "Total Array Genap lebih besar ";
  } else if (totalArrayGenap < totalArrayGanjil) {
    result = "Total Array Ganjil lebih besar ";
  } else {
    result = "Total Array Ganjil dan Genap SAMA";
  }
  return result;
}

function PerbandinganAverage() {
  if (avgArrayGenap > avgArrayGanjil) {
    result = "Rata-rata Array Genap lebih besar ";
  } else if (avgArrayGenap < avgArrayGanjil) {
    result = "Rata-rata Array Ganjil lebih besar ";
  } else {
    result = "Rata-rata Array Ganjil dan Genap SAMA";
  }
  return result;
}

// GENAP
minArrayGenap = findMin(genap);
console.log("Min Array Genap = " + minArrayGenap);
maxArrayGenap = findMax(genap);
console.log("Max Array Genap = " + maxArrayGenap);
totalArrayGenap = hitungTotal(genap);
console.log("Total Array Genap = " + totalArrayGenap);
avgArrayGenap = totalArrayGenap / genap.length;
console.log("Rata-rata Array Genap = " + avgArrayGenap);

// GANJIL
minArrayGanjil = findMin(ganjil);
console.log("Min Array Ganjil = " + minArrayGanjil);
maxArrayGanjil = findMax(ganjil);
console.log("Max Array Ganjil = " + maxArrayGanjil);
totalArrayGanjil = hitungTotal(ganjil);
console.log("Total Array Ganjil = " + totalArrayGanjil);
avgArrayGanjil = totalArrayGanjil / ganjil.length;
console.log("Rata-rata Array Ganjil = " + avgArrayGanjil);

// PERBANDINGAN
console.log(PerbandinganMin());
console.log(PerbandinganMax());
console.log(PerbandinganTotal());
console.log(PerbandinganAverage());
