const {getAuth} = requere ('firebase-admin/auth');
const app = require ('./')

function firebaseAuth(req, res, next) {
    req.auth = getAuth(app);
    next();
}

module.exports = {firebaseAuth};