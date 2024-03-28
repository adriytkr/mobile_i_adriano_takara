const checkEvenOdd=(x)=>{
  const result=x%2==0;
  return result?'Even':'Odd';
};

const number=17;
const state=checkEvenOdd(number);
console.log(state);

console.log(checkEvenOdd(24));
console.log(checkEvenOdd(1500));
console.log(checkEvenOdd(27));
