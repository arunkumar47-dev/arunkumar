const Sample=()=>{

 // 1 to 30 print the odd numbers
 
  // const oddnumber=[]
  // for(let i=0;i<=30;i++){
  // if(i%2===1){
  //     oddnumber.push(i);
  // }
  // }
  // console.log(oddnumber)

   //3 number can a middle number

  // let a = 1;
  // let b = 2;  
  // let c = 1;

  // if ((a > b && a < c) || (a < b && a > c)) {
  //   console.log("a yes",a);
  // } else if ((b > a && b < c) || (b < a && b > c)) {
  //   console.log("b yes",b);
  // } else {
  //   console.log("c yes",c);
  // }


  //fibonacci series

//   let a=0;
//   let b=1; 
//   let sum;
//   const total=[]
//   for(let i=1;i<300;i++){ 
//    if(a<300){ 
//     sum=a+b;
//     a=b;
//     b=sum;
//     total.push(a)
//    }
 
//   }
//   console.log(total)

// string charactor can be 2nd charactor to change a uppercase
 
// let a="strings"
// let n=2;
// let result="";
// for(let i=0;i<a.length;i++){
//     if((i+1)%n===0){
//         result+=a[i].toUpperCase();
//     }else{
//         result+=a[i]
//     }
    
// }
// console.log("RESULT", result)

// add two number to odd or even of a output

// let m=9;
// let n=2;

// if(m+n%2===0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

  //  let r=5; 

  //   for (let i = 1; i <= r; i++) {
  //     let row = "";
  //     for (let j = 1; j <= i; j++) {
  //       if (j === 1 || j === i || i === r) {
  //         row += j + " ";
  //       } else {
  //         row += "  "; 
  //       }
  //     }
  //     console.log(row);
  //   }

  let n=125463125463125463;
  let digit=n.toString().split('');
   digit.sort()
  
  if(digit[0]){
    for(let i=1;i<digit.length-1;i++){
      if(digit[i]!=='0'){
        [digit[i]]=[digit[i]];
      }
    }
       parseInt(digit.join(''), 10);

  }
  console.log(digit)

  // function smallestNumber(num) {
   
  //   let digits = num.toString().split('');
  //   digits.sort();
  //   if (digits[0] === '0') {
  //     for (let i = 1; i < digits.length; i++) {
  //       if (digits[i] !== '0') {
  //         [ digits[i]] = [digits[i]];
  //         break;
  //       }
  //     }
  //   }
  //   return parseInt(digits.join(''), 10);
  // }
  // let originalNumber = 5321;
  // console.log(smallestNumber(originalNumber)); 
  
//   const Majestic=(arr)=> {
//     let firstSum = arr[0] + arr[1] + arr[2];
//     let lastSum = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3];

//     return firstSum === lastSum;
// }
// let arr = [1, 2, 3, 4, 6 ,0 ,0];
// if (Majestic(arr)) {
//     console.log("1");
// } else {
//     console.log("0");
// }




    return(
        <p>sample</p>
    )
}
export default Sample