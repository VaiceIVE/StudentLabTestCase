import mongoose from "mongoose"
export default async function() {
    try{
        await mongoose.connect("mongodb://self:admin@mongodb:27017", {
            "authSource": "admin" ,
            "user": "self",
            "pass": "admin",
        });
    }catch(e)
    {
        console.log(e);
    }
    
}