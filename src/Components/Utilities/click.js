import { createElement } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let postArray = []
const addReadTime = (post) => {
    console.log(post);
    const getSpendTime = document.getElementById("spend-time");
    const getSpendTimeText = getSpendTime.innerText;
    const getSpendTimeTextInt = parseInt(getSpendTimeText);
    console.log(getSpendTimeTextInt);
    const totalReadTime = getSpendTimeTextInt + post.time;
    getSpendTime.innerText = `${totalReadTime}`;
};

const showToastMessage = (post) => {
    const {title} = post
    if (postArray.includes(title)) {
        
        toast('This post had already added in the bookmark!', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
        });
    }
    else {
        addPostBookmark(post)
    }
    postArray.push(title)
    console.log(postArray);
};


const addPostBookmark = (post) => {
    const getBlogNum = document.getElementById("blog-count");
    const getBlogNumText = getBlogNum.innerText;
    const getBlogNumTextInt = parseInt(getBlogNumText);
    const totalBlogs = getBlogNumTextInt + 1;
    getBlogNum.innerText = `${totalBlogs}`;

    const setBookmark = document.getElementById("setBookmarkingPost");
    const div = document.createElement("div");
    div.innerHTML = `<p className='bookmark-card' id="post-title" style="margin: 16px 0;padding: 20px;border-radius: 8px;background: #fff;font-weight: 600;">${post.title}</p>`;
    setBookmark.appendChild(div);

};

const checkTitle = () =>{
    const postTitle = document.getElementById('post-title').innerText 
    console.log(postTitle);
    return postTitle
}

export { addReadTime, addPostBookmark, showToastMessage };
