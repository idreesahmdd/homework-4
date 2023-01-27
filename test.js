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
}
arrayAngka(100, 50);
console.log(angka);

// PUSH NILAI KE ARRAY GENAP GANJIL
function arrayGenapGanjil(banyakAngka) {
  for (i = 0; i < banyakAngka; i++) {
    if (i % 2 === 0) {
      genap.push(angka[i]);
    } else {
      ganjil.push(angka[i]);
    }
  }
}
arrayGenapGanjil(angka.length);
console.log(genap);
console.log(ganjil);

//       GENAP
function minArrayGenap(banyakGenap) {
  for (i = 0; i < banyakGenap; i++) {
    if (genap[i] < minGenap) {
      minGenap = genap[i];
    }
  }
}
minArrayGenap(genap.length);
console.log("Angka Terkecil Array Genap = " + minGenap);

function maxArrayGenap(banyakGenap) {
  for (i = 0; i < banyakGenap; i++) {
    if (genap[i] > maxGenap) {
      maxGenap = genap[i];
    }
  }
}
maxArrayGenap(genap.length);
console.log("Angka Terbesar Array Genap = " + maxGenap);

function totalDanAvgArrayGenap(banyakGenap) {
  for (i = 0; i < banyakGenap; i++) {
    totalGenap += genap[i];
    avgGenap = totalGenap / banyakGenap;
  }
}
totalDanAvgArrayGenap(genap.length);
console.log("Total Penjumlahan dari Array Genap = " + totalGenap);
console.log("Rata-rata Array Genap = " + avgGenap);

//   GANJIL
function minArrayGanjil(banyakGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    if (ganjil[i] < minGanjil) {
      minGanjil = ganjil[i];
    }
  }
  console.log("Angka Terkecil Array Ganjil = " + minGanjil);
}
minArrayGanjil(ganjil.length);

function maxArrayGanjil(banyakGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    if (ganjil[i] > maxGanjil) {
      maxGanjil = ganjil[i];
    }
  }
}
maxArrayGanjil(ganjil.length);
console.log("Angka Terbesar Array Ganjil = " + maxGanjil);

function totalDanAvgArrayGanjil(banyakGanjil) {
  for (i = 0; i < banyakGanjil; i++) {
    totalGanjil += ganjil[i];
    avgGanjil = totalGanjil / banyakGanjil;
  }
  console.log("Total Penjumlahan dari Array Ganjil = " + totalGanjil);
  console.log("Rata-rata Array Ganjil = " + avgGanjil);
}
totalDanAvgArrayGanjil(ganjil.length);

//              PERBANDINGAN
//    PERBANDINGAN MIN GENAP DAN GANJIL
if (minGenap > minGanjil) {
  console.log("Min array genap lebih besar");
} else if (minGenap < minGanjil) {
  console.log("Min array ganjil lebih besar");
} else {
  console.log("Min array genap dan ganjil SAMA");
}

//    PERBANDINGAN MAX GENAP DAN GANJIL
if (maxGenap > maxGanjil) {
  console.log("Max array genap lebih besar");
} else if (maxGenap < maxGanjil) {
  console.log("Max array ganjil lebih besar");
} else {
  console.log("Max array genap dan ganjil SAMA");
}

//    PERBANDINGAN TOTAL GENAP DAN GANJIL
if (totalGenap > totalGanjil) {
  console.log("Total penjumlahan array genap lebih besar");
} else if (totalGenap < totalGanjil) {
  console.log("Total penjumlahan array ganjil lebih besar");
} else {
  console.log("Total penjumlahan array genap dan ganjil SAMA");
}

//    PERBANDINGAN RATA-RATA GENAP DAN GANJIL
if (avgGenap > avgGanjil) {
  console.log("Rata-rata array genap lebih besar");
} else if (avgGenap < avgGanjil) {
  console.log("Rata-rata array ganjil lebih besar");
} else {
  console.log("Rata-rata array genap dan ganjil SAMA");
}
