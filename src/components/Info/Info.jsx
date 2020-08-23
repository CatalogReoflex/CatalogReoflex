import React from 'react';
import s from './Info.module.css';
import {NavLink} from "react-router-dom";

const Info = (props) => {

    let ContentElements = props.PuttiesInfo.MainInfo.map(ContentEl => 
        <div className={s.content_bolck}>
                <div className={s.fone} style={{"box-shadow": ContentEl.Shadow, "background": ContentEl.Color}}>
                    <div className={s.title}>
                        {ContentEl.Title}
                    </div>
                </div>
        </div> );

    return (
        <div className="SearchPage">

            <div className={s.Head}>
               <img className={s.MainImage} src={props.PuttiesInfo.HeadInfo.Image} alt="MainImage" /> 
               <p>{props.PuttiesInfo.HeadInfo.Title}</p>
            </div>

            <div className={s.main}>
                {ContentElements}
            </div>

            <NavLink to="/PuttiesTypes">
                    <img src={require('./../../image/home.png')} className={s.Home} alt="Home"/>
            </NavLink>
        </div>
    );
};

export default Info;