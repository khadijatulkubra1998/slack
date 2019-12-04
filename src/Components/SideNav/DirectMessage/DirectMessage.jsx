import React, { Component } from 'react';
import { Icon } from 'antd';
import './DirectMessage.css'
export class DirectMessge extends Component {
    render() {
        return (
            <div>
                <div className="DM">
                    <a className='direct-message'>Direct Messages</a>
                    <Icon type="plus-circle" theme="filled" className="plus"/>
                </div>
                <ul className="message">
                    <li><Icon type="heart" theme="filled" className="heart"/> <a>Slackbot</a></li>
                    <li><i class="far fa-circle"></i> <a>Abdul Waqar</a></li>
                    <li><i class="far fa-circle"></i> <a>Khair-un-nisa</a></li>
                    <li><i class="far fa-circle"></i> <a>Qaiser Tariq</a></li>

                </ul>
            </div>
        );
    }
}

export default DirectMessge;
