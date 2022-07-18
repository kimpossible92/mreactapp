import React from 'react';

const PostItem = (props)=>{
    return(
        <div className="post">
            <strong>{props.post.id}.{props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
        </div>
    )
}
export  default PostItem;