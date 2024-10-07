//itretion assignment


// 1.
// *****
// ****
// ***
// **
// *

// row=i=5 
//  col=j=5
//  i=j
//  let n =5

//  for (let i=5; i>=1; i--){
//     let str =""
//     for (let j=1; j<=i; j++){
//     str=str+"*"
//     }
//     console.log(str)
// }

// i=5 
//    j=1 
//       *
//    j=2
//       **
//    j=3
//       ***
//     j=4
//      ****
//      j= 5
//      ***** 

//      *****


//2.
// solve piramid pettern
//   *
//  ***
// *****

// row      space      Star 
// i=1     j=2 n-i     1=2*i-1
// i=2     j=1 n-i     3=2*i-1
// i=3     j=0 n-i     5=2*i-1

// row i=3
// col j=5
// let n=3;
// for (let i=1; i<=n; i++){
//     let str=""

//     for (let j=1;j<=n-i; j++ ){
//         str=str+" "
//     }

//     for (let k=1; k<=2*i-1 ; k++){
//         str=str+"*"
//     }

//     console.log(str)
// }
 
// i=1
//   j=1
//     *




// 3.
//  1
//  2 3
//  4 5 6
//  7 8 9 10 

// rowi=4
//  colj=4
//  let n=4

//   let count =1
//  for (let i=1; i<=n ; i++){

//   let str =""

//   for (let j=1; j<=i; j++){
//       str=str+count+ " ";
//       count++
//  }
//  console.log(str)

//  }

//  i=1
//    j=1
//      *

//  i=2
//   j=1
//     *
//   j=2
//     **

//     **   



//  4.
//     *
//    **
//   ***
//  ****

// row i=4
// col j=4
// let n=4;
// for (let i=1; i<=n; i++){
//     let str=""
//     for (let j=1;j<=n-i; j++ ){
//         str=str+" "
//     }

//     for (let k=1; k<=i ; k++){
//         str=str+"*"
//     }
//     console.log(str)
// }

// i=4
//   j=1
//     *
//   j=2
//     **
//   j=3
//     ***
//   j=4
//     ****

//     ****


 

//  5.
//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1

// row=i=5 
//  col=j=5
//  i=j
//  let n =5

//  for (let i=5; i>=1; i--){
//     let str =""
//     for (let j=1; j<=i; j++){
//     str=str+"*"
//     }
//     console.log(str)
// }

// i=5 
//    j=1 
//       *
//    j=2
//       **
//    j=3
//       ***
//     j=4
//      ****
//      j= 5
//      ***** 

//      *****

//  6.
//  *****
//  *   *
//  *   *
//  *****