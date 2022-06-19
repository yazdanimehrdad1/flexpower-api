const Sprocket = require('../models/sprocket.model')

const sprocketController = {
    //check the health of sprocket api
    index: (req, res)=>{
        res.json({message: "sprocket api is working"})
    }, 

    // get list of all sprocket data from db and handle error
    getAllSprocket:async (req, res)=>{
        try {
            const data = await Sprocket.find({})
            return res.json(data)
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }, 

    // get one sprocket based on specific id from db and handle error
    getOneSprocket: async (req, res)=>{
        console.log(req.params)
        try {
            const oneSprocket = await Sprocket.findById({_id: req.params.id})
            return res.json(oneSprocket)
            
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }, 

    // create and save sprocket data to the db and handle error
    createSprocket: async (req, res)=>{

        //destructure the req
        const {teeth, pitch_diameter, outside_diameter, pitch} = req.body

        try {
            const newSprocket = new Sprocket({
                teeth, 
                pitch_diameter, 
                outside_diameter, 
                pitch
            })
            await newSprocket.save()
            return res.json({message:"new sprocket was created"})

        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }, 

    // remove sprocket with specific id from db and handle error
    deleteSprocket: async (req,res) =>{
        try {
            await Sprocket.findByIdAndDelete(req.params.id)
            return res.json({message: "A sprocket was deleted"})
            
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    },
    
    // update sprocket data based on specific id and save it to the db and handle error
    updateSprocket: async (req,res) =>{
        //destructure the req data
        const {teeth, pitch_diameter, outside_diameter, pitch} = req.body
        try {
            await Sprocket.findByIdAndUpdate(req.params.id, {
                teeth,
                pitch_diameter,
                outside_diameter,
                pitch
            } )
            return res.json({message: "A sprocket was updated"})
            
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }
}

module.exports = sprocketController