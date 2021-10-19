import React,{Component} from "react";
function App()
{
    const [aaa,bbb]=React.useState("God is great");
    const doSomething=()=>{
        bbb("Ujjain is the city of gods");
    }
    return (
        <div>
            <h1>Thinking Machines</h1>
            <Title slogan={aaa} justDoit={doSomething}/>
        </div>
    );
}
const Title=(props)=>{
    const clickHandler=()=>
    {
        props.justDoit()
    }
    return (
        <div>
            <h3 onClick={clickHandler}>{props.slogan}</h3>
        </div>
    );
}
export default App;