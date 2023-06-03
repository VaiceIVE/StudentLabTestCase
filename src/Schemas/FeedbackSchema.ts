import { Schema, model } from "mongoose";
import IFeedback from "../Interfaces/IFeedback";

const feedbackSchema = new Schema<IFeedback>(
    {
        username: {type: String, required: true},
        email: {type: String, required: true},
        payload: [{type: Object, required: true}]
    }
)

export default model('Feedbacks', feedbackSchema);
