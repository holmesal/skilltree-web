import React, {Component} from 'react';
import Radium from 'radium';
import {weights} from '../styles/typography';

@Radium
export default class IconButton extends React.Component {

    static propTypes = {
        iconClassName: React.PropTypes.string
    };

    static defaultProps = {

    };

    render() {
        console.info(this.props.children)
        return (
            <div style={[style.wrapper, style.button]}>
                {this._renderIcon()}
                <span>{React.Children.only(this.props.children)}</span>
            </div>
        );
    }

    _renderIcon() {
        if (this.props.iconClassName) {
            return (
                <i className={this.props.iconClassName} style={style.icon}></i>
            )
        }
    }
}

let style = {
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 19,
        paddingRight: 31,
        border: '1px solid #fefefe'
    },
    icon: {
        marginRight: 19,
        fontSize: 30,
        padding: 0,
        lineHeight: '5px'
    }
};