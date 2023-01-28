let angka = [];
let genap = [];
let ganjil = [];
let minGenap = 0;
let maxGenap = 0;
let totalGenap = 0;
let avgGenap = 0;
let minGanjil = 0;
let maxGanjil = 0;
let totalGanjil = 0;
let avgGanjil = 0;

// PUSH NILAI KE ARRAY ANGKA
function arrayAngka(banyakAngka, batasAngka) {
  for (i = 0; i < banyakAngka; i++) {
    angka.push(Math.ceil(Math.random() * batasAngka));
  }
  return angka;
}
console.log(arrayAngka(100, 50));

// PUSH NILAI KE ARRAY GENAP GANJIL
function arrayGenapGanjil(banyakAngka) {
  for (i = 0; i < banyakAngka; i++) {
    if (i % 2 === 0) {
      genap.push(angka[i]);
    } else {
      ganjil.push(angka[i]);
    }
  }
  return [genap, ganjil];
}
console.log(arrayGenapGanjil(angka.length));

//       GENAP
function minArrayGenap(banyakGenap, minGenap) {
  for (i = 0; i < banyakGenap; i++) {
    if (genap[i] < minGenap) {
      minGenap = genap[i];
    }
  }
  return minGenap;
}
console.log(minArrayGenap(genap.length, 1 / 0));

function maxArrayGenap(banyakGenap, maxGenap) {
  for (i = 0; i < banyakGenap; i++) {
    if (genap[i] > maxGenap) {
      maxGenap = genap[i];
    }
  }
  return maxGenap;
}
console.log(maxArrayGenap(genap.length, 0));

function totalArrayGenap(banyakGenap) {
  for (i = 0; i < banyakGenap; i++) {
    totalGenap += genap[i];
  }
  return totalGenap;
}
console.log(totalArrayGenap(genap.length));

function avgArrayGenap() {
  avgGenap = totalGenap / genap.length;
  return avgGenap;
}
console.log(avgArrayGenap());

//   GANJIL
function minArrayGanjil(banyakGanjil, minGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    if (ganjil[i] < minGanjil) {
      minGanjil = ganjil[i];
    }
  }
  return minGanjil;
}
console.log(minArrayGanjil(ganjil.length, 1 / 0));

function maxArrayGanjil(banyakGanjil, maxGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    if (ganjil[i] > maxGanjil) {
      maxGanjil = ganjil[i];
    }
  }
  return maxGanjil;
}
console.log(maxArrayGanjil(ganjil.length, 0));

function totalArrayGanjil(banyakGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    totalGanjil += ganjil[i];
  }
  return totalGanjil;
}
console.log(totalArrayGanjil(ganjil.length));

function avgArrayGanjil() {
  avgGanjil = totalGanjil / ganjil.length;
  return avgGanjil;
}
console.log(avgArrayGanjil());

//              PERBANDINGAN
//    PERBANDINGAN MIN GENAP DAN GANJIL
function perbandinganMin() {
  if (minArrayGenap(genap.length, 1 / 0) > minArrayGanjil(ganjil.length, 1 / 0)) {
    result = "Min array genap lebih besar";
  } else if (minArrayGenap(genap.length, 1 / 0) < minArrayGanjil(ganjil.length, 1 / 0)) {
    result = "Min array ganjil lebih besar";
  } else {
    result = "Min array genap dan ganjil SAMA";
  }
  return result;
}
console.log(perbandinganMin());

//    PERBANDINGAN MAX GENAP DAN GANJIL
function perbandinganMax() {
  if (maxArrayGenap(genap.length, 0) > maxArrayGanjil(ganjil.length, 0)) {
    result = "Max array genap lebih besar";
  } else if (maxArrayGenap(genap.length, 0) < maxArrayGanjil(ganjil.length, 0)) {
    result = "Max array ganjil lebih besar";
  } else {
    result = "Max array genap dan ganjil SAMA";
  }
  return result;
}
console.log(perbandinganMax());

//    PERBANDINGAN TOTAL GENAP DAN GANJIL
function perbandinganTotal() {
  if (totalArrayGenap(genap.length) > totalArrayGanjil(ganjil.length)) {
    result = "Total penjumlahan array genap lebih besar";
  } else if (totalArrayGenap(genap.length) < totalArrayGanjil(ganjil.length)) {
    result = "Total penjumlahan array ganjil lebih besar";
  } else {
    result = "Total penjumlahan array genap dan ganjil SAMA";
  }
  return result;
}
console.log(perbandinganTotal());

//    PERBANDINGAN RATA-RATA GENAP DAN GANJIL
function perbandinganAverage() {
  if (avgArrayGenap() > avgArrayGanjil()) {
    result = "Rata-rata array genap lebih besar";
  } else if (avgArrayGenap() < avgArrayGanjil()) {
    result = "Rata-rata array ganjil lebih besar";
  } else {
    result = "Rata-rata array genap dan ganjil SAMA";
  }
  return result;
}
console.log(perbandinganAverage(result));
