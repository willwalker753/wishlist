import React, { Component } from 'react'
const axios = require('axios').default;
import './link.css';

let listArr = [];
export default class link extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'listArr': [{
                'title': '',
                'site': '',
                'desc': '',
                'img': 'https://img.pngio.com/bokeh-png-images-transparent-free-download-pngmartcom-clear-png-background-900_900.png'
            }]
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
                    let res = response.data;
                    console.log(res)
                    let tempObj = {
                        'title': res.title,
                        'site': res["al:android:app_name"],
                        'desc': res.description,
                        'img': res.image
                    }
                    listArr.unshift(tempObj);
                    this.setState({ 'listArr': listArr })
                    console.log(this.state.listArr);
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
                <div id='list-box'>
                    {this.state.listArr.map((item, index) => (
                        <div className='list-item' key={index}>
                            <img src={item.img} className='list-img' alt='site thumbnail'></img>
                            <div className='list-words'>
                                <h5>{item.site}</h5>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>     
                        </div>
                    ))}        
                </div>
                <p>{this.state.error}</p>
            </div>
        )
    }
}
