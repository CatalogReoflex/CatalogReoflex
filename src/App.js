import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import ContentInfo from './components/Info/ContentInfo';
import {Route} from "react-router-dom";

const App = (props) => {

    // Footer пока не импортируется ( Не доделан )
    return (
        <section className="main">

            <Header/>

            <Route  exact path='/'
                    render={() => <Content
                    ContentApps={props.state.ContentApps}/>}/>

            {/* Информация в отображаемая в зависимости от выброного каталога */}
            <Route  path='/Putties'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Putties} />}/>

            <Route  path='/Adhesive_primers'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Adhesive_primers} />}/>

            <Route  path='/Soils'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Soils} />}/>

            <Route  path='/Lucky'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Lucky} />}/>

            <Route  path='/Protective_materials'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Protective_materials} />}/>

            <Route  path='/Special_coatings'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Special_coatings} />}/>

            <Route  path='/Supporting_materials'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Supporting_materials} />}/>

            <Route  path='/Enamels'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Enamels} />}/>

            <Route  path='/Expendable_materials'
                    render={() => <ContentInfo 
                    ContentInfo={props.state.ContentInfo.Expendable_materials} />}/>
        </section>
    );
};


export default App;
