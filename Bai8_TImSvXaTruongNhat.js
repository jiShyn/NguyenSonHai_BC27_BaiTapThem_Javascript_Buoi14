function find() {
   //Sinh vien 1
   var nameA = document.getElementById("nameA").value;
   var xA = +document.getElementById("xA").value;
   var yA = +document.getElementById("yA").value;

   //Sinh vien 2
   var nameB = document.getElementById("nameB").value;
   var xB = +document.getElementById("xB").value;
   var yB = +document.getElementById("yB").value;

   //Sinh vien 3
   var nameC = document.getElementById("nameC").value;
   var xC = +document.getElementById("xC").value;
   var yC = +document.getElementById("yC").value;

   //Truong hoc
   var xS = +document.getElementById("xSchool").value;
   var yS = +document.getElementById("ySchool").value;

   var res = document.getElementById("res");

   //Độ dài mỗi sinh viên tới trường
   var dA;
   var dB;
   var dC;

   dA = Math.sqrt((xS - xA) ** 2 + (yS - yA) ** 2);
   dB = Math.sqrt((xS - xB) ** 2 + (yS - yB) ** 2);
   dC = Math.sqrt((xS - xC) ** 2 + (yS - yC) ** 2);

   if (dA > dB && dA > dC) {
      res.innerHTML = "Sinh viên " + nameA + " xa trường nhất!";
   } else if (dA > dB && dC > dA) {
      res.innerHTML = "Sinh viên " + nameC + " xa trường nhất!";
   } else if (dB > dA && dB > dC) {
      res.innerHTML = "Sinh viên " + nameB + " xa trường nhất!";
   } else if (dB > dA && dC > dB) {
      res.innerHTML = "Sinh viên " + nameC + " xa trường nhất!";
   } else if (dC > dA && dC > dB) {
      res.innerHTML = "Sinh viên " + nameC + " xa trường nhất!";
   } else if (dC > dA && dB > dC) {
      res.innerHTML = "Sinh viên " + nameB + " xa trường nhất!";
   } else if (dA === dB && dB > dC) {
      res.innerHTML =
         "Sinh viên " + nameA + " và " + nameB + " xa trường nhất!";
   } else if (dA === dC && dA > dB) {
      res.innerHTML =
         "Sinh viên " + nameA + " và " + nameC + " xa trường nhất!";
   } else if (dC === dB && dC > dA) {
      res.innerHTML =
         "Sinh viên " + nameB + " và " + nameC + " xa trường nhất!";
   } else {
      res.innerHTML = "Nhập đầy đủ thông tin đê !!!";
   }
}
