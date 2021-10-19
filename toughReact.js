import React,{Component,useRef} from 'react'
function App()
{
  const kk=useRef();
  const slogan="we teach more than we promise to teach";
  const changeSlogan=()=>
  {
    alert("change the slogan");
    kk.current.updateSlogan("React is tough and Awesome");
  }
  return (
    <div>
      <h1>Thinking Machines - Ujjain</h1>
      <Title slogan={slogan} onClicked={changeSlogan} ref={kk}/>
    </div>
  );
}
export default App;
class Title extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      "slogan" : props.slogan
    }
    this.onClicked=props.onClicked;
  }
  updateSlogan(slogan)
  {
    this.setState({
      "slogan" : slogan
    });
  }
  clickHandler=()=>
  {
    this.onClicked();
  }
  render()
  {
    return (
      <h3 onClick={this.clickHandler}>{this.state.slogan}</h3>
    );
  }
}