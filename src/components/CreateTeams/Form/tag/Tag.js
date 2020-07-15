import React from 'react';
import './Tag.css';

const Tag = (props) =>{
    const deleteTag = (event) =>{
        event.stopPropagation();
        props.deleteTag(props.name)
    }
    return(
        <div className="tag mr-2 ml-2 d-flex justify-content-around">
            <span>{props.name}</span>
            <div onClick={deleteTag}>X</div>
        </div>
    )
}

export default Tag;