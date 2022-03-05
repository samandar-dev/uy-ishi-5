
// 1 masala ================== N sonigacha bolgan boluvchilarii

// let n = 30;

// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }




// 2 masala ================== N sonigacha bolgan boluvchilarii yig'indisi

// let n = 15;
// let natija = 0;

// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     natija += i
//   }
// }

// console.log("Natija -->> ", natija);




// 3 masala ================== MUKAMMAL SON

// let n = 30;
// let natija = 0;

// for (let i = 0; i < n; i++) {
//   if (n % i == 0) {
//     natija += i
//   }
// }

// if (natija == n) {
//   console.log("Mukammal son");
// }
// else {
//   console.log("Mukammal son emas");
// }




// 4 masala ================== MUKAMMAL SONLAR

// let n = 500;
// let natija = 0;

// for (let i = 1; i < n; i++) {
//   natija = 0
//   for (let j = 0; j < i; j++) {
//     if (i % j == 0) {
//       natija += j
//     }
//   }

//   if (natija == i) {
//     console.log("Mukammal son -->>>", natija);
//   }
// }




// 5 masala ================== N gacha bolgan 3 bolinadiganlar lekin 5 ga bolinmaydiganlar

// let n = 30;
// let natija = 0;

// for (let i = 0; i < n; i++) {
//   if (i % 3 == 0 && i % 5 != 0) {
//     console.log("3 bolinadiganlar ->>", i);
//   }
// }




// 6 masala ============== TUB son

// let n = 7;
// let natija = 0;

// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     natija += 1
//   }
// }

// if (natija == 2) {
//   console.log("Tub son", n);
// }
// else {
//   console.log("Tub son emas");
// }




// 7 masala ================= N gacha bolgan TUB sonlar

// let n = 100;
// let natija = 0;

// for (let i = 0; i <= n; i++) {
//   natija = 0
//   for (let j = 0; j <= i; j++) {
//     if (i % j == 0) {
//       natija += 1
//     }
//   }
//   if (natija == 2) {
//     console.log("Tub son -->>>", i);
//   }
// }




// 8 masala ================== N gacha bolgan PIFAGOR sonlarini topish

// let n = 10;
// let natija = 0;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     for (let f = 0; f <= n; f++) {
//       let nn = Math.pow(f, 2) + Math.pow(j, 2);
//       if (nn == Math.pow(i, 2)) {
//         natija = nn
//       }
//     }
//   }
//   console.log(natija);
// }




// 9 masala ================ N gacha bolgan PIFAGOR sonlar


// let n = 300;
// let natija1 = 0;
// let natija2 = 0;

// for (let i = 0; i < n; i++) {
//   natija1 = 0
//   for (let j = 1; j < i; j++) {
//     if (i % j == 0) {
//       natija1 += j
//     }
//   }

//   for (let k = 1; k < n; k++) {
//     natija2 = 0
//     if (natija1 == k) {
//       for (let l = 0; l < k; l++) {
//         if (k % l == 0) {
//           natija2 += l
//         }
//       }
//     }
//   }

//   if (natija2 == natija1) {
//     console.log(natija1, natija2);
//   }

// }
// console.log(natija2);




// 10 masala ============= N gacha bolgan sonlarning kopaytmasii

// function n_kopaytma(n) {
//   let a = 2;
//   let b = n;
//   let natija = 1;

//   for (let i = 1; i <= n; i++) {
//     natija *= i
//   }

//   console.log(`A ->> ${Math.pow(2, n)}, B ->> ${natija}`);
// }

// n_kopaytma(5)




// 11 masala ================= a b c d sonlaridan kattasini va kichigini topuvchi fun.. tuzing


// function katta_kichik(a, b, c, d) {
//   let x = 0;
//   let y = 0;

//   x = Math.min(a, b, c, d)
//   y = Math.max(a, b, c, d)

//   console.log(`Min ->> ${x} : Max ->> ${y}`);
// }

// katta_kichik(3, 5, 8, 2)




// 12 masala ================== a b c sonlarini osish tartibida jaylashtirish

// function son_osish(a, b, c) {
//   let n = 0;

//   n = Math.max(a, b, c)

//   for (let i = 0; i <= n; i++) {
//     if (i == a || i == b || i == c) {
//       console.log(i);
//     }
//   }
// }

// son_osish(23, 16, 8)




// 13 masala ============ a b c sonlarini kamayish tartibida jaylashtirish

// function son_kamaysh(a, b, c) {
//   let n = 0;
//   let nn = 0;

//   n = Math.min(a, b, c)
//   nn = Math.max(a, b, c)

//   for (let i = nn; i => n; i--) {
//     if (i == a || i == b || i == c) {
//       console.log(i);
//     }
//   }
// }

// son_kamaysh(23, 16, 8)




// 14 masala ============= ShiftRight

// function son_kamaysh(a, b, c) {
//   let aa = a;
//   let bb = b;
//   let cc = c;
//   let n = 0;

//   console.log(`${aa} - ${bb} - ${cc}`);

//   n = aa;
//   aa = cc;
//   cc = bb;
//   bb = n;

//   console.log(`Natija : ${aa} - ${bb} - ${cc}`);
// }

// son_kamaysh(23, 16, 8)




// 15 masala ============= ShiftLeft

// function son_kamaysh(a, b, c) {
//   let aa = a;
//   let bb = b;
//   let cc = c;
//   let n = 0;

//   console.log(`${aa} - ${bb} - ${cc}`);

//   n = cc;
//   cc = aa;
//   aa = bb;
//   bb = n;

//   console.log(`Natija : ${aa} - ${bb} - ${cc}`);
// }

// son_kamaysh(23, 16, 8)




// 16 masala ========= Haqiqiy son

// function haqiqiy_son(a, b) {
//   let aa = a;
//   let bb = b;
//   let n = 0;

//   n = aa + bb

//   if (n > 0) {
//     console.log("-->>", 1);
//   } else if (n < 0) {
//     console.log("-->>", -1);
//   } else {
//     console.log("-->>", 0);
//   }
// }

// haqiqiy_son(-6, 6)




// 17 masala ========== Kvadrat tenglamaning ildizi

// function kv_te_ildz(a, b, c, x) {
//   let aa = a;
//   let bb = b;
//   let cc = c;
//   let xx = x;
//   let n = 0;

//   n = aa * Math.pow(xx, 2) + bb * xx + cc

//   console.log("Natija ->> ", n);
// }

// kv_te_ildz(2, 5, 6, 3)