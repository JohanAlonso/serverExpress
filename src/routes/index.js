require("express")
const userd = require('../components/users/network');
const main = ('../componentes/main/network');
const allRoutes = require('../utils/constants/routers.json')

const routers = (server) => {
    server.use(allRoutes.users, users);
    server.use(allRoutes.main, main);
}

module.exports = routes;