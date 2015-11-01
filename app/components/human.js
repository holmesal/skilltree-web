import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {human$} from '../selectors/human';
import {header} from '../styles/typography';
import IconButton from './iconButton'

@connect(human$)
@Radium
export default class Human extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string,
        photo: React.PropTypes.string
    };

    _getHeight() {
        console.info(`height: ${window.innerHeight}`)
        return {
            height: window.innerHeight / 2
        }
    }

    render() {
        return (
            <div style={[style.wrapper, this._getHeight()]}>
                <span style={[header, style.name]}>{this.props.name}</span>
                {this._renderIconButton()}
            </div>
        );
    }

    _renderIconButton() {
        if (this.props.email) {
            return (
                <IconButton
                    iconClassName="ion-ios-paperplane-outline"
                >
                    <span>{this.props.email}</span>
                </IconButton>
            )
        }
    }
}

let style = {
    wrapper: {
        alignItems: 'center',
        //backgroundColor: '#EFEFEF',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 200
    },
    name: {
        marginBottom: 16
    }
};