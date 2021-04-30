exports.handler = async () => {
  console.log("function ran");

  const data = { name: "hhh", age: 10, job: "fighter" };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
