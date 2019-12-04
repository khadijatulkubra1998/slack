import React, { Component } from 'react';
import Header from './Header/Header';
import Channels from './Channels/Channels';
import DirectMessage from './DirectMessage/DirectMessage';
import './SideNav.css';
export class SideNav extends Component {
    render() {
        return (
            <div className="side">
                <Header />
                <Channels />
                <DirectMessage />
            </div>
        );
    }
}

export default SideNav;
