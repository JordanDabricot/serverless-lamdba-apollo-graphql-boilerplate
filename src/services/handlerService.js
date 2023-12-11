const { ExecuteStatementCommand } = require('@aws-sdk/lib-dynamodb');
const { docClient } = require('../lib/dynamodb');

async function getAllUsers() {
  const command = new ExecuteStatementCommand({
    Statement: `SELECT * FROM UserExampleTable`,
  });
  const response = await docClient.send(command);
  if (response === null || response?.Items.length === 0) {
    throw new Error("Not found !");
  }

  return response.Items;
}

async function getUser(id) {
  const command = new ExecuteStatementCommand({
    Statement: `SELECT * FROM UserExampleTable WHERE userId=?`,
    Parameters: [id],
  });
  const response = await docClient.send(command);
  if (response === null || response?.Items.length === 0) {
    throw new Error("Not found !");
  }
  
  return response.Items;
}

module.exports = {
  getAllUsers,
  getUser
}