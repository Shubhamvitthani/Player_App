const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Enable CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(jsonServer.bodyParser);

// POST to /players
server.post('/players', (req, res) => {
  const db = router.db;
  db.get('players').push(req.body).write();
  res.status(201).json(req.body);
});

server.use(router);

const PORT = 9000;
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
