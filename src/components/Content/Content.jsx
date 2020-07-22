import React from 'react';
import s from './Content.module.css';
import {NavLink} from "react-router-dom";

const Content = (props) => {

    let ContentElements = props.ContentApps.map(ContentEl => 
    
        <div className={s.content_bolck}>
            <div className={s.fone}>
                <NavLink to={ContentEl.URL}>
                    <img src={ContentEl.Image}/>
                </NavLink>
                <div className={s.title}>
                    {ContentEl.Title}
                </div>
            </div>
        </div> );

    return (
        <div className={s.main}>

            {ContentElements}

        </div>

    );
};

export default Content;