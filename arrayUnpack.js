import React,{Component,useRef} from 'react'
function doSomething()
{
  return[10,20];
}
function App()
{
  const [a,b]=doSomething();
  alert(a+","+b);
  return (
    <div>
      <h1>Thinking Machines - Ujjain</h1>
    </div>
  );
}
export default App;