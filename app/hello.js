import React, {Component} from 'react';
import Radium from 'radium';

@Radium
export default class Hello extends React.Component {

    static propTypes = {
        
    };

    static defaultProps = {
        
    };

    render() {
        return (
            <div style={style.wrapper}>
                I am the Hello component!
            </div>
        );
    }
}

let style = {
    wrapper: {
        display: 'flex'
    }
};