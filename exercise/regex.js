function checkFirstCharacter(str) {
  let regex = /^[a-z]/gm;
  if (regex.test(str)) {
    console.log("Huruf Kecil");
  } else {
    console.log("Huruf Besar");
  }
}

checkFirstCharacter("ngantuk sekali");

function digitCharacter(noHandphone) {
  let validation = /^0\d{10,11}$/gm;
  if (validation.test(noHandphone)) {
    console.log("No Handphone berhasil di submit");
  } else {
    console.log(
      "No Handphone harus diawali angka 0, minimal 10 digit dan maksimal 12 digit"
    );
  }
}

digitCharacter(08126077549);

function searchEngine(news) {
  let validation =
    /^Bagaimana cara memulai bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/gim;
  if (validation.test(news)) {
    console.log("Berita ada");
  } else console.log("Berita tidak ada");
}

searchEngine("Apa itusss");
searchEngine("bagaimana cara memulai bisnis");
