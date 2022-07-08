# LAB - Class 18 - AWS: API, Dynamo and Lambda

Create a serverless REST API

## Author

Guy Farley

## Problem Domain

Work in a non-main branch in a new repository called ‘serverless-api’. While your code will all reside in a single repo, your functions will need to be individually .zipped and deployed using common libraries (node_modules) and schema files.

Create one table for one data model at Dynamo DB
Create a Dynamoose schema to define the structure of your table
Write lambda functions that will separately perform the proper CRUD operation on the database
Create your routes using API Gateway
Routes should integrate with the appropriate Lambda function to perform the operation

### Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

- **Database:** DynamoDB
  - 1 Table required

- **Routing:** API Gateway

  - **POST**
  - `/people` - Given a JSON body, inserts a record into the database
returns an object representing one record, by its id (##)

  - **GET**
  - `/people` - returns an array of objects representing the records in the database
  - `/people/##` - returns an object representing one record, by its id (##)

  - **PUT**
  - `/people/##` - Given a JSON body and an ID (##), updates a record in the database
returns an object representing one record, by its id (##)

  - **DELETE**
  - `/people/##` - Given an id (##) removes the matching record from the database
returns an empty object

- **CRUD Operation Handlers:** Lambda Functions

## Process Documentation

Root URL:
<https://u0d7zlvts8.execute-api.us-west-2.amazonaws.com/Beta>

Routes:

**POST**
/people

**GET**
/people
/people/##

**PUT**
/people/##

**DELETE**
/people/##

Inputs Required: Id number

Outputs Returned: JSON object(s) for requested records
