module.exports = {
    mode    : 'production',
    entry   : {
        'get' : './test/get.js'
    },
    output  : {
        filename        : '[name].js',
        libraryTarget   : 'window',
        library         : 'init'
    }
};
