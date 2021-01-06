import React, { Component } from 'react'
const axios = require('axios').default;

export default class link extends Component {
    constructor(props) {
        super(props)
        this.state = {
             'url': undefined,
             'title': undefined,
             'site': undefined,
             'desc': undefined,
             'img': undefined,
             'error': undefined,
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
                    this.setState({
                        'title': response.data.title,
                        'site': response.data["al:android:app_name"],
                        'desc': response.data.description,
                        'img': response.data.image,
                    })
                }
            },
            (error) => {
                this.setState({'error': error});
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
                <div >
                    <img src={this.state.img} alt='site thumbnail'></img>
                    <h5>{this.state.site}</h5>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.desc}</p>
                    
                </div>
                <p>{this.state.error}</p>
            </div>
        )
    }
}
