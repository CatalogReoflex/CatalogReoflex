import React from 'react';
import s from './InfoString.module.css';

const InfoString = (props) => {
    return (
            <div className={s.content_bolck}>
                <img src={props.Image} alt="post"/>
                <div className={s.title}>{props.Title}</div>
            </div>
    );
};

export default InfoString;