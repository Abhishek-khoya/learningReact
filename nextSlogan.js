import React,{Component,useRef} from 'react'
import './App.css';
function App() 
{
  const tmsloganref=useRef();
  const goToNextSlogan=function(){
    tmsloganref.current.updateSlogan("ujjain is the city of gods");
  }
  const goToNextMoto=function(){
    tmsloganref.current.updateMoto("God is great");
  }
  return (
    <div>
      <h1>Thinking Machines - Ujjain</h1>
      <TMSlogan slogan="We teach mode than we promist to teach" moto="programming lives" ref={tmsloganref}/>
      <button type="button" onClick={goToNextSlogan}>next slogan</button>
      <button type="button" onClick={goToNextMoto}>next moto</button>
    </div>
  );
}
class TMSlogan extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      "slogan" : props.slogan,
      "moto" : props.moto
    }
  }
  updateSlogan(slogan)
  {
    this.setState({
      "slogan" :slogan,
    });
  }
  updateMoto(moto)
  {
    this.setState({
      "moto" : moto
    });
  }
  render()
  {
    return(
      <div>
        <b>{this.state.slogan}</b>
        <br></br>
        <b>{this.state.moto}</b>
      </div>
    );
  }
}
export default App;
