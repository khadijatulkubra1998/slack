import React, { Component } from 'react';
import { Icon, Input, Tooltip } from 'antd';
import profile1 from '../image/p-3 (1).jpg'
import mainpost from '../image/main (1).png'
import profile2 from '../image/p-4 (1).jpg'
import profile3 from '../image/p-2.png'
import profile4 from '../image/p-5 (1).jpg'

import './Post.css'
const Post = (props) => {
    return (
        <div>
            <div className='detail'>
                <div>
                    <img className="profilepic" src={profile1}></img>
                </div>
                <div className="posting">
                    <div className="name">
                        <h1>Khadija Tul Kubra</h1>
                        <p>8:35 PM</p>
                    </div>
                    <div className="comments">
                        <div>
                            <p>Completed</p>
                        </div>
                        <div>
                            <img className="post" src={mainpost} alt="post" />
                        </div>
                        <div className="icon-like">
                            <Icon type="heart" theme="filled" className="heart-icon" />
                            <p>5</p>
                        </div>
                        <div className="likes">
                            <img src={profile2} alt="profile pic" />
                            <img src={profile3} alt="profile pic" />
                            <img src={profile4} alt="profile pic" />
                            <img src={profile3} alt="profile pic" />

                            <p><a>16 replies</a> Last reply today at 1:31 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-post">
                <div className="post">
                    <div className="second">
                        <img src={profile4} alt="profile" />
                    </div>
                    <div className="name">
                        <h1>syed kukab</h1>
                        <p>11:59 PM</p>
                    </div>
                </div>
                <div className="comments">
                    <div>
                        <p>wwwooooowwwww yr great</p>
                    </div>
                    <div>
                        <Icon type="heart" theme="filled" className="heart-icon" />
                    </div>
                    <div className="likes">
                        <img src={profile2} alt="profile"></img>
                        <img src={profile3} alt="profile"></img>
                    </div>
                </div>
            </div>
            <Input
                className="input"
                placeholder="Enter your username"
                prefix={<Icon type="plus-square" style={{ color: 'black' }} />}
                suffix={
                    <Tooltip title="Extra information">
                        <Icon type="smile" style={{ color: 'black' }} />
                    </Tooltip>
                }
            />

        </div>
    );
}

export default Post;
