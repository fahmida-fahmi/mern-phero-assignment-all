// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Post.css'
import { addPostBookmark, addReadTime, showToastMessage } from '../Utilities/click';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = (props) => {
    const { id, url, profilePicture, name, time, date, title, tags } = props.post

    return (
        <div className='post'>
            <img className='post-img' src={url} alt="" />
            <div className='post-info'>
                <div className='user-info'>
                    <img className='post-profile' src={profilePicture} alt="" />
                    <div className='info'>
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <p className='read-time'>{time} min read
                    <FontAwesomeIcon
                        icon={faBookmark}
                        style={{ marginLeft: '5px', cursor: "pointer" }}
                        onClick={() => showToastMessage(props.post)}
                    />
                    <ToastContainer />

                </p>
            </div>
            <h1>{title}</h1>
            <div className='tags-div'>{tags.map(el => <a className='tags'>{el}</a>
            )}</div>
            <a className='mark-as-read' onClick={() => addReadTime(props.post)}>Mark as read</a>
        </div>
    );
};

export default Post;