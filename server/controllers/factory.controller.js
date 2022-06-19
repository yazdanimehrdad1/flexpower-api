const Factory = require('../models/factory.model')



const factoryController = {
    //check the health of factory api
    index: (req, res)=>{
        res.json({message: "factory api is working"})
    },

    // controller to get all factory data and handle error
    getAllFactories : async (req, res)=>{
        try {
            const allFactories = await Factory.find({})
            //define a new variable to return data based on the format described in seed_factory_data.json
            const result = []
            allFactories.map((element)=>{
                result.push(
                    {"factory": {"chart_data": element} }
                )
            })
            res.json({"factories":result})

            //the following line could be used to rreturn an array containing object for each factory
            // res.json(allFactories)
            
        } catch (error) {
            return res.status(400).json({message:error.message})
        }

    }, 


    // controller to get one factory based on specific id and handle error
    getOneFactory: async (req, res)=>{
        try {
            const oneFactory = await Factory.findById({_id:req.params.id})
            return res.json(oneFactory)
            
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }, 


    // controller to create a factory data and handle error
    createFactory: async (req, res)=>{
        const {sprocket_production_actual, sprocket_production_goal,time} = req.body
        try {
            const newFactory = new Factory({
                sprocket_production_actual,
                sprocket_production_goal,
                time
            })
            await newFactory.save()
            return res.json({message:"new factory was created"})
            
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }
}

module.exports = factoryController