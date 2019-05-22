const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "pruebas";

var conectarMongo = async () => {
  let client = undefined;
  try {
    // Create a new MongoClient
    client = new MongoClient(url, { useNewUrlParser: true });
    // Use connect method to connect to the Server
    con = await client.connect();
    let db = await client.db(dbName);
    db.client = client;
    return db;
  } catch (err) {
    throw err;
  } finally {
    if (client) {
      //client.close();
    }
  }
};

var ejecutarSelect = async () => {
  let db = undefined;
  try {
    db = await conectarMongo();
    let libroCollection = await db.collection("Usuario");
    let libros = await libroCollection.find({});
    let retorno = await libros.toArray();
    return retorno;
  } catch (error) {
    throw error;
  } finally {
    if (db && db.client) {
      db.client.close();
    }
  }
};

ejecutarSelect()
  .then(data => console.log(data))
  .catch(err => console.log(err));

ejecutarSelect()
  .then(data => console.log(data))
  .catch(err => console.log(err));

ejecutarSelect()
  .then(data => console.log(data))
  .catch(err => console.log(err));

ejecutarSelect()
  .then(data => console.log(data))
  .catch(err => console.log(err));
