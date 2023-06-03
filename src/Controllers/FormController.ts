import { Request, Response, NextFunction } from "express"
import MongoService from "../Services/MongoService"
import IFeedback from "../Interfaces/IFeedback"

class FormController
{
    async Save(req: Request, res: Response, next: NextFunction)
    {
        // #swagger.description = 'Метод для добавления новой записи об заполнении формы'
        /*  #swagger.parameters['body'] = {
                in: 'body',
                description: 'Информация об ответах',
                schema: { $ref: '#/definitions/Payload'}
        } 
            #swagger.responses[200] = {
            description: 'Информация об записи ответа на базе',
            schema: { $ref: '#/definitions/FormResponse' }
        } 
        */
        const data = (req.body) as IFeedback

        const mongoResponse = await MongoService.Save(data.username, data.email, data.payload)
        res.json(mongoResponse)
    }

    async Get(req: Request, res: Response, next: NextFunction)
    { // #swagger.description = 'Метод для получения информации об крнкретном экземпляре заполнения формы'
        /*  #swagger.parameters['query'] = {
                in: 'query',
                description: 'ID ответа',
                schema: { $ref: '#/definitions/IDSearch'}
        } 
            #swagger.responses[200] = {
            description: 'Информация об записи ответа на базе',
            schema: { $ref: '#/definitions/FormResponse' }
        } 
        */
        const mongoResponse = await MongoService.Get(req.params.id)
        res.json(mongoResponse);
    }
   

    async GetAll(req: Request, res: Response, next: NextFunction)
    {// #swagger.description = 'Метод для получения всей информации об ответах'
        /*  
            #swagger.responses[200] = {
            description: 'Информация об записи ответа на базе',
            schema: { $ref: '#/definitions/FormResponse' }
        } 
        */
        const mongoResponse = await MongoService.GetAll()
        res.json(mongoResponse);
    }
     
}

export default new FormController()
