import React from 'react';
import s from './Content.module.css';
import Header from './../Header/Header';
import {NavLink} from "react-router-dom";

const Content = (props) => {

    let ContentElements = props.ContentApps.map(ContentEl => 
        <div className={s.content_bolck}>
            <NavLink to={ContentEl.URL}>
                <div className={s.fone} style={{"box-shadow": ContentEl.Shadow, "background": ContentEl.Color}}>
                        <img src={ContentEl.Image} alt="App"/>
                    <div className={s.title}>
                        {ContentEl.Title}
                    </div>
                </div>
            </NavLink>
        </div> );

    return (
        <div className="SearchPage">
            <Header Header="Каталог Товаров"/>
            <div className={s.main}>
                {ContentElements}
            </div>
        </div>
    );
};

export default Content;