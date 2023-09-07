import { Schema, model, Types } from "mongoose" 

let citySchema = new Schema({ 
    city: { type: String, required: true },
    country: { type: String, required: true },
    foundation: { type: Number, required: true },
    population: { type: Number, required: true },
    photo: { type: String, required: true }, 
    description: { type: String, required: true}, 
    itinerary: { type: Schema.Types.ObjectId, ref: "itinerary", required: true}
}, { 
    timestamps: true,
}); 

let City = model("citie", citySchema); 
export default City; 