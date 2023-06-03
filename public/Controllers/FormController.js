"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoService_1 = __importDefault(require("../Services/MongoService"));
class FormController {
    Save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const data = (req.body);
            const mongoResponse = yield MongoService_1.default.Save(data.username, data.email, data.payload);
            res.json(mongoResponse);
        });
    }
    Get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const mongoResponse = yield MongoService_1.default.Get(req.params.id);
            res.json(mongoResponse);
        });
    }
    GetAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
                #swagger.responses[200] = {
                description: 'Информация об записи ответа на базе',
                schema: { $ref: '#/definitions/FormResponse' }
            }
            */
            const mongoResponse = yield MongoService_1.default.GetAll();
            res.json(mongoResponse);
        });
    }
}
exports.default = new FormController();
