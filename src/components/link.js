import React, { Component } from 'react'
const axios = require('axios').default;

export default class link extends Component {
    constructor(props) {
        super(props)
        this.state = {
             'url': undefined,
        }
    }
    onChange = e => {
        this.setState({ 'url': e.target.value });
    }
    onSubmit = async e => {
        e.preventDefault();
        let json = { 'url': this.state.url };
        await axios.post('http://localhost:8000/', json)
            .then(response => {
                if(response){
                    
                    console.log(response)
                }
            },
            (error) => {
                this.setState({
                    error
                });
            }
            )
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' onChange={this.onChange}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
