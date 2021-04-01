const endpoints = {
    UPLOAD_STATIC_DIRECTORY: '/upload',
    UPLOAD_FILE: '/upload',
    DOWNLOAD_FILE: '/download/:id'
};

const time = {
    HOURS_24: 86400000,
    WEEK_1: 604800000
};

module.exports = { endpoints, time };