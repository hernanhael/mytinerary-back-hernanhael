import { Schema, model } from "mongoose"; 

let collection = "Cities"; 

let citySchema = Schema({ 
    city: { type: String, required: true },
    country: { type: String, required: true },
    foundation: { type: Date, required: true },
    population: { type: Number, required: true },
    photo: { type: String, required: true }, 
    description: { type: String, required: true}
}, { 
    timestamps: true,
}); 

let City = model(collection, citySchema); 
export default City; 