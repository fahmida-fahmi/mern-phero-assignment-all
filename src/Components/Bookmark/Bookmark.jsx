import React from 'react';
import './Bookmark.css'
import { addReadTime } from '../Utilities/click';

const Bookmark = (props) => {
    // const {title} = props.title
    return (
        <div className="bookmark">
            <div >
                <div className="cardReadTime">
                    <p>Spent time on read: <span id='spend-time'>0</span> min</p>
                </div>
            </div>
            <div className="bookmark-content" id='setBookmarkingPost'>
                <h2>Bookmarked Blogs: <span id='blog-count'> 0 </span></h2>
            </div>
        </div>
    );
};

export default Bookmark;