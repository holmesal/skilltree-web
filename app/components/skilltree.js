import React, {Component} from 'react';
import Radium from 'radium';
import Human from './human';

@Radium
export default class SkillTree extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: false
        };
    }

    render() {
        return (
            <div style={style.wrapper}>
                {this.state.loading ? this._renderLoading() : this._renderSkilltree()}
            </div>
        )
    }

    _renderLoading() {
        return (
            <div>loading</div>
        )
    }

    _renderSkilltree() {
        return (
            <Human />
        )
    }
}

let style = {
    wrapper: {
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%'
    }
};