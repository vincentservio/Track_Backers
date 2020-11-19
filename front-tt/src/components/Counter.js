import React, { Component } from 'react'

export default class Counter extends Component {
    state= {
        count:0 
    }
    onClick = () => {
        this.setState({
            count: this.state.count +1 
        })
    }

    callApi = () => {
        console.log('a')
        fetch('http://localhost:3001/tracftgfggfgks')
        .then(res => {
            if(res.ok) {
                 console.log('b')
            return res.json()} else {
                throw new Error(res.statusText)
            }
        })
            
           
       
            .then(tracks => console.log('c', tracks))
        .catch(e => console.log('d', e))
        console.log('e')



        // a e b c d 
        // a e d error
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.onClick}>+</button>
                <button onClick={this.callApi}>Call Api</button>
            </div>
        )
    }
}
