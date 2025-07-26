import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./assets/context";
import './interface/css/general.scss';
import AppContent from './AppContent';

export default () => {
    return (
        <BrowserRouter>
            <Provider>
                <AppContent />
            </Provider>
        </BrowserRouter>
    )
}