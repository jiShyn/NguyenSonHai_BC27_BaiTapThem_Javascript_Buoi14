function readNumber() {
   var num = +document.getElementById("num").value;
   var res = document.getElementById("res");
   var hundred;
   var ten;
   var unit;

   hundred = Math.floor(num / 100);
   ten = Math.floor((num % 100) / 10);
   unit = (num % 100) % 10;

   if (100 <= num && num <= 999) {
      if (hundred === 1) {
         hundred = "Một";
      } else if (hundred === 2) {
         hundred = "Hai";
      } else if (hundred === 3) {
         hundred = "Ba";
      } else if (hundred === 4) {
         hundred = "Bốn";
      } else if (hundred === 5) {
         hundred = "Năm";
      } else if (hundred === 6) {
         hundred = "Sáu";
      } else if (hundred === 7) {
         hundred = "Bảy";
      } else if (hundred === 8) {
         hundred = "Tám";
      } else if (hundred === 9) {
         hundred = "Chín";
      }

      if (ten === 0 && unit === 0) {
         ten = "";
         unit = "";
         res.innerHTML = hundred + " trăm " + ten + unit;
      }

      if (ten === 0) {
         ten = "lẻ";
         if (unit === 1) {
            unit = "một";
         } else if (unit === 2) {
            unit = "hai";
         } else if (unit === 3) {
            unit = "ba";
         } else if (unit === 4) {
            unit = "bốn";
         } else if (unit === 5) {
            unit = "năm";
         } else if (unit === 6) {
            unit = "sáu";
         } else if (unit === 7) {
            unit = "bảy";
         } else if (unit === 8) {
            unit = "tám";
         } else if (unit === 9) {
            unit = "chín";
         }
         res.innerHTML = hundred + " trăm " + ten + " " + unit;
      } else if (ten === 1) {
         ten = "mười";
      } else if (ten === 2) {
         ten = "hai";
      } else if (ten === 3) {
         ten = "ba";
      } else if (ten === 4) {
         ten = "bốn";
      } else if (ten === 5) {
         ten = "năm";
      } else if (ten === 6) {
         ten = "sáu";
      } else if (ten === 7) {
         ten = "bảy";
      } else if (ten === 8) {
         ten = "tám";
      } else if (ten === 9) {
         ten = "chín";
      }

      if (unit === 1) {
         unit = "mốt";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 2) {
         unit = "hai";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 3) {
         unit = "ba";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 4) {
         unit = "bốn";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 5) {
         unit = "lăm";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 6) {
         unit = "sáu";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 7) {
         unit = "bảy";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 8) {
         unit = "tám";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 9) {
         unit = "chín";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      }

   } else {
      res.innerHTML = "Nhập lại số thích hợp!!!";
      // console.log("Nhập lại số thích hợp!!!");
   }
}
