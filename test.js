let angka = [];
let genap = [];
let ganjil = [];
let minGenap = 1 / 0;
let maxGenap = 0;
let totalGenap = 0;
let avgGenap = 0;
let minGanjil = 1 / 0;
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
function minArrayGenap(banyakGenap) {
  for (i = 0; i < banyakGenap; i++) {
    if (genap[i] < minGenap) {
      minGenap = genap[i];
    }
  }
  return minGenap;
}
console.log(minArrayGenap(genap.length));

function maxArrayGenap(banyakGenap) {
  for (i = 0; i < banyakGenap; i++) {
    if (genap[i] > maxGenap) {
      maxGenap = genap[i];
    }
  }
  return maxGenap;
}
console.log(maxArrayGenap(genap.length));

function totalArrayGenap(banyakGenap) {
  for (i = 0; i < banyakGenap; i++) {
    totalGenap += genap[i];
  }
  return totalGenap;
}
console.log(totalArrayGenap(genap.length));

function averageGenap(total, indexGenap) {
  avgGenap = total / indexGenap;
  return avgGenap;
}
console.log(averageGenap(totalGenap, genap.length));

//   GANJIL
function minArrayGanjil(banyakGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    if (ganjil[i] < minGanjil) {
      minGanjil = ganjil[i];
    }
  }
  return minGanjil;
}
console.log(minArrayGanjil(ganjil.length));

function maxArrayGanjil(banyakGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    if (ganjil[i] > maxGanjil) {
      maxGanjil = ganjil[i];
    }
  }
  return maxGanjil;
}
console.log(maxArrayGanjil(ganjil.length));

function totalArrayGanjil(banyakGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    totalGanjil += ganjil[i];
  }
  return totalGanjil;
}
console.log(totalArrayGanjil(ganjil.length));

function averageGanjil(total, indexGanjil) {
  avgGanjil = total / indexGanjil;
  return avgGanjil;
}
console.log(averageGanjil(totalGanjil, ganjil.length));

//              PERBANDINGAN
//    PERBANDINGAN MIN GENAP DAN GANJIL
function perbandinganMin() {
  if (minGenap > minGanjil) {
    result = "Min array genap lebih besar";
  } else if (minGenap < minGanjil) {
    result = "Min array ganjil lebih besar";
  } else {
    result = "Min array genap dan ganjil SAMA";
  }
  return result;
}
console.log(perbandinganMin());

//    PERBANDINGAN MAX GENAP DAN GANJIL
function perbandinganMax() {
  if (maxGenap > maxGanjil) {
    result = "Max array genap lebih besar";
  } else if (maxGenap < maxGanjil) {
    result = "Max array ganjil lebih besar";
  } else {
    result = "Max array genap dan ganjil SAMA";
  }
  return result;
}
console.log(perbandinganMax());

//    PERBANDINGAN TOTAL GENAP DAN GANJIL
function perbandinganTotal() {
  if (totalGenap > totalGanjil) {
    result = "Total penjumlahan array genap lebih besar";
  } else if (totalGenap < totalGanjil) {
    result = "Total penjumlahan array ganjil lebih besar";
  } else {
    result = "Total penjumlahan array genap dan ganjil SAMA";
  }
  return result;
}
console.log(perbandinganTotal());

//    PERBANDINGAN RATA-RATA GENAP DAN GANJIL
function perbandinganAverage() {
  if (avgGenap > avgGanjil) {
    result = "Rata-rata array genap lebih besar";
  } else if (avgGenap < avgGanjil) {
    result = "Rata-rata array ganjil lebih besar";
  } else {
    result = "Rata-rata array genap dan ganjil SAMA";
  }
  return result;
}
console.log(perbandinganAverage(result));
