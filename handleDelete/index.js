// third party library
const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

const peopleModel = dynamoose.model('people', peopleSchema);

exports.handler = async (event) => {
  console.log(event.queryStringParameters);

  let response = { statusCode: null, body: null };
  let { id } = event.queryStringParameters;

  try {
    let personRecord = await peopleModel.delete({ 'id': id });
    console.log('Successfully deleted item');
    response.statusCode = 200;
    response.body = JSON.stringify(personRecord);

  } catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  return response;
};