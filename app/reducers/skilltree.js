import _ from 'lodash';
import {UPDATE_SKILLTREE} from '../actions/skilltree';

export default function skilltree (state = {}, action) {

    switch (action.type) {

        case UPDATE_SKILLTREE:
            return _.assign({}, state, action.skilltree)

        default:
            return state;

    }
}