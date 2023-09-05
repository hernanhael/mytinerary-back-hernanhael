import City from "../../models/City.js"

export default async(req, res, next) => { 
    try {
        let all = await City.find()
    return res.status(200).json({ 
        success: true, 
        response: all
    })
    } catch (err) {
        next();
    }
} 