import React, { useEffect, useRef } from 'react';

function RefComponent() {
const inputRef=useRef('hello');
const passwordRef=useRef();
useEffect(()=>{
    console.log('inputRef',inputRef);
    console.log('inpurRef',inputRef.current);
    inputRef.current.focus()
},[])
  return <div>
<input type='text' ref={inputRef} placeholder='enter userName'/>
<input type='password' ref={passwordRef} placeholder='enter password'/>
<button onClick={()=>{passwordRef.current.focus()}}>Login</button>
  </div>;
}

export default RefComponent;
