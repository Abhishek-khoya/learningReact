import React,{Component} from 'react'
import './App.css';
function App() {
  return (
    <div>
      <h1>Thinking Machines - Ujjain</h1>
      <TMSlogan slogan="We teach mode than we promist to teach" moto="programming lives"/>
    </div>
    
  );
}
class TMSlogan extends React.Component
{
  constructor(props)
  {
    super(props);
    this.slogan=props.slogan;
    this.moto=props.moto;
  }
  render()
  {
    return(
      <div>
        <b>{this.slogan}</b>
        <br></br>
        <b>{this.moto}</b>
      </div>
    );
  }
}
export default App;
