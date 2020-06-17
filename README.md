# Ejecución Lambda AWS SAM Local

Acelerando el desarrollo sin servidor con AWS SAM (Serverless Application Model), SAM es una versión simplificada de los templates de CloudFormation.

### Requisitos previos

- NodeJS 10.x
- Docker
- AWS SAM

### Instalación AWS SAM CLI

- [Installing the AWS SAM CLI on Linux](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-linux.html)
- [Installing the AWS SAM CLI on Windows ](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-windows.html)
- [Installing the AWS SAM CLI on macOS ](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-mac.html)

###  Estructura Lambda

```
lambda-aws-hello
│
├── env.json
├── index.js
├── template.yaml
└── event.json
```

index.js

```javascript
exports.handler = async (event) => {
  const { name } = event;
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello Wolox my name is ${name}`),
  };
  return response;
};
```
template.yaml
```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: Sample Lambda AWS Hello

Resources:
  sampleLambdaAwsHello:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs12.x
      CodeUri: .
      MemorySize: 128
      Timeout: 5
```
event.js

```json
{
  "name": "Jonny Alexander",
  "age": 26
}
```

Los parámetros de una lambda para nodejs son los siguientes:
- **_event_**: Objeto que contiene la data del request
- **_context_**: Objeto que nos provee de información de ejecución de la función.

### Invocar funciones(Lambda) localmente


- `sam local invoke` ejecutar lambda sin event
- `sam local invoke -e event.json` ejecutar lambda con event
- `sam local invoke -e event.json --env-vars env.json` ejecutar lambda con event y environment
- `sam local invoke -t <name_template> -e event.json` ejecutar lambda con event especificando el nombre del template

![Lambda result execution](https://github.com/jonnyalexbh/lambda-local-aws-wolox/blob/master/images/Lambda-result-execution.png "Lambda result execution")
