import _ from 'lodash';

export const weights = {
    light: {
        fontFamily: "Avenir-Light, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
        fontWeight: 100
    },
    book: {
        fontFamily: "Avenir-Book, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
        fontWeight: 300
    },
    medium: {
        fontFamily: "Avenir-Medium, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
        fontWeight: 400
    },
    heavy: {
        fontFamily: "Avenir-Heavy, HelveticaNeue-Bold, Helvetica Neue Bold, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
        fontWeight: 700
    }
};


export const header = _.assign({}, weights.light, {
    fontSize: 31
});