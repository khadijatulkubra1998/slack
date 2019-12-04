import React, { Component } from 'react';
import { Icon } from 'antd';
import './Post.css'
const Post = (props) => {
    return (
        <div>
            <div className='detail'>
                <div>
                    <img className="profilepic" src={props.imageUrl}></img>
                </div>
                <div>
                    <div className="name">
                        <h1>{props.name}</h1>
                        <p>{props.time}</p>
                    </div>
                    <div>
                        <img className="post" src={props.imageUrl1} alt="post" />
                    </div>
                    <div>
                        <Icon type={props.icon} theme="filled" />
                        <p>5</p>
                    </div>
                    <div className="likes">
                        <img src={props.imageUrl2} alt="profile pic" />
                        <img src={props.imageUrl3} alt="profile pic" />
                        <img src={props.imageUrl4} alt="profile pic" />
                        <img src={props.imageUrl5} alt="profile pic" />

                        <p><a>{props.text}</a> {props.detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
