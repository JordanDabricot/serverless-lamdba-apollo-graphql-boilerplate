const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const config = process.env.IS_OFFLINE ?
  {
    region: 'localhost',
    endpoint: 'http://dynamodb:8000',
    credentials: {
      accessKeyId: 'accessKeyId',
      secretAccessKey: 'secretAccessKey',
    }
  } :
  {};

console.log(process.env.IS_OFFLINE, config);

const client = new DynamoDBClient(config);
module.exports.docClient = DynamoDBDocumentClient.from(client);
