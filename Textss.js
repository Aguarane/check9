import React from 'react';
export default class Textss extends React.Component{
    state = {
        text:
       [ "play football",
        "watching Tv",
        "play videogames",]
        , 
        input: ""
    }

    addtodo()
    {
        const tab = this.state.text;
        tab.push(this.state.input)
        this.setState({text:tab})

    }

render(){
    return(
        <div>
            <ul>
                {this.state.text.map(todo=><li>{todo}</li>)}
            </ul>
            <input type="text" onChange={(event)=>{this.setState({input: event.target.value})}}>
            
            </input>
   <button onClick={() =>{this.addtodo()}}>Add</button>
        </div>
    )
}
}