import React, {Component} from 'react';
import Radium from 'radium';
import Skilltree from '../components/skilltree';
import {Provider} from 'react-redux';

@Radium
export default class AppContainer extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Skilltree />
            </Provider>
        );
    }
}

let style = {
    wrapper: {
        display: 'flex'
    }
};