import City from "../../models/City.js"

export default async(req, res, next) => { 
    const { id } = req.params;
    try {
        let deletedCity = await City.findByIdAndDelete({_id: id}, { new: true});
        return res.status(200).json({ 
            message: "City was deleted",
            response: deletedCity
        });        
    } catch (err) { 
        next(err)
    }   
};