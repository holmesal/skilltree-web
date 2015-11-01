import {createSelector} from 'reselect';

export const human$ = createSelector(state => state.skilltree.human, (human) => {
    return {
        name: human.name,
        email: human.email,
        photo: human.photo
    }
});