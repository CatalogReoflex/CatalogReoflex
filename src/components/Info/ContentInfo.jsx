import React from 'react';
import s from './ContentInfo.module.css';
import InfoString from './InfoString/InfoString';
import {NavLink} from "react-router-dom";

const ContentInfo = (props) => {

    let DialogsElements = props.ContentInfo.map(ContentEl => <InfoString
        Image={ContentEl.Image}
        Title={ContentEl.Title}/> );

    return (
        <div className={s.main}>

            {DialogsElements}

            <NavLink to="/">
                <img src={require('./../../image/home.png')} className={s.Home}/>
            </NavLink>

        </div>
    );
};

export default ContentInfo;