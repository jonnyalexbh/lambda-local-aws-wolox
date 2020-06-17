exports.handler = async (event) => {
  const { name } = event;
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello Wolox my name is ${name}`),
  };
  return response;
};
