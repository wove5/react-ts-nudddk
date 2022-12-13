import * as React from 'react';
import './style.css';
import render from '@testing-library/React'



export default function App() {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>Click here</button>
      <h1>Hello StackBlitz!</h1>
      <p>Count is now : {count}</p>
    </div>
  );
}

