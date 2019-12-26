import React, { Component } from 'react'

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
        this.setState({btnStyle:{backgroundColor:"Red"}})
    }


    render() {
        return (
            <div style = {style}>
                Hello {this.state.name}
                <button onClick = { () => (this.state.name === 'jithin') ? this.setState({name:'stive'}) : this.setState({name :'jithin'}) }>
                Click here!</button>
                
                <button onClick={this.changeColor} style={this.state.btnStyle}>Change Color</button>
            </div>
        )
    }
}

const style = {
    margin:'10px',
    color:'red'
}
