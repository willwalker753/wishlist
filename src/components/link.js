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
                'img': ''
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
                        'url': res.url,
                        'title': res.title,
                        'site': res.source,
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
        document.getElementById('url-input').value = null;
        document.getElementById('list-box').classList.remove('hidden');
    }
    onDelete = e => {
        console.log(e.target.id)
        listArr.splice(e.target.id, 1);
        this.setState({ 'listArr': listArr })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' id='url-input' onChange={this.onChange}></input>
                    <button type='submit'>Submit</button>
                </form>
                <div id='list-box' className='hidden'>
                    {this.state.listArr.map((item, index) => (
                        <div className='list-item'>
                            <a className='list-item-link' href={item.url} target='_blank' key={item.title}>
                                <img src={item.img} className='list-img' alt='site thumbnail'></img>
                                <div className='list-words'>
                                    <h5>{item.site}</h5>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </a>
                            <button className='list-item-delete' id={index} key={index} onClick={this.onDelete}>Trash</button>
                        </div>
                        
                    ))}        
                </div>
                <p>{this.state.error}</p>
            </div>
        )
    }
}
