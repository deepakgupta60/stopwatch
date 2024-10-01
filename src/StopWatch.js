import React, { useEffect, useState } from 'react'

const StopWatch = () => {
  const [data, setData]=useState(0);
  const [flag, setFlag]=useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};


const handleStart=()=>{
  setFlag(!flag)
}

const handleReset=()=>{
  setFlag(false);
  setData(0)
}
  
useEffect(()=>{
  let interId="";
  if(flag)
  {
    interId=setInterval(()=>{
      setData((prev)=>prev+1)
    },1000)
  }
  else{
    clearInterval(interId)
  }
  return ()=>clearInterval(interId)
  
},[flag])
  return (
    <>
    
<h1>Stopwatch</h1>

<p>Time: {formatTime(data)}</p>

<button onClick={handleStart}>
  
  {flag ? "Stop":"Start"}

</button>
<button onClick={handleReset}>
  Reset
</button>
    </>
  )
}

export default StopWatch