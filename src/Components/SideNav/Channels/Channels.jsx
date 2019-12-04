import React, { Component } from 'react';
import { Icon } from 'antd';
import './Channels.css'
export class Channels extends Component {
    render() {
        return (
            <div>
                <div className='channel-head'>
                    <a className="channel">Channels</a>
                    <Icon type="plus-circle" theme="filled" className="plus" />
                </div>
                <ul  className="channel-list">
                    <li><a href="#"># annoucements</a></li>
                    <li><a href="#"># attendence</a></li>
                    <li><a href="#"># chat</a></li>
                    <li><a href="#"># class=resources</a></li>
                    <li><a href="#"># freecodecamp</a></li>
                    <li><a href="#"># general</a></li>
                    <li><a href="#"># life-skills</a></li>
                    <li><a href="#"># mentor=meeetups</a></li>
                    <li><a href="#"># studnet-showcase</a></li>
                    <li> <a href="#">< Icon type="lock" theme="filled" /> tk-girls</a></li>
                    <li><a href="#"># web-dev</a></li>
                </ul>
            </div>
        );
    }
}

export default Channels;
