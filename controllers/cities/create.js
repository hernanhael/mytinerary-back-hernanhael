import City from "../../models/City.js"

export default async(req, res, next) => { 
   try {
      let newCity = await City.create(req.body); 
      return res.status(201).json({ 
         success: true, 
         message: "New city was created.", 
         response: newCity._id,
      });
   } catch (err) {
      console.log(err);
      return res.status(500).json({ 
         sucess: false,
         message: "error"
      })
   }
}