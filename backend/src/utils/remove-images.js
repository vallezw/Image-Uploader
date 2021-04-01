const findRemove = require('find-remove');
const { time } = require('../constants');

const removeImages = () => {
    setInterval(findRemove.bind(this, __dirname + '/upload', {
        age: {seconds: time.WEEK_1 / 1000 }, extensions: ['.jpg', '.jpeg', '.png', '.gif']
    }), time.HOURS_24);
};

module.exports = removeImages;