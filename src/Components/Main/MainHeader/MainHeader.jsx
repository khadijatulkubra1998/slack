import React, { Component } from 'react';
import { Icon, Input } from 'antd';
import './MainHeader.css'
const { Search } = Input;
export class MainHeader extends Component {
    render() {
        return (
            <div className="main-head">
                <section>
                    <div>
                        <h1>#freecodecamp</h1>
                    </div>
                    <div className='icons'>
                        <Icon type="star" /> <span>|</span>
                        <Icon type="user" /> <p> 114 |</p>
                        <Icon type="pushpin" /> <p> 0 | </p>
                        <Icon type="edit" theme="filled" /> <p>Add a topic</p>
                    </div>
                </section>
                <section className="corner">
                    <Icon type="info-circle" className="icons" />
                    <Icon type="setting" className="icons" />
                    <Search
                        className="search-box"
                        placeholder="search"
                        onSearch={value => console.log(value)}
                        style={{ width: 250 }}
                    />
                    <i class="fas fa-at"></i>
                    <Icon type="star" className="icons" />
                    <Icon type="more" className="icons" />
                </section>
            </div>
        );
    }
}

export default MainHeader;
