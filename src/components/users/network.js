const express = require('express')
const controller = require('.controller');
const { auth } = require('firebase-admin');


const router = express.Router();

function addUsers(req, res){
    const {email, password, displayName} = req.body;
    const {auth} = req;
    controller.addUsers({ auth, email, password, displayName })
        .then((data) => res.status(201).send(data))
        .catch((error) => res.send(error))
}

function getUsers(req, res) {
    const {email} = req.query;
    const {auth} = req;
    controller.getUsers({ auth, email})
    .then((data) => res.status(200).send(data))
    .catch((error) => res.send(error))

}

router.post("/", addUsers)
router.get("/", getUsers)

module.exports = router;




//investigar que son los metodos:
//post 
//get
//patch 
//put
//delete