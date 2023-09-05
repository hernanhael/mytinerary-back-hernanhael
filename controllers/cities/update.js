import City from "../../models/City.js"

export default async(req, res, next) => { 
    try {
        let updateCity = await City.findByIdAndUpdate(req.params.id, req.body, { 
            new: true,
        }).select("city photo"); 
        return res.status(200).json({ 
            success: true, 
            message: "City was updated", 
            response: updateCity
        })      
    } catch (err) {
        next(err)
    }
};