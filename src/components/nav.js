import React, { Component } from 'react'

export default class nav extends Component {
    render() {
        return (
            <div>
                <h1>Wishlist</h1>
                <div>
                    <a href='/signup'>Sign Up</a>
                    <a href='/login'>Login</a>
                </div>
            </div>
        )
    }
}
