import React, { useState, useEffect } from 'react';
import ReactDom from "react-dom";
import { render } from 'react-dom';
function ButtonPage() {

  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? Number(storedCount) : 0; });

  function handleClick() {
   setCount(count + 1);
 }
 function resetToZero() {

   setCount(count == 0);
 }

 useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);


 return (
   <div className="button-div">
   <h1> Click Counter </h1>
   <button className="button" onClick={handleClick}>
     Click me
   </button>
   <button className="button" onClick={resetToZero}>
     Reset
   </button>
   <h3> Current count: {count} </h3>
   </div>
 );



}

export default ButtonPage;
