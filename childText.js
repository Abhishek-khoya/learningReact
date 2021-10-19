import React from "react";
const App=()=>{
    const [childText,setChildText]=React.useState("")
    const justDoIt=(ev)=>{
        setChildText(ev.currentTarget.value);
    }
    return (
        <div>
            <h1>Cool React</h1>
            <SomeComponent tellParent={justDoIt} text={childText}/>
        </div>
    )
}
const SomeComponent=(props)=>{
    const doSomething=(ev)=>{
        props.tellParent(ev);
    }
    return(
        <div>
        SomeComponent<input type="text" onChange={doSomething}></input><br></br>
        child is saying : <b>{props.text}</b>
        </div>
    )
}
export default App;