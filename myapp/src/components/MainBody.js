import React, { Component } from 'react'
import Dummy from "./Dummy"

export default class MainBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'jithin',
            btnStyle :{
                backgroundColor:'blue'
            }
        }
    }

    changeColor = () => {
        console.log("Hello")
        this.setState({btnStyle:{backgroundColor:"Yellow"}})
    }


    render() {

        let display = "test"
        if(this.state.name === 'jithin'){
            display = <Dummy changeColor= {this.changeColor}/>
        }

        return (
            <div style = {style}>
                { this.props.variable }
                Hello {this.state.name}
                <button onClick = { () => (this.state.name === 'jithin') ? this.setState({name:'stive'}) : this.setState({name :'jithin'}) }>
                Click here!</button>                
                <button onClick={this.changeColor} style={this.state.btnStyle}>Change Color</button>
                {display}
            </div>
        )
    }
}

const style = {
    margin:'10px',
    color:'red'
}
