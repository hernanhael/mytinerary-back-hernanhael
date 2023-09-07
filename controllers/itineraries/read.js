import Itinerary from "../../models/Itinerary"

export default async(req, res, next) => { 
    try {
        const itineraries = await Itinerary.find()
        res.status(200).json({ 
            itineraries
        })
    } catch (err) {
        next(err);
    }
}