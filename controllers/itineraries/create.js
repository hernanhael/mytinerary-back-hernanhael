import Itinerary from "../../models/Itinerary.js"

export default async(req, res, next) => { 
  try {
    const newItinerary = await Itinerary.create(req.body);
    res.status(201).json({ 
      newItinerary
    })
  } catch (err) {
    next(err)
  }
};