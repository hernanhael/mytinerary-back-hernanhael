import City from "../../models/City.js"

export default async(req, res, next) => { 
    try {
        /* const id = req.params; */
        let city = await City.findById({ _id: req.params });
        /* let city = await City.findOne({_id: req.params.id}, "city photo -_id"); */
        return res.status(200).json({
            success: true, 
            message: "City founded", 
            response: city
        })
    } catch (err) {
        return res.status(500).json( { 
            success: false, 
            message: err
        });
    }
}