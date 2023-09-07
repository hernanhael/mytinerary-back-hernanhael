import { Schema, model, Types } from "mongoose"

let itinerarySchema = new Schema({ 
    itinerary: { type: String, required: true, unique: true }
}, 
{ 
    timestamps: true
}); 

let Itinerary = model("itinerary", itinerarySchema); 

export default Itinerary; 