import mongoose from "mongoose"
export default async function() {
    await mongoose.connect("mongodb://self:admin@localhost:27017/lab?authSource=admin", {
        "authSource": "admin" ,
        "user": "self",
        "pass": "admin",
    });
}