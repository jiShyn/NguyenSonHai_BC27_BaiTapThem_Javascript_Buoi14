function calcDate() {
   var month = +document.getElementById("monthInput").value;
   var year = +document.getElementById("yearInput").value;

   var res = document.getElementById("res");

   if (year % 4 === 0) {
      if (month === 2) {
         res.innerHTML =
            "Tháng " + month + " năm " + year + " nhuận có 29 ngày.";
      } else if (
         month === 1 ||
         month === 3 ||
         month === 5 ||
         month === 7 ||
         month === 8 ||
         month === 10 ||
         month === 12
      ) {
         res.innerHTML =
            "Tháng " + month + " năm " + year + " có " + " 31 ngày.";
      } else if (month === 4 || month === 6 || month === 9 || month === 11) {
         res.innerHTML =
            "Tháng " + month + " năm " + year + " có " + " 30 ngày.";
      } else {
         res.innerHTML = "Tháng không hợp lệ !!!";
      }
   } else {
      if (
         month === 1 ||
         month === 3 ||
         month === 5 ||
         month === 7 ||
         month === 8 ||
         month === 10 ||
         month === 12
      ) {
         res.innerHTML =
            "Tháng " + month + " năm " + year + " có " + " 31 ngày.";
      } else if (
         month === 2 ||
         month === 4 ||
         month === 6 ||
         month === 9 ||
         month === 11
      ) {
         res.innerHTML =
            "Tháng " + month + " năm " + year + " có " + " 30 ngày.";
         res.innerHTML = "Tháng không hợp lệ !!!";
      } else {
         res.innerHTML = "Tháng không hợp lệ !!!";
      }
   }
}
