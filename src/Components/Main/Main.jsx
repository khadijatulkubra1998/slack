import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader'
import Post from './Post/Post'
import './Main.css'
export class Main extends Component {
    render() {
        return (
            <div className="main">
                <MainHeader />
                <Post />
            </div>
        );
    }
}

export default Main;
