import City from "../../models/City.js"
import Itinerary from "../../models/Itinerary.js";

export default async(req, res, next) => { 
   try {
      const itinerary = await Itinerary.findOne( { itinerary: req.body.itinerary });
      let query = { ...req.body };
      query.itinerary = itinerary._id

      let newCity = await City.create(query); 
      return res.status(201).json({ 
         success: true, 
         message: "New city was created.", 
         response: newCity._id,
      });
   } catch (err) {
      console.log(err);
      return res.status(500).json({ 
         success: false,
         message: "error"
      })
   }
}