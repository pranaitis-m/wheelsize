function calc() {
 let a = parseInt(document.getElementById("platums_1").value);
 let b = parseInt(document.getElementById("augstums_2").value);
 let c = parseInt(document.getElementById("radiuss_3").value);

 let a2 = parseInt(document.getElementById("jauna_platums_1").value);
 let b2 = parseInt(document.getElementById("jauna_augstums_2").value);
 let c2 = parseInt(document.getElementById("jauna_radiuss_3").value);

 let txt = document.getElementById("text").valueOf();
 console.log(a, b, c, a2, b2, c2, txt);

 let aug = a * (b / 100);
 let aug_inch = aug / 25.4;
 let diam = 2 * aug_inch + c;
 let diam_mm = diam * 25.4;

 console.log(
  "aug_inch: " +
   aug_inch.toFixed(2) +
   '" | ' +
   diam.toFixed(2) +
   '" | ' +
   diam_mm.toFixed(0) +
   " cm"
 );
 let aug2 = a2 * (b2 / 100);
 let aug_inch2 = aug2 / 25.4;
 let diam2 = 2 * aug_inch2 + c2;
 let diam_mm2 = diam2 * 25.4;
 console.log(
  "aug_inch2: " +
   aug_inch2.toFixed(2) +
   '" | ' +
   diam2.toFixed(2) +
   '" | ' +
   diam_mm2.toFixed(0) +
   " cm"
 );
 console.log("----------------");

 let a3 = a2 - a;
 document.getElementById("d_platums").innerHTML = a3;
 let b3 = b2 - b;
 document.getElementById("d_augstums").innerHTML = b3;
 let c3 = c2 - c;
 document.getElementById("d_radiuss").innerHTML = c3;
 let lielaks = "";
 if (diam_mm > diam_mm2) {
  lielaks = " lielāka ";
 } else if (diam_mm < diam_mm2) {
  lielaks = " mazāka ";
 } else {
  lielaks = " vienādas ";
 }

 txt.innerHTML =
  "Pašreizējā riepa ar izmēru " +
  a +
  "/" +
  b +
  "R" +
  c +
  " ar diametru " +
  diam_mm.toFixed(0) +
  "mm ir " +
  lielaks +
  " par vēlamo riepu ar izmēru " +
  a2 +
  "/" +
  b2 +
  "R" +
  c2 +
  " ar diametru " +
  diam_mm2.toFixed(0) +
  "mm";
}
