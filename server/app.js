import express from "express";
import db from "./db/db";
import bodyParsers from "body-parser";
import morgan from 'morgan';
import cors from 'cors';

//Set up express application
const app = express();

//enable cors
app.use(cors());

// Request Logging
app.use(morgan('dev'));

// Support for JSON body
app.use(bodyParsers.json());

//Supports encoded bodies
app.use(bodyParsers.urlencoded({ extended: true }));

//Get all employees
app.get("/api/v1/employee", (request, response) => {
  response.status(200).send({
    success: true,
    message: `We found ${db.length} employee(s)`,
    data: db
  });
});
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

app.post("/api/v1/employee", (request, response) => {
  let data = request.body;
  data.id = makeid();
  db.push(request.body);
  response.status(201).send({
    success: true,
    message: "Employee saved successfully"
  });
});

app.put("/api/v1/employee/:id", (request, response) => {
  const ids = db.map(employee => employee.id+'');
  const index = ids.indexOf(request.params.id);
  if (index > -1) {
    db[index] = request.body;
    response.status(201).send({
      success: true,
      message: "Employee updated successfully"
    });
  } else {
    response.status(404).send({
      success: false,
      message: "Invalid employee id"
    });
  }
});

app.delete("/api/v1/employee/:id", (request, response) => {
  const ids = db.map(employee => employee.id+'');
  const index = ids.indexOf(request.params.id);
  if (index > -1) {
    db.splice(index, 1);
    response.status(201).send({
      success: true,
      message: "Employee deleted successfully"
    });
  } else {
    response.status(404).send({
      success: false,
      message: "Invalid employee id"
    });
  }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);

  console.log("Available routes:");
  app._router.stack.forEach(function(r) {
    if (r.route && r.route.path) {
      const method = Object.keys(r.route.methods).find(
        key => r.route.methods[key]
      );
      console.log(`${method}\t\t${r.route.path}`);
    }
  });
});
