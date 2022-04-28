import React, {useState } from 'react';

export const CountUpDown = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
    <label>{count}</label>
    <button onClick={() => setCount(count + 1)}>＋</button>
    <button onClick={() => setCount(count - 1)}>ー</button>
  </div>
  )
}