const hewan = {
  nama: "Kucing",
  Kaki: 4,
  Spesies: "mamalia",
  Warna: ["Oren", "Putih", "Item"],
  Makanan: ["Ikan", "Ayam"],
  Suara() {
    return "Miauwwww";
  },
};

console.log(hewan);
console.log(hewan.Suara());

const data = [
  {
    name: "Alpha",
    class: "Dragon",
    club: ["Bola", "Bulutangkis"],
  },
  {
    name: "Beta",
    class: "Lizard",
    club: ["Membaca", "Bulutangkis"],
  },
];

for (let i = 0; i < data.length; i++) {
  let kalimat = "";
  kalimat += `${data[i].name} ada dikelas ${data[i].class}, dia mengikuti club ${data[i].club[0]} ,${data[i].club[1]}  `;
  console.log(kalimat);
}
