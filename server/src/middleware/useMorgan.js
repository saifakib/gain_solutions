/*
* Morgan Custom Configuration
*/

const morgan = require('morgan')
const rfs = require("rotating-file-stream");
const path = require('path')

module.exports = function (app) {
    const format = typeof (process.env.NODE_ENV) === 'string' && process.env.NODE_ENV === 'production' ? 'combined' : 'dev';

    //rotating write stream for error
    const accessLogStream400 = rfs.createStream('access400.log', {
        size: "20M",
        interval: '1d',
        path: path.join(__dirname, '../../logs'),
    })

    //rotating write stream for without response error
    const accessLogStream200 = rfs.createStream('access200.log', {
        size: "20M",
        interval: '1d',
        path: path.join(__dirname, '../../logs'),
    })

    //Status Code for 400 & 500
    app.use(
        morgan(format, {
            skip: (req, res) => {
                return res.statusCode < 400;
            },
            stream: process.env.NODE_ENV === 'production' ? accessLogStream400 : process.stderr
        })
    );

    //Status Code for Under 400
    app.use(
        morgan(format, {
            skip: (req, res) => {
                return res.statusCode <= 400;
            },
            stream: process.env.NODE_ENV === 'production' ? accessLogStream200 : process.stdout
        })
    )
};