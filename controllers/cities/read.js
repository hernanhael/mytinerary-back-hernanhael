import City from "../../models/City.js"

export default async(req, res, next) => { 
    try {
        let allCities = await City.find().populate( { 
            path: "itinerary", 
            select: "itinerary"
        } );
        return res.status(200).json({ 
            success: true, 
            response: allCities
    })
    } catch (err) {
        next();
    }
} 