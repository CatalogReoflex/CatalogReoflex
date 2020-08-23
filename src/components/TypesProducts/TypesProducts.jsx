import React from 'react';
import s from './TypesProducts.module.css';
import Header from './../Header/Header';
import {NavLink} from "react-router-dom";

const TypesProducts = (props) => {

    let ContentElements = props.TypesProducts.map(ContentEl => 
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
            <Header Header="Типы Шпаклёвок"/>
            
            <div className={s.main}>
                {ContentElements}
            </div>

            <NavLink to="/">
                    <img src={require('./../../image/home.png')} className={s.Home} alt="Home"/>
            </NavLink>
        </div>
    );
};

export default TypesProducts;