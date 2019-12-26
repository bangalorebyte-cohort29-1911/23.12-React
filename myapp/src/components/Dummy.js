import React, { Component } from 'react'

export default class Dummy extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({data : json.title}))
    }


    render() {
        return (
            <div>
                Hello from Dummy 

                {this.state.data}


                <div style={style} >
                    <button onClick={this.props.changeColor}>
                    Change Color in Dummy</button>

                    {this.state.data}
                </div>
                
            </div>
        )
    }
}

const style = {
    margin: '10px',
    color: 'green'
}
