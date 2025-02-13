import React from 'react'



export default function Filter() {

  let arr = [1, 2, 4, 5, 6, 7, 9];
  const evenNumbers = arr.filter((newarr) => newarr % 2 === 0);
//   const oddNumbers = arr.filter((num) => (num + 1) % 2 === 0);
  const oddNumbers = arr.filter((newarr) => newarr  % 2 !== 0);

  return (
    <div>



      <h1>Even Numbers</h1>
      <p>Original Array: {JSON.stringify(arr)}</p>
      <p>Even Numbers: {JSON.stringify(evenNumbers)}</p>
      <p>Odd Numbers: {JSON.stringify(oddNumbers)}</p>
    </div>
  )
}
