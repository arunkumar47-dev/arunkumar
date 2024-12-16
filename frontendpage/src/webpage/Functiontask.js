const Functiontask = () => {
  // const oddevennumbers=(number)=>{
  //     if(number%2===0){
  //         console.log("even")
  //     }else{
  //         console.log("odd")
  //     }
  // }
  // oddevennumbers(8)

  // let a=21;

  //     if(a%2===0){
  //         console.log("31")
  //     }else if(a%2===1){
  //         console.log("30")
  //     }else{
  //         console.log("not a month")
  //     }

  const LargestInteger = (str) => {
    let arr_str = str.split(" ").sort();
    let max = 0;
    for (let i = 0; i < arr_str.length; i++) {
      if (!isNaN(arr_str[i])) {
        if (max < Number(arr_str[i])) {
          max = Number(arr_str[i]);
        }
      }
    }
    return max;
  };
  let n = "i was born on 12 october 1993";
  let inputvalue = LargestInteger(n);
  console.log(inputvalue);
};
export default Functiontask;
