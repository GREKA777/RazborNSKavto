import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Head from "./components/Head/Head";
import './App.css'
const App = () => {
    return (
        <div className='wrapper'>
            <BrowserRouter>
                <Head/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );

};

export default App;