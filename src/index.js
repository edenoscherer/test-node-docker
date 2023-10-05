const express = require('express');

const app1 = express();
app1.get('*', async (req, res) => {
  res.send({ service: true, app:1 });
});
const PORT1 = process.env.PORT1 || 8081;
app1.listen(PORT1, () => {
  console.log(`App 1 is now running on port ${PORT1}!!!`);
  console.log(`The following profiles are active: ${process.env.NODE_ENV}`);
});


const app2 = express();
app2.get('*', async (req, res) => {
  res.send({ service: true, app:2 });
});
const PORT2 = process.env.PORT2 || 8082;
app2.listen(PORT2, () => {
  console.log(`App 2 is now running on port ${PORT2}!!!`);
  console.log(`The following profiles are active: ${process.env.NODE_ENV}`);
});

console.log(process.env)