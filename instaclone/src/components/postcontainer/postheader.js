import React from 'react';
import './postcontainer.css';

let PostHeader = props => {
    return (
        <div className="post-header">
            <div className="post-thumb-wrapper">
                <img
                    alt="post header"
                    className="post-thumb"
                    src={props.thumbnailUrl}
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
};

export default PostHeader;