/**
 * 
 */

const studentRoute = require('./studentRoutes')
const subjectRoute = require('./subjectRoutes')


const routes = [
    {
        path: '/student',
        handler: studentRoute
    },
    {
        path: '/subject',
        handler: subjectRoute
    },
    {
        path: '/',
        handler: (req, res) => {
            res.send('Home')
        }
    }
]

module.exports = app => {
    routes.forEach(route => {
        if(route.path === '/') {
            app.get(route.path, route.handler)
        } else {
            app.use(route.path, route.handler)
        }
    })
}