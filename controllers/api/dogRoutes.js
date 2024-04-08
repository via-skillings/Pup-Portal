//TO DO: POST Route for new dog, with auth, IS THE POST ROUTE CORRECT OR DOES IT NEED TO SAY /newdog?

const {Dog} = require("../../models/dog");
const withAuth = require("../../utils/auth")
const router = require("express").Router()

//IS THIS ROUTE CORRECT OR DOES IT NEED TO SAY /newdog?
//only allows post if logged in with wihtAuth, passes logged in status to newDog
router.post("/", withAuth, async(req,res) => {
    const newDog = Dog.create({...req.body, user_id: req.session.user_id})
});

//TO DO: GET Route for all dogs, with auth