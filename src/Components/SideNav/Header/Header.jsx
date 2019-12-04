import React, { Component } from 'react';
import { Icon, Input } from 'antd';
import './Header.css'
import 'antd/dist/antd.css';

const { Search } = Input;
export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="top">
                    <div>
                        <div>
                            <h1 className="wrokplace-name">tk-2019  <Icon className="dropdown" type="down" /></h1>

                        </div>
                        <div className="user">
                            <i className="fas fa-circle"></i>
                            <p className="user-name">Khadija Tul Kubra</p>
                        </div>
                    </div>
                    <div>
                        <Icon type="bell" className="bell" />
                    </div>
                </div>
                <div>
                    <div className="search">
                        <Search
                            className="search-box"
                            placeholder="Jump to..."
                            onSearch={value => console.log(value)}
                            style={{ width: 250 }}
                        />
                    </div>
                    <div className="noti"> 
                        <Icon type="message" />
                        <a className="thread">Threads</a>
                    </div>
                </div>
            </div>


        );
    }
}

export default Header;
