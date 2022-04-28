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
      // Đọc số hàng trăm
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

      // Đọc số x-00
      if (ten === 0 && unit === 0) {
         ten = "";
         unit = "";
         res.innerHTML = hundred + " trăm " + ten + unit;
      }

      // đọc số x-0-z
      if (ten === 0) {
         ten = "lẻ";
         if (unit === 1) {    //đọc số x-0-1
            unit = "một";
         } else if (unit === 2) {    //đọc số x-0-2
            unit = "hai";
         } else if (unit === 3) {    //đọc số x-0-3
            unit = "ba";
         } else if (unit === 4) {    //đọc số x-0-4
            unit = "bốn";
         } else if (unit === 5) {    //đọc số x-0-5
            unit = "năm";
         } else if (unit === 6) {    //đọc số x-0-6
            unit = "sáu";
         } else if (unit === 7) {    //đọc số x-0-7
            unit = "bảy";
         } else if (unit === 8) {    //đọc số x-0-8
            unit = "tám";
         } else if (unit === 9) {    //đọc số x-0-9
            unit = "chín";
         }
         res.innerHTML = hundred + " trăm " + ten + " " + unit;
      } else if (ten === 1) {        // đọc số x-1-z
         ten = "mười";
         if (unit === 1) {    // đọc số x-1-1
            unit = "một";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 2) {    // đọc số x-1-2
            unit = "hai";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 3) {    // đọc số x-1-3
            unit = "ba";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 4) {    // đọc số x-1-4
            unit = "bốn";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 5) {    // đọc số x-1-5
            unit = "lăm";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 6) {    // đọc số x-1-6
            unit = "sáu";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 7) {    // đọc số x-1-7
            unit = "bảy";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 8) {    // đọc số x-1-8
            unit = "tám";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 9) {    // đọc số x-1-9
            unit = "chín";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         } else if (unit === 0) {    // đọc số x-1-0
            unit = "";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      } else if (ten === 2) {        //đọc số x-2-z
         ten = "hai";
         if (unit === 0) {        //đọc số x-2-0
            unit = "mươi";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      } else if (ten === 3) {     //đọc số x-3-z
         ten = "ba";
         if (unit === 0) {        //đọc số x-3-0
            unit = "mươi";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      } else if (ten === 4) {     //đọc số x-4-z
         ten = "bốn";
         if (unit === 0) {        //đọc số x-4-0
            unit = "mươi";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      } else if (ten === 5) {     //đọc số x-5-z
         ten = "năm";
         if (unit === 0) {        //đọc số x-5-0
            unit = "mươi";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      } else if (ten === 6) {     //đọc số x-6-z
         ten = "sáu";
         if (unit === 0) {        //đọc số x-6-0
            unit = "mươi";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      } else if (ten === 7) {     //đọc số x-7-z
         ten = "bảy";
         if (unit === 0) {        //đọc số x-7-0
            unit = "mươi";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      } else if (ten === 8) {     //đọc số x-8-z
         ten = "tám";
         if (unit === 0) {        //đọc số x-8-0
            unit = "mươi";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      } else if (ten === 9) {     //đọc số x-9-z
         ten = "chín";
         if (unit === 0) {        //đọc số x-9-0
            unit = "mươi";
            res.innerHTML = hundred + " trăm " + ten + " " + unit;
         }
      }

      if (unit === 1) {     //đọc số x-y-1
         unit = "mốt";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 2) {       //đọc số x-y-2
         unit = "hai";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 3) {       //đọc số x-y-3
         unit = "ba";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 4) {       //đọc số x-y-4
         unit = "bốn";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 5) {       //đọc số x-y-5
         unit = "lăm";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 6) {       //đọc số x-y-6
         unit = "sáu";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 7) {       //đọc số x-y-7
         unit = "bảy";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 8) {       //đọc số x-y-8
         unit = "tám";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      } else if (unit === 9) {       //đọc số x-y-9
         unit = "chín";
         res.innerHTML = hundred + " trăm " + ten + " mươi " + unit;
      }
   } else {
      res.innerHTML = "Nhập lại số thích hợp!!!";
   }
}
