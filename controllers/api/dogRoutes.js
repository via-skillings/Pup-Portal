//TO DO: POST Route for new dog, with auth, IS THE POST ROUTE CORRECT OR DOES IT NEED TO SAY /newdog?

const {Dog} = require("../../models");
const withAuth = require("../../utils/auth")
const router = require("express").Router()

//NOTE: REDUNDANT COPY OF NEW DOG ROUTE WITHOUT AUTH REQUIREMENT FOR TESTING POST ROUTE, DON'T DELETE UNTIL PROJECT COMPLETED
// router.post("/newdog", async(req,res) => {
//     try{
//         const newDog = await Dog.create(req.body)
//         res.json({newDog: newDog, message: 'new dog added successfully'});
           
//     } catch(err){
//         console.log("err: ",err)
//         res.status(400).json(err); 
//     }
// });

 //Post route to add a new dog
 //only allows post if logged in with wihtAuth, passes logged in status to newDog
router.post("/newdog", withAuth, async(req,res) => {
    try{
        const newDog = await Dog.create({...req.body, user_id: req.session.user_id})
        res.json({newDog: newDog, message: 'new dog added successfully'});
           
    } catch(err){
        console.log("err: ",err)
        res.status(400).json(err); 
    }
});
//attempt to retrieve all dogs from database
router.get('/', (req, res) => {
    console.log("return all dogs",Dog)
    try{
        Dog.findAll().then(data=>res.status(200).json(data))


        res.render('viewalldogs')
    }catch (error) {

        res.status(404).json({ message: error });
    }
});
module.exports = router;

//TO DO: GET Route for all dogs, with auth