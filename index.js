// const fs = require("fs");

// fs.mkdirSync("data");
// fs.appendFileSync("data/animal.json", "")
// fs.appendFileSync("data/car.json", "")
// fs.appendFileSync("data/fruit.json", "")
// fs.appendFileSync("data/country.json", "")
// fs.appendFileSync("data/planet.json", "")
// fs.appendFileSync("data/football.json", "")
// fs.appendFileSync("data/writes.json", "")

// fs.mkdirSync("file manager")
// fs.writeFileSync("file manager/manager.js", "")

const http = require("http");
const fs = require("fs");
const { read_file, write_file } = require("./file manager/manager");
const { json } = require("stream/consumers");

const app = http.createServer((req, res) => {
  // GET /////////////////////////////////////////////////////////

  // animal

  if (req.method === "GET" && req.url === "/animal") {
    const data = read_file("animal.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
  }

  // car

  if (req.method === "GET" && req.url === "/car") {
    const data = read_file("car.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
  }

  // country

  if (req.method === "GET" && req.url === "/country") {
    const data = read_file("country.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
  }

  // footballclub

  if (req.method === "GET" && req.url === "/footballclub") {
    const data = read_file("footballclub.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
  }

  // fruit

  if (req.method === "GET" && req.url === "/fruit") {
    const data = read_file("fruit.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
  }

  //planet

  if (req.method === "GET" && req.url === "/planet") {
    const data = read_file("planet.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
  }

  // writes

  if (req.method === "GET" && req.url === "/writes") {
    const data = read_file("writes.json");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
  }

  ////////  POST ///////////////////////////////////////////////////////////////////////////

  // add  animal

  if (req.method === "POST" && req.url === "/add_animal") {
    req.on("data", (chunk) => {
      const animal = JSON.parse(chunk);
      const fileData = read_file("animal.json");

      fileData.push(animal);

      write_file("animal.json", fileData);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ habar: "yangi hayvon qo'shildi" }));
    });
  }

  /// add car

  if (req.method === "POST" && req.url === "/add_car") {
    req.on("data", (chunk) => {
      const car = JSON.parse(chunk);
      const fileData = read_file("car.json");

      fileData.push(car);

      write_file("car.json", fileData);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "new car addded" }));
    });
  }

  /// add country

  if (req.method === "POST" && req.url === "/add_country") {
    req.on("data", (chunk) => {
      const country = JSON.parse(chunk);
      const dataFile = read_file("country.json");

      dataFile.push(country);

      write_file("country.json", dataFile);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify("davlat qo'shildi"));
    });
  }

  // footbalclub

  if (req.method === "POST" && req.url === "/add_footballclub") {
    req.on("data", (chunk) => {
      const footbalclub = JSON.parse(chunk);
      const datAFIle = read_file("footballclub.json");

      datAFIle.push(footbalclub);

      write_file("footballclub.json", datAFIle);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ sms: "futbol club qo'shildi" }));
    });
  }

  // add fruit

  if (req.method === "POST" && req.url === "/add_fruit") {
    req.on("data", (chunk) => {
      const fruit = JSON.parse(chunk);
      const dataFile = read_file("fruit.json");

      dataFile.push(fruit);

      write_file("fruit.json", dataFile);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "new fruit added" }));
    });
  }

  /// add planet

  if (req.method === "POST" && req.url === "/add_planet") {
    req.on("data", (chunk) => {
      const planet = JSON.parse(chunk);
      const dataFile = read_file("planet.json");

      dataFile.push(planet);

      write_file("planet.json", dataFile);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "new planet added" }));
    });
  }

  // add writes

  if (req.method === "POST" && req.url === "/add_writes") {
    req.on("data", (chunk) => {
      const writes = JSON.parse(chunk);
      const dataFile = read_file("writes.json");

      dataFile.push(writes);

      write_file("writes.json", dataFile);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ soobsheniya: "noviy pisatel dobavlen" }));
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
