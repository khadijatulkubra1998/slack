import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader'
import Post from './Post/Post'
import './Main.css'
export class Main extends Component {
    render() {
        return (
            <div className="main">
                <MainHeader />
                <Post
                    name="Khadija Tul Kubra"
                    icon="heart"
                    text="16 replies"
                    imageUrl={require('./image/p-3 (1).jpg')}
                    imageUrl1={require('./image/main (1).png')}
                    imageUrl2={require('./image/p-1 (1).png')}
                    imageUrl3={require('./image/p-2.png')}
                    imageUrl4={require('./image/p-4 (1).jpg')}
                    imageUrl5={require('./image/p-2.png')}
                    time="8:35 PM"
                    detail="Last reply today at 1:31 PM"
                />

            </div>
        );
    }
}

export default Main;
