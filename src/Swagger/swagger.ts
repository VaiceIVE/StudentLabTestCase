import swaggerAutogen from "swagger-autogen";
swaggerAutogen();
const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/Routers/FormRouter.ts']
const doc = {
    swagger: "2.0",
    openapi: "3.0.0",
    info: {
      title: 'Агент авторизации',
      description: 'Агент для авторизации пользователей в сервисе написанный на NodeJS с хранением данных пользователей на MongoDB',
    },
    definitions: {
        Payload:
        {
            $username: "Some User",
            $email: "User`s@mail.com",
            $payload: [{"1": "yes", "2": "no"}, "Some long text"]
        },
        FormResponse:
        {
            
            $username: "bibaboba",
            $email: "bobas mail",
            $payload: [{"1": "yes", "2": "no"}, "Some long text"],
            $_id: "647b8002cbd16edc83da220a",
            $__v: 0
            
        },
        FormID:
        {
            $id : "647b8002cbd16edc83da220a"
        }
      },

    host: 'localhost:8000',
    schemes: ['http'],
    
  };
swaggerAutogen(outputFile, endpointsFiles, doc)