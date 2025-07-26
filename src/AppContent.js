import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from "./assets/context";
import Init from './assets/init';
import Menu from './components/menu';
import Pages from './assets/pages';
import Prompt from './components/prompt';

export default () => {
    const { dispatch } = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'url',
            payload: history
        })
    }, [dispatch, history])

    const [local, set_local] = useState('active');

    return (
        <>
            <Init />
            <div id={ 'wrapper' } className={ local }>
                <Menu />
                <Pages />
            </div>
            <Prompt set_wrapper={ set_local } />
        </>
    )
}