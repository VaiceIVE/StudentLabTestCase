import FeedbackSchema from "../Schemas/FeedbackSchema"


class MongoService
{
    async Save(username: string, email: string, payload: object[])
    {
        const response = await FeedbackSchema.create(
            {
                username: username,
                email: email,
                payload: payload
            }
        )
        return response;
    }   

    async Get(id: string)
    {   
        const response = await FeedbackSchema.findOne({"_id": id})
        return response
    }

    async GetAll()
    {
        const response = await FeedbackSchema.find()
        return response
    }
}

export default new MongoService()