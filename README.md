# serverless-lamdba-apollo-graphql-exemple

This project demonstrates the use of Serverless Framework to create a Node.js Lambda function, and it includes a GitHub Actions workflow for automated deployment into Apollo Studio and AWS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Cloud Infrastructure](#cloud-infrastructure)
  - [AWS Lambda Function](#aws-lambda-function)
  - [Amazon API Gateway](#amazon-api-gateway)
  - [Amazon DynamoDB](#amazon-dynamodb)
  - [IAM Roles](#iam-roles)

## Introduction

This Serverless Framework project showcases the implementation of a Node.js Lambda function. Additionally, it includes a GitHub Actions workflow for seamless deployment into Apollo Studio and AWS Lambda.

## Features

- Node.js Lambda function
- Serverless Framework configuration
- GitHub Actions deployment workflow
- Integration with Apollo Studio
- Deployment to AWS Lambda

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [Serverless Framework](https://www.serverless.com/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:JordanDabricot/serverless-lamdba-apollo-graphql-boilerplate.git
cd serverless-lamdba-apollo-graphql-boilerplate
```

2. Install and run the project

```bash
npm install
docker compose up
```

Go to http://localhost:10007/graphql

## Cloud Infrastructure

### AWS Lambda Function:
Create a Lambda function using the AWS Lambda service. This function will contain your Node.js code. You can upload your code directly or use an S3 bucket for deployment.

### Amazon API Gateway:
   Create an API Gateway to expose an HTTP endpoint that triggers your Lambda function. This is done by creating a new REST API and defining resources, methods, and integration settings.

Create a new REST API.
Define a resource (e.g., /items) and create a method (e.g., POST for creating items).
Connect the method to the Lambda function as the integration point.
### Amazon DynamoDB:
   Create a DynamoDB table to store data. This table will be used by your Lambda function to read or write data. Create a new DynamoDB table.
Define the primary key(s) for your table.
Adjust the read and write capacity based on your expected workload.
### IAM Roles:
   Set up IAM roles to grant permissions to your Lambda function and API Gateway to interact with other AWS services.

Create a role for the Lambda function with permissions to log to CloudWatch and read/write to DynamoDB.
Create a role for the API Gateway to invoke the Lambda function.

                  +--------------------------------------+
                  |                                      |
                  |          Amazon API Gateway          |
                  |                                      |
                  +------------------+-------------------+
                                     |
                                     | API Gateway URL
                                     v
    +--------------+             +-------------+            +----------------------+
    |              |             |             |            |                      |
    |  Router      |             | API Gateway |            |  AWS Lambda Function |
    |  (Apollo)    +------------>|   Resource  +----------->   Node.js Code        |
    |              | Request     |   /         |            |                      |
    +--------------+             +-------------+            +-----------+----------+
                                                                        |
                                                                        | DynamoDB
                                                                        v
                                                            +----------------------+
                                                            |                      |
                                                            |   Amazon DynamoDB    |
                                                            | (UserExampleTable)   |
                                                            |                      |
                                                            +----------------------+

Explanation:

1. Client (Web Browser): Initiates an HTTP request to the API Gateway URL.

2. Amazon API Gateway: Receives the HTTP request and forwards it to the specified resource (/items). It triggers the associated Lambda function.

3. AWS Lambda Function: The Node.js code in the Lambda function is executed. It processes the data, interacts with DynamoDB (e.g., inserts, updates, retrieves data), and returns a response.

4. Amazon DynamoDB: Stores and retrieves data as needed by the Lambda function.

5. This diagram provides a high-level overview of the flow of data from the client through the API Gateway to the Lambda function and DynamoDB. The specific details, such as the API Gateway configuration, Lambda function code, and DynamoDB table structure, may vary based on your project requirements.

