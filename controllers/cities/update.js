import City from "../../models/City.js"

export default async(req, res, next) => { 
    const { id } = req.params;
    try {
        let updateCity = await City.findByIdAndUpdate({ _id: id}, req.body, { 
            new: true,
        }, "name photo "); 
        return res.status(200).json({ 
            message: "City was updated", 
            response: updateCity
        })      
    } catch (err) {
        next(err)
    }
};